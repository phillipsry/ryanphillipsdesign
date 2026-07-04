# Publishing this site

**Source of truth: the Claude design environment.** Not this repo, not VS Code.
All content and design edits happen there; this repo is the *published output* of it.

## The loop (every change)

1. Edit and preview in Claude design until you're happy.
2. Ask it to **"package for publish."** You get a `site/` folder that is already optimized.
3. Replace the contents of this repo's `site/` folder with that folder (a clean overwrite).
4. Commit and push to `main`: `git add . && git commit -m "…" && git push`, or just tell Claude Code *"commit all changes and push to main."*
5. Vercel auto-deploys in ~30s. Hard-refresh to confirm.

## Guardrail

Do **not** hand-edit the files in `site/` from VS Code. They are generated output, and the next publish overwrites them. Use VS Code / Claude Code only for git, `vercel.json`, and repo config; never for content or design.

## What each package already includes

- `defer` on the runtime scripts (`support.js`, the `_ds` bundle, `image-slot.js`)
- Hero portrait as `.webp`; all case/work images as `.webp`
- `index.html` entry point (a copy of the home page)
- Font preconnect hints
- Per-page `<title>`, meta description, Open Graph + Twitter tags, a shared social-preview image (`assets/og-cover.png`, 1200x630), and a monogram `favicon.svg`

## Vercel settings (one-time)

- **Root Directory** = `site`
- **Framework preset** = Other, no build command.

## Open items

- The three outcome stats on each case page currently read **"TBD"**: replace with real numbers when ready (edit in Claude design, re-publish).
- `site/.image-slots.state.json` (~620KB) is prototype state. It ships today so nothing breaks; it can be dropped later to speed first load once every image slot's `src` attribute is confirmed to cover it.
- First load runs a small client-side render runtime (`support.js`). For a larger speed jump, the longer-term option is a static rebuild; see `README.md`.
- `og:image` and the favicon use relative paths. Once your custom domain is live, switch `og:image` to an absolute URL (e.g. `https://yourdomain.com/assets/og-cover.png`) so link-preview crawlers resolve it.
