#!/usr/bin/env bash
# publish.sh — sync the exported site into this repo and deploy.
#
# One-time setup (from the repo root):
#     cp /path/to/downloaded/publish/publish.sh .
#     chmod +x publish.sh
#
# Every publish after that:
#     ./publish.sh ~/Downloads/publish/site
#
# It replaces site/, commits, and pushes. Vercel auto-deploys in ~30s.

set -euo pipefail

SRC="${1:?Usage: ./publish.sh /path/to/downloaded/publish/site}"

if [ ! -f "$SRC/index.html" ]; then
  echo "✗ '$SRC' doesn't look like the exported site/ folder (no index.html)." >&2
  exit 1
fi

echo "→ Replacing site/ …"
rm -rf site
cp -R "$SRC" site

echo "→ Committing …"
git add -A
if git diff --cached --quiet; then
  echo "Nothing changed. Done."
  exit 0
fi
git commit -m "Publish update $(date '+%Y-%m-%d %H:%M')"

echo "→ Pushing …"
git push

echo "✓ Pushed. Vercel will deploy to www.ryanphillips.design in ~30s."
