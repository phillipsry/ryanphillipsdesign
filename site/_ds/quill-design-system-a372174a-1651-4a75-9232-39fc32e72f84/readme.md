# Quill — Design System

*Tools, made by hand.*

Quill is the studio behind its flagship app — a curated marketplace of agent tools
"made by hand" for the work people actually do (design crits, product specs,
research synthesis). The brand voice is that of a **naturalist's sketchbook**:
pressed cream paper, soft sepia ink, hand-drawn portraits, and a small cast of
botanical pigments. Everything feels printed, collected, and kept — never
shipped from a server farm.

This repository is the design system that lets an agent design *with* the Quill
brand: tokens, fonts, reusable React components, foundation specimen cards, and a
high-fidelity recreation of the marketplace app.

---

## Sources

The system was reverse-engineered from the artifacts the team provided. If you
have access, explore them to go deeper than this system captures:

- **Style reference (source of truth):** `uploads/marketplace-preview.html` — the
  marketplace marketing page. Every color, type treatment, button, card, input,
  shadow, and texture in this system is lifted directly from it.
- **GitHub:** [`phillipsry/quill`](https://github.com/phillipsry/quill) — the
  brand's design-system repo. *(At time of authoring this repo was empty / had no
  readable tree, so nothing was imported from it. Re-check it for real source
  files — component code or tokens there should supersede the values here.)*

> ⚠️ **Font note (please confirm):** the brand uses **Fraunces** (display) and
> **Inter** (body), both Google Fonts. We load them from the Google Fonts CDN in
> `tokens/fonts.css` rather than self-hosting binaries. If you need a fully
> offline build, drop the `.woff2` files into `assets/fonts/` and swap the
> `@import` for local `@font-face` rules (keep the family names identical).

---

## Content fundamentals — how Quill writes

The copy reads like a letterpress shop that happens to sell software. It is warm,
unhurried, and quietly confident; it never sounds like a SaaS landing page.

- **Voice & person.** Mostly **"we"** for the studio, **"you"** for the reader —
  intimate and direct. *"We make them slowly, keep them small, and draw each one
  by hand."* / *"…for the work you actually do."*
- **Tone.** Crafted, naturalist, a little romantic about process. Leans on the
  metaphor of **hand-drawing, printing, collecting, and keeping**. Words like
  *drawn, hand-picked, made to last, heirloom, drawings, drops, season.*
- **Sentence shape.** Short declaratives, often a fragment for rhythm. *"No spam.
  Just drawings."* / *"Meant to be kept, not just used."*
- **Casing.** Sentence case everywhere in prose and headings. **UPPERCASE** is
  reserved for tiny tracked eyebrows and labels (`ISSUE №001`, `THE FIRST
  DRAWING`). Never all-caps a sentence.
- **One emphasized word.** Headlines italicize a single word in terracotta —
  *made by **hand***, *your **deck***, *four kinds of **card***. Never two.
- **Numbering.** Catalog feel — `№ 001`, `Issue №001`, "individually numbered."
  Uses the numero glyph `№`, not "No." or "#".
- **No emoji. No exclamation-heavy hype.** Enthusiasm is conveyed through craft
  language, not punctuation. The pilcrow `¶` is used as a quiet brand mark.
- **Tiers as vocabulary.** Everyday / Featured / Signed / Heirloom — a printmaking
  ladder, not "Free / Pro / Enterprise."

Example microcopy to match:
> *"The first drawing goes out soon. Leave a name on the list — we'll send a deck
> when it's ready."*  ·  CTA: **"Save me a deck"**  ·  note: **"No spam. Just drawings."**

---

## Visual foundations

**Palette.** A warm, low-chroma naturalist set. Three **papers** (cream grounds:
`#F5EDDD → #E8DCC0`), three **inks** (sepia near-black to muted grey:
`#2A2622 → #8A7F72`), and four **pigments** used sparingly like colored pencils:
**terracotta** `#C4684B` (the signature — accents, CTAs, the one italic word),
**moss** `#7A8C5C`, **indigo** `#5B6B8A`, **gold** `#B89968`. There is **no pure
white and no pure black** anywhere — everything sits on paper.

**Type.** Two voices. **Fraunces** (display serif) carries headings and the brand
voice, set **light (400), tight (-0.03em), large**, using its variable axes
(`opsz`, `SOFT`, `WONK`); the emphasized word is **italic + terracotta + WONK 1**.
**Inter** (400/500/600) handles body and UI at `line-height: 1.7`. Captions are
small **Fraunces italic** in ink-muted.

**Backgrounds & texture.** Always **flat paper**, never gradients-as-decoration.
Two fixed, pointer-events-none overlays give the page its tooth: a **fractal-noise
grain** (`--grain-noise`, ~0.4 opacity, `mix-blend-mode: multiply`) and a faint
**speck layer** of tiny radial dots. Sections alternate between `--paper` and
`--paper-warm` for rhythm; thin centered gradient hairlines divide them.

**Imagery.** **Hand-drawn portrait illustrations** — graphite linework with soft
watercolor washes on cream, warm and naturalist, **never photographic**. Each
tool has one. Stored in `assets/portraits/`.

