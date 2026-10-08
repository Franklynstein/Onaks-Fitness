# Onaks Fitness — instructions for Claude Code

Read `DESIGN-BRIEF.md` first, then open the five files in `design-reference/` in a browser (they are
self-contained) before touching any code. They are the approved design and the only visual target.

Rules
- Rebuild in the existing React / Vite / Tailwind app. Keep routing, data, auth, payments and integrations as they are. Only the presentation layer changes.
- Match the reference exactly: layout, spacing, colours, type, copy, animations and timings, desktop and mobile.
- Any page that has no reference file (login, sign up, forgot/reset password, 404, privacy, terms, checkout, thank-you, dashboard, admin) gets the same design system. Public pages keep the full motion set; logged-in pages use the reduced motion rules in section 8 of the brief.
- Put tokens in one place (Tailwind theme / CSS variables) and build shared components: Nav (with Free resources dropdown and mobile menu), Footer, Button, GhostButton, Card, HighlightCard, PageHero, Sweep, AmbientBackground, ProgressBar, Marquee, BeforeAfterWipe, ReviewsCarousel, PhoneFrame, Input, Select, SegmentedControl, FormConfirmation.
- No em dashes in any copy. British spelling (programme, personalised).
- Do not add stock photography or AI generated people. Use only images already in the repo or supplied by the owner.
- Work in small commits with clear messages. Open a PR per page or feature. Never push to main directly.
- Before you finish each page, screenshot it at 1440px and 390px and compare it with the reference HTML. Fix every difference.
