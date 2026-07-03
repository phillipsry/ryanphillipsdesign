# Handoff: Ryan Phillips — UX Portfolio Site

## Overview

A five-page personal portfolio for Ryan Phillips, a UX design leader. It presents three enterprise case studies, a side-projects page showcasing the Quill Design System, and a home page with hero, selected work, process, about, endorsements, and contact. The visual language is a "naturalist sketchbook on cool paper": warm sepia inks and Fraunces serif from the Quill Design System, layered over a cool slate ground with an indigo accent, paper-grain texture everywhere, and hand-written Caveat annotations.

## About the Design Files

The files in `site/` are **design references created in HTML** — high-fidelity prototypes showing the intended look and behavior. They are not production code to copy directly. The task is to **recreate these designs in a real web codebase**. No target codebase exists yet, so choose the most appropriate stack; **Next.js (App Router) with plain CSS Modules or Tailwind** is a good default for a static-content portfolio that needs clean routing, image optimization, and easy Vercel deployment.

Two implementation-specific notes:

1. The prototypes are built as `.dc.html` documents that rely on a runtime (`support.js`). Ignore that mechanism entirely — treat the rendered pages as the spec. Everything visual is inline styles + one `<style>` block per page.
2. `<image-slot>` elements are a prototyping tool (drag-and-drop image placeholders). In production replace each with a plain `<img>` (or `next/image`) pointing at the file named by its `src` attribute in `assets/user-images/`. The `.image-slots.state.json` file is prototype state and should not ship.

## Fidelity

**High-fidelity.** Colors, typography, spacing, copy, and interactions are final design intent. Recreate pixel-perfectly using the target stack's conventions. All copy in the HTML is final and approved — reproduce it verbatim, including the `№` numero glyph, `·` separators, and the absence of em dashes (the author deliberately avoids them; do not introduce any).

## Site map / routes

| Prototype file | Suggested route |
|---|---|
| `Home.dc.html` | `/` |
| `Case-Tracking-AI-Token-Usage.dc.html` | `/work/tracking-ai-token-usage` |
| `Case-A-System-That-Scales.dc.html` | `/work/a-system-that-scales` |
| `Case-From-Prompt-To-Production.dc.html` | `/work/from-prompt-to-production` |
| `Side Projects-Made-In-The-Margins.dc.html` | `/side-projects` |

Cross-page links in the prototypes use file names + anchors (`Home.dc.html#work`); map them to routes + anchors (`/#work`).

## Screens / Views

### Global chrome (all pages)

- **Sticky header**: `position: sticky; top: 0`, background `rgba(230,233,235,.82)` with `backdrop-filter: blur(10px)`, bottom hairline `var(--line-faint)`. Contents: logo (RP monogram SVG in indigo + "Ryan Phillips" in Fraunces 19px with shimmer hover) linking home, nav links (Raleway 14px: Work, Process, About, Endorsements, Contact — all anchors into the home page) and an outlined "Resumé" button (placeholder link). Nav links hide below 540px (`.rp-navlinks` display:none — mobile nav is NOT designed; keep the logo-only header at small sizes or propose a pattern).
- **Footer / contact** (`#contact` on home; repeated with identical design on every page): centered eyebrow "GET IN TOUCH" flanked by 30px hairlines, Fraunces h2 "Let's make something people actually *like* using." (accent italic on "like"), Raleway subline "Currently open to senior product design roles, both individual contributor and leadership.", solid accent "Book a call" button, a Caveat "let's talk" divider between fading hairlines, link row (Email · LinkedIn · Dribbble · Resumé — placeholders), and a bottom bar with the monogram, shimmer name, and "© 2026 · Designed with Claude Code & Gemini".
- **Page background**: `#E6E9EB` with a fixed-attachment fractal-noise grain image (`--grain-noise` from the Quill DS effects tokens) under `background-blend-mode: multiply`. Alternate panels use `#ECEEF0`.

### 1. Home (`Home.dc.html`)

