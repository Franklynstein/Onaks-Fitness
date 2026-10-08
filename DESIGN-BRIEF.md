# Onaks Fitness — Design System and Rebuild Brief

This folder is the single source of truth for the redesign. The five HTML files in `design-reference/` are
finished, approved designs. Rebuild them in the existing React / Vite / Tailwind codebase so the result is
visually identical, then apply the same system to every other page in the app.

## 1. Brand tokens (from the Onaks brand guide)

| Token | Value | Use |
|---|---|---|
| Core Black | `#151515` | page background; button text on gradient uses `#081108` |
| Black 2 / 3 | `#1C1C1C` / `#232323` | subtle card surfaces |
| Electric Green | `#00EB2B` | accent, eyebrows, success, footer statement |
| Pulse Blue | `#00B4FB` | second accent |
| Ignite gradient | `linear-gradient(90deg,#00EB2B 0%,#00B4FB 100%)` | primary buttons, gradient text, bars, dropdown accents |
| White | `#F4F6F4` | headings, body |
| Muted | `#9BA39D` | secondary text |
| Line | `rgba(255,255,255,.08)` | borders |
| Font | Plus Jakarta Sans 400/500/600/700/800 (Google Fonts) | everything |

Headings: weight 800, letter-spacing -0.025em, line-height 1.02. Body 17px / 1.55.
Buttons: pill, Ignite gradient, dark text, glow `0 0 36px rgba(0,235,43,.35)`, light shine sweep on hover.
Ghost buttons: pill, 1px `rgba(255,255,255,.18)` border, green border on hover.
Cards: radius 24 to 30px, `rgba(255,255,255,.035)` fill, 1px Line border, green border on hover, lift 4 to 6px.
Highlight cards use a gradient border (`background: linear-gradient(#151515,#151515) padding-box, Ignite border-box`).

## 2. Signature visuals (must be reproduced)

- Ignite sweep: large curved stroke(s) plus a lightning slash drawn as inline SVG with `stroke="url(#ig)"`.
  On page load the paths draw themselves in (stroke-dashoffset), then drift slowly.
- Ambient background: three blurred green/blue radial orbs fixed behind the page, slowly drifting, with a
  gentle parallax on scroll. Body background colour tweens between `#151515`, `#141a16` and `#131a1f` as
  sections pass, with long overlaps so there are NEVER visible hard colour edges between sections.
- Ignite progress bar fixed at the top, 3px, scales with scroll.
- Marquee (home only): `Proudly sponsored by potatoes · eggs · ground beef · zero sugar drinks · And of course, plantain`
  with gradient dots, 48s loop, pauses on hover.
- Big footer statement in Electric Green: "Skip the guesswork. Start losing fat."

## 3. Motion rules (public pages)

- GSAP + ScrollTrigger in the HTML references; in React use Framer Motion (or GSAP via useGSAP) and keep timings identical.
- Hero: sweep draws (1.6s), photo rises, headline words reveal with 0.08s stagger, then lead, buttons, proof line.
- Section headings blur in (filter blur 14px to 0, 1.1s). Blocks fade/translate in (28px, 0.9s, power3.out), once.
- Left/right slide-ins for image columns, staggered lists (0.1s), clip-path wipe reveals for photos.
- Before/after: scroll-driven wipe (before left, after sweeps in from the right between card top at 65% of
  viewport and card centre at 30%), draggable to compare, re-takes scroll control after the user scrolls on.
  USE PLAIN SCROLL MATHS, NOT ScrollTrigger scrub, so it works on iOS. See the `wipe` block in home.html.
- Reviews carousel: native horizontal scroll with snap, drag, arrows, autoplay every 4s, pauses on hover/touch, loops.
- Phone frame tilts in 3D as it passes; app screenshot floats; feature rows nudge and glow on hover.
- Everything respects prefers-reduced-motion (show final states, no motion).

## 4. Navigation (every page)

