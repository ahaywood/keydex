# PROJECT.md — Keydex

_Read this first. Every session starts here._

---

## What This Is

**One sentence:** A premium npm package marketplace with built-in license key management, rate limiting, and CLI tooling for both sellers and buyers.

**The problem it solves:** There's no great way to sell premium npm packages with proper license enforcement and rate limiting. Developers either cobble together Gumroad + manual license checks, or just trust buyers. Keydex makes selling and consuming paid npm packages as frictionless as the open source npm workflow.

**The goal:** A fully working marketplace where sellers can publish and monetize packages, buyers can install and use them with license enforcement, and everything is managed via CLI — just like npm itself.

---

## Status

**Current phase:** Active Development — design complete in Figma, frontend and backend still to build

**Last worked on:** [Date]

**Pick up here:** Convert Figma designs to frontend. Start with the marketing site, then the seller dashboard, then buyer dashboard. Backend and CLI come after the UI is in place.

---

## Who It's For

**Primary users:**
- **Sellers** — developers monetizing their npm packages
- **Buyers** — developers purchasing and consuming premium packages

**Secondary users:**
- **Team members** — given access to manage and release packages on behalf of a seller

**Personal or commercial:** Commercial product — sold to developers

---

## Revenue / Value Model

Paddle-based transaction fees or subscription on seller accounts. Keydex directly enables Vibe Driven — the license key and rate limiting infrastructure is shared.

---

## Surfaces

### Marketing Site (public)
- Homepage
- Blog
- Documentation
- Pricing
- Package discovery + search
- Individual package detail pages
- Seller profile pages

### Buyer Dashboard (authenticated)
- All purchased packages with license keys
- License usage tracking (how many seats used)
- Issue board per package
- Discussion board per package
- Direct message to seller

### Seller Dashboard (authenticated)
- Stats overview (sales, revenue, active licenses)
- Package management (create, publish, version, deprecate)
- Customer list
- Sales list — orders, subscriptions, coupons
- Support — issue board, discussion board, direct messages from buyers
- Team management — invite members, set permissions

### Seller Marketing Tools (v2)
_Don't build now — note for future:_
- Broadcast newsletters
- Audience segmentation
- Email automations
- Third-party integrations
- Social media post updates

### CLI — Seller
- Publish and release packages
- Manage versions
- View sales stats

### CLI — Buyer
- Install a licensed package
- License key validation at install time
- Rate limiting enforcement at runtime

---

## Scope

**MVP gate:** A seller can publish a package, a buyer can purchase and install it via CLI with license enforcement. Everything else is secondary.

**Explicitly out of scope for v1:**
- Seller marketing tools (newsletters, automations, social)
- Mobile app
- Public API

---

## Stack Notes

Uses global stack. See `STACK.md`.

Additional considerations:
- **Payments:** Paddle — international developer audience, merchant of record handles tax compliance
- **CLI:** Node.js CLI tools (two separate packages — `keydex-publish` for sellers, `keydex` for buyers)
- **License enforcement:** Durable Objects for rate limiting state — edge-native, no external service needed
- **Package registry:** Needs a decision on whether Keydex hosts its own registry or wraps npm. Document in DECISIONS.md once explored.
- **Search:** Needs full-text search across packages — Cloudflare D1 FTS or a dedicated search index

---

## Key Relationships

- **Depends on:** Nothing
- **Feeds into:** Vibe Driven — the license key and rate limiting infrastructure built here is the foundation Vibe Driven needs

---

## Linear

**Project:** https://linear.app/ahhacreative/project/keydex-6c613e967c29/issues?layout=list&ordering=priority&grouping=workflowState&subGrouping=none&showCompletedIssues=all&showSubIssues=true&showTriageIssues=true

**Active cycle:** [Current cycle or sprint name]

---

## Agent Notes

Design is done in Figma. Primary job is converting designs to frontend, then wiring backend.

**Suggested order:**
1. Marketing site (homepage, pricing, package detail, search)
2. Auth (buyer + seller login, separate onboarding flows)
3. Seller dashboard (package management first, then stats, customers, sales)
4. Buyer dashboard (purchased packages, license keys, usage)
5. Support surfaces (issue board, discussion board, direct messages)
6. Team management
7. Seller CLI (`keydex-publish`)
8. Buyer CLI (`keydex` install + license validation)
9. Rate limiting via Durable Objects
10. Blog + documentation

Resolve the package registry question (own registry vs. npm wrapper) early — it affects the CLI architecture significantly.

---

_Keep this file current. "Pick up here" should always reflect reality — update it at the end of every session._