- **Hero** (`#top`): two-column (`.rp-hero`; text left, portrait right; stacks under ~860px). Eyebrow "UX DESIGN LEADER • ENTERPRISE SCALE • AI-FLUENT" (Raleway 12px, 500, letter-spacing .2em, uppercase, ink-muted). H1 Fraunces 300, `clamp(34px, 5.4vw, 56px)`, line-height 1.04, letter-spacing -.03em: "I design enterprise products and the *systems* & *tools* that scale them." — "systems" and "tools" are accent-indigo italics (Fraunces variation `SOFT 100, WONK 1`) with a hand-drawn SVG underline. Sub-paragraph Raleway `clamp(16px,2vw,17.5px)`/1.7, max-width 460px. Two buttons: solid ink "See selected work →" (arrow slides +4px on hover) and outlined "My process".
- **Portrait column**: graphite portrait PNG (`assets/portrait-ink.png`) 400px wide over a 45°-hatched circle (SVG pattern, indigo at .3 opacity, r=150). Beneath it a Caveat annotation "NN/g & Cornell University certified" with a hand-drawn arrow SVG, rotated -1.5°.
- **Selected work** (`#work`): section header row — "SELECTED WORK" eyebrow left, italic Fraunces link "view my side projects →" right (→ `/side-projects`). Three-card grid (`.rp-work-grid`). Each card: tape strip pseudo-element rotated at the top, cover image (4:3, from `assets/user-images/rp-work-{1..3}.webp`), then padding 18/20/20 containing: italic Fraunces micro-caption (№ + year), Fraunces title, Raleway summary, and a footer row (uppercase chip + "View case study" link in indigo). Cards lift -4px with `--shadow-lg` on hover. Card 1 → Tracking AI token usage; card 2 → A system that scales (titled "Improving design processes" chip); card 3 → From prompt to production.
- **Process** (`#process`): intro block (max-width 620px) then numbered rows: 01 Discover, 02 Define, 03 Design & test, 04 Ship & learn — each row: big Fraunces number, title, Raleway description, hairline separators.
- **About** (`#about`, panel `#ECEEF0`): 1.5fr/1fr grid. Left: Fraunces heading + Raleway paragraphs. Right: an "At a glance" style card.
- **Endorsements** (`#testimonials`): centered "ENDORSEMENTS" eyebrow + italic Fraunces caption "from people I've built with". A horizontally scrolling carousel (`scroll-snap-type: x mandatory`) of 6 quote cards: background `#F1F2F3`, 1px `rgba(42,38,34,.10)` border, radius 8, padding 28/28/24; each card has an oversized indigo Fraunces "" (40px), the quote in Fraunces 300 18px/1.5, and an attribution block — name in Caveat 22px rotated -1.5°, role in Raleway 12.5px 600 uppercase, company in Raleway 12.5px ink-muted. Controls: ← / → circle buttons and 6 dots (active dot: indigo, opacity 1, scale 1.3). Keep all six quotes and attributions verbatim (real endorsements: Adam Martin / Capital One ×2, Aitza Castillo / Walmart, Evan Godwin / Walmart, Maria Cermeno / Walmart, + one more in file).
- **Contact footer** as described in global chrome.

### 2–4. Case studies (shared template, three instances)

All three case pages share one layout — build it once as a template with per-case content:

- **Masthead**: "← Back to home" link (arrow slides -4px on hover), then eyebrow row "№ 00X · CATEGORY", Fraunces h1 `clamp(40px,7vw,76px)` with one accent-italic word, and a dek paragraph (Fraunces 300, `clamp(19px,2.6vw,25px)`, max 640px).
- **At a Glance card**: right-aligned card (sticky feel) listing Role / Timeline / Team / Platform with small uppercase labels and Raleway values. **The "At a Glance" content is author-written and final.**
- **Cover banner**: full-width image (16:8) in a 10px-radius framed box with a rotated translucent "tape" strip on top and a Caveat caption centered beneath.
- **The brief**: two-column — left: "The brief" label, Fraunces h2 headline, two Raleway 16.5px/1.75 paragraphs; right: a summary card (Problem / My role / North star rows). **Rule: the text column must never extend below the card's bottom edge.**
- **Challenge quote**: full-width panel with an oversized Fraunces statement containing one accent-italic word, plus a small caption row.
- **Four chapters** (01 Discover, 02 Define, 03 Design & test, 04 Ship & learn): alternating text/image two-column rows. Text side: numbered eyebrow (big Fraunces number + uppercase label), Fraunces h3 `clamp(21px,3vw,27px)`, one short Raleway 15.5px/1.7 paragraph. Image side: 4:3 image in a 10px-radius framed box (`assets/user-images/cs{1|2|3}-shot-{1..4}.webp`). **Same baseline rule: text never extends below the image box.**
- **Pull quote**: Fraunces italic statement + small attribution label.
- **Outcome**: Fraunces h2 + Raleway paragraph, then three stat cards (value + label + one-line description). **Stat values are placeholders ("—"-free text like "Coming soon" style); the author will supply real numbers.**
- **Reflection**: "What I'd carry forward" block.
- **Next project**: full-width bordered card linking to the next case (label "Next project · № 00X", title, arrow), hover lifts.

Case-specific content (titles, deks, chapter copy, quotes) is final in the HTML — lift verbatim:
- **№ 001 Tracking AI token usage** (`Case-Tracking-AI-Token-Usage.dc.html`)
- **№ 002 Improving design processes / "Consistency, made operational."** (`Case-A-System-That-Scales.dc.html`)
- **№ 003 From prompt to production** (`Case-From-Prompt-To-Production.dc.html`) — note its header nav includes the same global pattern; its "next" card returns to Home#work with label "More work".

