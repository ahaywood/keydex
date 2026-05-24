import fs from "node:fs";

// Matches any Linear-style ID: ABC-123, FORM-42, etc.
const ISSUE_ID_RE = /\b[A-Z][A-Z0-9]{1,9}-\d+\b/g;

// Matches closing keywords immediately followed by a Linear ID.
// Groups: [0] full match, [1] keyword, [2] issue ID
const CLOSING_RE =
  /\b(?:close[sd]?|closing|fix(?:es|ed|ing)?|resolve[sd]?|resolving|complete[sd]?|completing)\s+([A-Z][A-Z0-9]{1,9}-\d+)\b/gi;

// GitHub merge commits should be handled by the pull_request event, not push.
const MERGE_COMMIT_RE = /^Merge pull request #\d+/;

// ─── Linear API helpers ───────────────────────────────────────────────────────

async function linearRequest(query, variables, apiKey) {
  const res = await fetch("https://api.linear.app/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Linear HTTP ${res.status}: ${await res.text()}`);
  }

  const json = await res.json();

  if (json.errors?.length) {
    throw new Error(`Linear GraphQL: ${JSON.stringify(json.errors)}`);
  }

  return json.data;
}

/** Resolve a human-readable identifier like "FORM-42" to its internal UUID + metadata. */
async function lookupIssue(identifier, apiKey) {
  const data = await linearRequest(
    `query($id: String!) {
      issue(id: $id) {
        id
        identifier
        team { id }
        state { type }
      }
    }`,
    { id: identifier },
    apiKey,
  );
  return data.issue ?? null;
}

/** Find the first workflow state of type "completed" for a given team. */
async function getCompletedStateId(teamId, apiKey) {
  const data = await linearRequest(
    `query($teamId: ID!) {
      workflowStates(
        filter: { team: { id: { eq: $teamId } }, type: { eq: "completed" } }
        first: 1
      ) {
        nodes { id name }
      }
    }`,
    { teamId },
    apiKey,
  );
  return data.workflowStates.nodes[0]?.id ?? null;
}

async function postComment(issueUUID, body, apiKey) {
  const data = await linearRequest(
    `mutation($issueId: String!, $body: String!) {
      commentCreate(input: { issueId: $issueId, body: $body }) {
        success
      }
    }`,
    { issueId: issueUUID, body },
    apiKey,
  );
  return data.commentCreate.success;
}

async function updateIssueState(issueUUID, stateId, apiKey) {
  const data = await linearRequest(
    `mutation($id: String!, $stateId: String!) {
      issueUpdate(id: $id, input: { stateId: $stateId }) {
        success
      }
    }`,
    { id: issueUUID, stateId },
    apiKey,
  );
  return data.issueUpdate.success;
}

// ─── Text parsing ─────────────────────────────────────────────────────────────

function extractAllIds(text) {
  return [...new Set((text.match(ISSUE_ID_RE) ?? []))];
}

function extractClosingIds(text) {
  const ids = new Set();
  CLOSING_RE.lastIndex = 0;
  let m;
  while ((m = CLOSING_RE.exec(text)) !== null) {
    ids.add(m[1]);
  }
  return ids;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const eventName = process.env.GITHUB_EVENT_NAME;
  const eventPath = process.env.GITHUB_EVENT_PATH;
  const repo = process.env.GITHUB_REPOSITORY;
  const serverUrl = process.env.GITHUB_SERVER_URL ?? "https://github.com";
  const apiKey = process.env.LINEAR_API_KEY;

  if (!eventPath) throw new Error("GITHUB_EVENT_PATH not set");
  if (!apiKey) throw new Error("LINEAR_API_KEY secret not set");

  const payload = JSON.parse(fs.readFileSync(eventPath, "utf8"));

  // Map of Linear identifier -> { commentBody, shouldComplete }
  // Using a Map so each identifier is processed exactly once even if
  // referenced multiple times across commits or in both title + body.
  const issues = new Map();

  function record(identifier, commentBody, shouldComplete) {
    if (!issues.has(identifier)) {
      issues.set(identifier, { commentBody, shouldComplete: false });
    }
    // Once flagged for completion, keep it flagged.
    if (shouldComplete) {
      issues.get(identifier).shouldComplete = true;
    }
  }

  if (eventName === "push") {
    const baseUrl = `${serverUrl}/${repo}`;
    const commits = payload.commits ?? [];

    for (const commit of commits) {
      const message = commit.message ?? "";

      // Skip merge commits — those are covered by the pull_request event.
      if (MERGE_COMMIT_RE.test(message)) continue;

      const url = commit.url ?? `${baseUrl}/commit/${commit.id}`;
      const ids = extractAllIds(message);
      const closingIds = extractClosingIds(message);

      for (const id of ids) {
        const body = [
          `**Commit pushed to \`main\`:** [${commit.id?.slice(0, 7) ?? "view"}](${url})`,
          "",
          `> ${message.trim().split("\n")[0]}`,
        ].join("\n");

        record(id, body, closingIds.has(id));
      }
    }
  } else if (eventName === "pull_request") {
    const pr = payload.pull_request;

    if (!pr?.merged) {
      console.log("PR not merged — nothing to do.");
      return;
    }

    const text = `${pr.title ?? ""}\n${pr.body ?? ""}`;
    const ids = extractAllIds(text);
    const closingIds = extractClosingIds(text);

    for (const id of ids) {
      const body = [
        `**PR merged into \`main\`:** [${pr.title}](${pr.html_url})`,
      ].join("\n");

      record(id, body, closingIds.has(id));
    }
  } else {
    console.log(`Unsupported event "${eventName}" — skipping.`);
    return;
  }

  if (issues.size === 0) {
    console.log("No Linear issue IDs found — nothing to do.");
    return;
  }

  console.log(`Found Linear IDs: ${[...issues.keys()].join(", ")}`);

  for (const [identifier, { commentBody, shouldComplete }] of issues) {
    console.log(`\nProcessing ${identifier} (complete=${shouldComplete})`);

    let issue;
    try {
      issue = await lookupIssue(identifier, apiKey);
    } catch (err) {
      console.error(`  ✗ Lookup failed for ${identifier}: ${err.message}`);
      continue;
    }

    if (!issue) {
      console.warn(`  ✗ ${identifier} not found in Linear — skipping.`);
      continue;
    }

    try {
      await postComment(issue.id, commentBody, apiKey);
      console.log(`  ✓ Comment posted`);
    } catch (err) {
      console.error(`  ✗ Comment failed: ${err.message}`);
    }

    if (shouldComplete) {
      if (issue.state?.type === "completed") {
        console.log(`  – Already completed, skipping state update`);
        continue;
      }

      try {
        const stateId = await getCompletedStateId(issue.team.id, apiKey);

        if (!stateId) {
          console.warn(`  ✗ No "completed" workflow state found for this team`);
          continue;
        }

        await updateIssueState(issue.id, stateId, apiKey);
        console.log(`  ✓ Marked as completed`);
      } catch (err) {
        console.error(`  ✗ State update failed: ${err.message}`);
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
