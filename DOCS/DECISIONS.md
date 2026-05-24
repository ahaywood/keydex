# DECISIONS.md — Keydex

_A log of meaningful technical and product decisions. Future sessions should read this before making architectural choices._

---

## How to Use This File

When you make a decision that isn't obvious — a stack deviation, a tradeoff, a rejected approach — log it here. Format:

```
## [Decision Title]
**Date:** YYYY-MM-DD
**Decision:** What was decided
**Rationale:** Why
**Alternatives considered:** What else was on the table
**Consequences:** What this means going forward
```

---

## Package Registry — Self-Hosted vs. npm Wrapper

**Date:** 2026-04-21
**Decision:** Build and maintain a self-hosted package registry rather than wrapping npm.
**Rationale:** Wrapping npm introduces too many limitations — npm controls the install experience, the package visibility, the rate limiting surface, and the auth layer. A self-hosted registry gives full control over the entire lifecycle: publishing, versioning, licensing enforcement, rate limiting, and the buyer install experience.
**Alternatives considered:**
- **npm wrapper** — simpler CLI, faster to build, but licensing enforcement is bolted on rather than native. npm could change policies that break the product. Rejected.
- **Scoped npm packages with a license check on install** — common pattern but easy to bypass, no real rate limiting, no control over distribution. Rejected.
**Consequences:**
- The CLI (`keydex` for buyers, `keydex-publish` for sellers) must implement the full registry protocol — package resolution, versioning, tarball serving, authentication
- Buyers configure their project to use the Keydex registry (similar to how private npm registries work via `.npmrc`)
- More infrastructure to build and maintain, but complete control over the product experience
- Rate limiting via Durable Objects is a first-class feature, not an afterthought