### 5. Side projects (`Side Projects-Made-In-The-Margins.dc.html`)

- **Masthead**: back link, eyebrow "SIDE PROJECTS · BUILT AFTER HOURS", h1 "Made in the *margins*." (accent italic with hand-drawn underline SVG), Fraunces dek.
- **Quill feature header**: left — "№ S·01 · Currently building" label, h2 "Quill Design System", two Raleway paragraphs. Right — chip row (Figma, React, CSS tokens, Storybook, Vercel; pill outline chips) and three buttons: solid indigo "Open the Storybook →" (https://quill-ds.vercel.app/?path=/docs/foundations-introduction--docs), outlined "View on GitHub" (https://github.com/phillipsry/quill-ds), outlined "Figma file" (https://www.figma.com/design/Dcf8lEB7Ash71iNl7WN4Jq/Quill-Design-System?node-id=47-60&t=b9CxeMOPACKRK5yi-1). All three open in new tabs.
- **Specimen grid** (12-col, gap 22, spans 7/5): five cards showing the Quill DS itself — (a) type specimen "Tools, made by *hand*." with terracotta italic; (b) palette card: three papers `#F5EDDD #EFE5CE #E8DCC0`, three inks `#2A2622 #5C544A #8A7F72` (squares), four pigments `#C4684B #7A8C5C #5B6B8A #B89968` (circles) with Inter micro-labels and a Fraunces italic footnote; (c) live components card: four Quill buttons (primary, secondary, accent with arrow, ghost) + four tier badges (Everyday, Featured, Signed, Heirloom); (d) collectible ProductCard "Critique Companion" with hand-drawn portrait (`assets/quill/critique-companion.jpg`), № 001, Design category, Heirloom tier; (e) **After dark card**: dark-walnut themed card (`data-theme="dark"` scope) with its own light/dark toggle switch (sun/moon glyph pill, thumb slides; toggling flips only this card's theme), copy about the warm dark mode, and an accent button + Heirloom badge rendered in dark-theme tokens. These specimens use the actual Quill component classes (`ql-btn`, `ql-badge`, `ql-productcard` — CSS in `assets/quill/quill-components.css`); in the rebuild, implement them as components with those exact styles.
- Caveat annotation under the grid: "live components straight from the system, not screenshots →".

## Interactions & Behavior

- **Shimmer on the name**: the "Ryan Phillips" wordmark (header + footer) is a background-clip:text gradient (ink → indigo → pale blue `#eef3fb` → ink, `background-size: 300% 100%`); on hover it animates `background-position` 100%→0 over 1.5s ease-in-out, one sweep. Identical on every page.
- **Buttons**: hover = translateY(-2px) + soft shadow (`0 8px 20px -8px rgba(42,38,34,.32)`) + slight darken (`filter: brightness(.93)` on solid; background `rgba(42,38,34,.05)` on outline); active = return to 0, shadow off. Focus-visible: 2px terracotta/indigo outline, offset 2px.
- **Cards**: hover translateY(-4px), shadow deepens to `--shadow-lg`, border darkens. 0.3s `cubic-bezier(.4,0,.2,1)`.
- **Arrows**: `.rp-arrow` slides +4px right on parent hover; back arrows slide -4px left. 0.3s same easing.
- **Endorsements carousel**: horizontal scroll-snap track; prev/next buttons scroll by one card; dots reflect the snapped index (active dot indigo/scale 1.3, inactive opacity .3); clicking a dot scrolls to that card. Implement with a small scroll listener (or IntersectionObserver) — the prototype's JS lives in the page's logic class.
- **After dark toggle** (Side Projects only): `role="switch"`, `aria-checked`; toggles a `data-theme` scope on its card between light and dark; the thumb slides between sun/moon glyphs; all colors inside flip via the Quill dark-mode custom properties (`tokens/dark.css`).
- **Smooth scrolling**: `scroll-behavior: smooth` for in-page anchors.
- **No parallax, no scroll-triggered animation, no bounces.** Motion is restrained: 0.2–0.5s, house easing `cubic-bezier(0.4, 0, 0.2, 1)`.

## State Management

Minimal — this is a static content site:
- Carousel index (per the endorsements section).
- After-dark card theme (`'light' | 'dark'`, local to that card).
- No global dark mode: the site forces `data-theme="light"` at the document level. (The Quill DS supports a full dark theme; the site deliberately doesn't expose it beyond the After-dark demo card.)
- No data fetching; all content is static. A CMS is unnecessary; keep copy in code or MDX.

## Design Tokens

The site layers a small "portfolio" set over the Quill Design System tokens (full definitions in `site/_ds/quill-design-system-.../tokens/*.css` — treat those files as the token source of truth).

**Portfolio layer:**
- `--rp-ground: #E6E9EB` (page), `--rp-panel: #ECEEF0` (alt sections), `--rp-card: #F1F2F3` (endorsement cards), `--rp-accent: #5B6B8A` (indigo — links, accents, italics, active states)
- Work-card image placeholder ground: `#DEE1E3`
- Hairlines: ink at .08 (`--line-faint`), ~.12 (soft), .20 (strong); many dividers are `linear-gradient(90deg, transparent, rgba(42,38,34,.16), transparent)`

**From Quill (used throughout):**
- Inks: `--ink: #2A2622`, `--ink-soft: #5C544A`, `--ink-muted: #8A7F72`; papers `#F5EDDD / #EFE5CE / #E8DCC0`; pigments terracotta `#C4684B`, moss `#7A8C5C`, indigo `#5B6B8A`, gold `#B89968`; dark-mode set in `tokens/dark.css`
- Radii: 4px buttons/inputs, 8px cards, 10px case-study image frames, pill badges/chips
- Shadows: layered ink-tinted `--shadow-sm / --shadow / --shadow-lg`
- Grain: `--grain-noise` / `--grain-noise-light` (now PNG files in the `_ds` tokens folder), fixed attachment, multiply (light) / screen (dark)

**Typography:**
- **Fraunces** (Google Fonts, variable): all display. Headings weight 300, `font-variation-settings: 'opsz' 144, 'SOFT' 50, 'WONK' 0`, tight letter-spacing (-.025 to -.035em). The single emphasized word per heading: italic, accent color, `'SOFT' 100, 'WONK' 1`. Captions: Fraunces italic 13–17px ink-muted.
- **Raleway** 400/500/600/700: body and UI. Body 15.5–16.5px, line-height 1.7–1.75; eyebrows 11–12px, 500–600, letter-spacing .18–.2em, uppercase.
- **Caveat** (via `--rp-hand`): handwritten annotations 18–22px, usually rotated -0.6° to -1.5°.
- **Inter**: only inside Quill component specimens on the side-projects page.
- Type scale (key stops): case h1 `clamp(40px,7vw,76px)`; home h1 `clamp(34px,5.4vw,56px)`; section h2 `clamp(26px,4vw,38px)` – `clamp(30px,4.6vw,42px)`; chapter h3 `clamp(21px,3vw,27px)`; dek `clamp(19px,2.6vw,25px)`.

**Layout:** max container 1180px, side padding `clamp(20px, 5vw, 56px)`; section vertical padding `clamp(40px, 6vw, 72px)` (footer up to 84px); 12-col grid with 22px gap on side projects; case chapters are 2-col with the image column ~40%.

## Assets

All in `site/assets/`:
- `user-images/*.webp` — all 18 case-study and work-card images (final, author-supplied; do not recompress)
- `portrait-ink.png` — hero portrait (graphite style)
- `quill/critique-companion.jpg` — Quill collectible-card portrait
- `quill/quill-components.css` — extracted Quill component styles (Button, Badge, ProductCard)
- `case2/`, `case3/` — earlier renders kept for reference; **not referenced by any page**; safe to drop
- `_ds/quill-design-system-.../` — the full Quill Design System: token CSS, dark theme, component bundle, grain PNGs. Fonts load from Google Fonts CDN (Fraunces, Inter in DS; Raleway + Caveat added by the site).

## Files

- `site/Home.dc.html` — home page
- `site/Case-Tracking-AI-Token-Usage.dc.html` — case № 001
- `site/Case-A-System-That-Scales.dc.html` — case № 002
- `site/Case-From-Prompt-To-Production.dc.html` — case № 003
- `site/Side Projects-Made-In-The-Margins.dc.html` — side projects
- `site/support.js`, `site/image-slot.js`, `site/.image-slots.state.json` — prototype runtime; reference only, do not port
- `site/assets/`, `site/_ds/` — assets and design system as above
- `screenshots/` — full-page captures of each page as top-to-bottom viewport slices (`home/`, `case-001…/`, `case-002…/`, `case-003…/`, `side-projects/`), a quick visual checksum; the HTML pages remain the authoritative reference

Open any page directly in a browser to see the working reference.

## Known placeholders (wire these during the rebuild)

- 6 links per page are `href="#"`: header **Resumé**, footer **Book a call**, **Email**, **LinkedIn**, **Dribbble**, **Resumé**. Get real destinations from Ryan.
- The three outcome stats on each case page await real numbers.
- No mobile nav pattern exists below 540px (links are simply hidden).
- No favicon, page `<title>`/meta descriptions, or OG images were designed — add sensible ones (the RP monogram SVG in the header is the mark to use).
