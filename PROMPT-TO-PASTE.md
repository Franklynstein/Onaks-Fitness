Paste this as your first message in Claude Code, from the root of the repo:

---
Read CLAUDE.md and DESIGN-BRIEF.md, then open each file in design-reference/ and study it. Then:

1. Audit the codebase: list every route and page component, which are public and which are logged-in, and what integrations (auth, payments, Calendly, email, video) they use. Do not change anything yet.
2. Propose a plan: shared components to build, tokens to add to the Tailwind config, and the order you will rebuild pages in (home, programs, ebook, calorie-calculator, free-workout, then every remaining public page, then logged-in pages with reduced motion).
3. Wait for my OK, then start with the shared components and the homepage on a branch called redesign/homepage, matching design-reference/home.html exactly at 1440px and 390px.
---