**Dark mode.** The system ships a warm dark theme: pressed-cream
paper becomes **dark walnut** (`#20180E → #352A1A`), sepia ink inverts to a warm
**chalk cream** (`#F1E7D3 → #93856E`), and the four pigments are **lifted**
(brighter, slightly desaturated) so they still read like colored pencil on a
dark page (terracotta `#DB8568`, moss `#A2B57E`, indigo `#92A2C2`, gold
`#D6BA86`). Shadows deepen to warm near-black, the grain swaps to a light
fractal under a `screen` blend so the paper tooth still shows, and there is **no
pure black** — the warmth carries into the evening. Values live in
`tokens/dark.css` (single source of truth in the `--dk-*` set). **Activate by
setting `data-theme="dark"` (or `"light"`) on a parent — usually `<html>`** — and
the whole token layer flips with no JS. For *"follow the OS by default,"* resolve
`prefers-color-scheme` into that attribute at load with a tiny controller (see
`ui_kits/marketplace/index.html`, which also persists the user's choice and
renders the light/dark toggle).

**Corner radii.** Gentle: `2px` micro, `4px` (buttons/inputs/badges), `8px` (the
default card), `16px` large panels, full **pill** for tier badges & avatars.

**Cards.** Warm paper stock (`--paper-warm`), `1px` hairline border at ~12% ink,
`8px` radius, and a **soft, warm, layered shadow** built from sepia ink at low
alpha with negative spread (never a hard black drop). On hover they **lift
`-4px`**, deepen the shadow, and any portrait inside scales to `1.02`.

**Elevation.** Three steps (`--shadow-sm / --shadow / --shadow-lg`) plus a `pop`
for hover, all ink-tinted and multi-layered.

**Motion.** Restrained and tactile. House easing is `cubic-bezier(0.4,0,0.2,1)`,
durations `0.2–0.5s`. Buttons **lift `-2px`** with a soft shadow on hover and
**settle to 0** on press; arrows **slide `+4px`** on hover. No bounces, no
infinite loops, no parallax.

**States.**
- *Hover:* primary button **warms ink → terracotta**; secondary **fills ink**;
  ghost/links **turn terracotta**; cards lift.
- *Press / active:* transform returns to 0, shadow drops (a gentle "set down").
- *Focus:* terracotta `2px` outline (buttons) or a terracotta border + soft
  `3px` terracotta glow (inputs); inputs also **brighten paper-warm → paper**.
- *Disabled:* ~45% opacity, `not-allowed`.

**Borders & dividers.** Hairlines are **ink at low alpha** (`--line-faint .08` →
`--line-strong .20`), never solid grey. Section rules are 1px; many dividers are
a **transparent→ink→transparent** gradient for a drawn, fading feel.

**Layout.** Editorial. `1400px` max container, `800px` reading column for the
manifesto, generous `6rem` section padding. Eyebrow → headline → caption is the
recurring section header pattern, often with a right-aligned italic caption.

---

## Iconography

The brand is **deliberately icon-light** — its visual interest comes from
**hand-drawn portraits and type**, not an icon set. What it does use:

- **Typographic marks as icons.** The arrow **`→`** (in CTAs and "View card",
  slides on hover), the **pilcrow `¶`** as the manifesto mark, the **numero `№`**
  for catalog numbers, and the middot **`·`** as a separator. These are real
  Unicode glyphs set in the brand fonts — prefer them over SVG icons.
- **Tier initials.** Tiers are marked with a single italic Fraunces letter in a
  pigment-tinted circle (E / F / S / H).
- **No icon font, no SVG icon sprite, no emoji** were present in the source.

If a project genuinely needs UI icons (e.g. a settings screen), use a **thin,
hand-feeling line set** — **[Lucide](https://lucide.dev)** at ~1.5px stroke is the
closest CDN match to the brand's delicate linework. **Flag any icon use as a
substitution**, since the brand ships none of its own.

---

## Index — what's in here

**Foundations**
- `styles.css` — root entry point (import manifest only; link this one file).
- `tokens/fonts.css` — Fraunces + Inter (Google Fonts).
- `tokens/colors.css` — papers, inks, pigments, tiers, semantic aliases.
- `tokens/typography.css` — families, scale, tracking, Fraunces axis presets.
- `tokens/spacing.css` — 4px spacing scale + layout widths.
- `tokens/effects.css` — radii, shadows, motion, paper-grain texture utilities.
- `guidelines/*.card.html` — foundation specimen cards (Type, Colors, Spacing, Brand).

**Components** (`window.QuillDesignSystem_a37217.*`)
- `components/forms/` — **Button** (primary/secondary/ghost/accent), **Input**.
- `components/display/` — **Badge** (tiers), **Eyebrow**, **Avatar**.
- `components/surfaces/` — **Card**, **ProductCard** (the collectible portrait card).

**UI kit**
- `ui_kits/marketplace/` — interactive recreation of the marketplace app
  (nav, hero, featured grid, manifesto, tiers, waitlist, footer). See its README.

**Assets**
- `assets/portraits/` — the three hand-drawn portraits.

**Meta**
- `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

## Using a component

```jsx
// In a @dsCard / kit HTML: link styles.css, load _ds_bundle.js, then:
const { Button, ProductCard, Badge } = window.QuillDesignSystem_a37217;

<ProductCard
  title="Critique Companion"
  description="The thoughtful reviewer who sees what's working before naming what isn't."
  portrait="assets/portraits/critique-companion.jpg"
  number="001" category="Design" tier="heirloom"
/>
```