Desktop: three-part bar, logo left, links centred, button right.
Links: Programmes, Free resources (dropdown), Ebook, Results, [Book a free call].
Free resources dropdown: Calorie calculator ("Your daily calories and macros, free"),
Free workout programme ("3 and 4 day gym plans, sent to your inbox"). FAQ is NOT in the bar.
Bar becomes blurred glass with a bottom border after 24px of scroll and shrinks slightly.
Mobile: compact button plus hamburger; full screen menu rendered OUTSIDE the header element (so backdrop-filter
does not trap it): Programmes, FREE RESOURCES group (Calorie calculator, Free workout programme, indented with a
green rule), Ebook, Results, Client reviews, Book a free call.

## 5. Footer (every page)

Four link columns: Coaching (Programmes, Results, Client reviews, FAQ) · Free resources (Calorie calculator,
Free workout programme, Ebook) · Company (Contact, Privacy policy, Terms of service) ·
Get in touch (Instagram, TikTok, onaksfitness@gmail.com).
Then the big green statement, then five pills (Free 30 minute call, Plans written for you, Weekly check-ins,
Direct line to me, Train anywhere), then the disclaimer line:
"Onaks Fitness provides online fat loss coaching, training programmes and nutrition resources. Results vary and depend on your consistency."
and the copyright bar. NO medical disclaimer. Contact email everywhere is onaksfitness@gmail.com.

## 6. Pages in this reference

| File | Route | Notes |
|---|---|---|
| home.html | / | hero, marquee, transformation wipe, programme video (vertical phone), what you get, free resources, reviews carousel, why I coach, CTA, FAQ |
| programs.html | /programs | product shop: male/female training programmes (radio pick, button shows "Buy X for $"), Glute Max banner, grocery lists (incl. vegan), combination packages, ebook block, coaching CTA |
| ebook.html | /ebook | Build Different: hero with cutout mockup, video, before/after wipe, what's inside (4 parts), guarantee, what you'll learn, 9 reviews, CTA with trust row, ebook FAQ |
| calorie-calculator.html | /calorie-calculator | email + sex + age + height + weight (kg/lbs) + activity + goal + pace; results are EMAILED, page shows a "Sent, check your inbox" panel with spam/Promotions tips |
| free-workout.html | /free-workout | lead capture: first name + email; gym only; 3 day and 4 day plans; same "Sent" confirmation |

Copy is final. Do not rewrite wording. Do not use em dashes anywhere in new copy. British spelling (programme, personalised).

## 7. Pages NOT in this reference (login, sign up, forgot password, reset password, 404, privacy, terms, contact, checkout, thank-you, any others)

Build them in the same system without being asked: same nav, footer, background, tokens, type, buttons and
card styles. Use the "page hero" pattern from the subpages (eyebrow + h1 + lead over a sweep) for titled pages,
and a single centred gradient-border card for auth forms. Inputs follow the calculator's input style.
Keep the sweep draw-in and heading blur; skip anything heavier.

## 8. Internal / logged-in pages (dashboard, client area, admin)

Same tokens, nav style, cards, inputs and buttons. REDUCE MOTION: no sweeps, no ambient orbs, no marquee,
no scroll reveals. Keep only hover states, button shine, and a 150 to 200ms fade on route change. Dense layouts,
tables and forms take priority over decoration.

## 9. Still to wire (placeholders in the reference)

- Buy buttons (Stripe or whatever is used), Calendly embed on the booking section, Instagram/TikTok links,
  privacy/terms pages, VIDEO_ID for the homepage YouTube Short, EBOOK_VIDEO.mp4, email tool endpoints for the
  calculator and workout forms. Keep existing integrations from the current codebase; only the visuals change.
- Images in the reference are embedded as data URIs cropped from screenshots. Replace them with the originals
  from the repo or the owner (hero cutout, before/after, Gymshark photo, app screenshots, Build Different mockup).

## 10. Definition of done

Side by side with the reference HTML at 1440px and 390px, nothing visibly differs: layout, spacing, colours,
type sizes, animations and timings, mobile menu, dropdown, carousel, before/after wipe, forms and confirmations.
Lighthouse mobile performance should not drop below the current site.
