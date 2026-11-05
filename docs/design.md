# DevPulse website design

Static product site in the style of a pipeline console. Three pages (`index.html`, `support.html`, `privacy.html`), one stylesheet (`assets/site.css`) and one small optional script (`assets/site.js`).

## System

- Dark-first, with a light scheme through `prefers-color-scheme`. Tokens are CSS custom properties at the top of `site.css`.
- Accent: the cyan of the app icon (`--pulse`). Status colors follow Azure DevOps meaning: green succeeded, blue running, red failed, grey not started. Body and secondary text meet 4.5:1 contrast in both schemes.
- Type: Bricolage Grotesque (variable `opsz`, `wdth`, `wght`) for display and body; JetBrains Mono for labels, UI names and the ASCII graph. Both are self-hosted WOFF2.
- Background: a faint 48px grid with a cyan glow at the top, evoking a console.
- Signature element: the hero run graph with a Cards/ASCII switch, mirroring the app's own presentation control. The ASCII illustration follows the app's notation (`[-] S+ Build`, `|-- T+`, `` `-- T? ``). Without JavaScript the ASCII view is shown.
- Motion: one staggered load sequence in the hero, disabled under `prefers-reduced-motion`.
- Support and privacy: sticky table of contents beside the prose on wide screens; a `<details>` table of contents on narrow screens. Troubleshooting uses `<details>` items.

## Content rules

- Describe implemented behavior only. No App Store link, price, rating or availability claim until a release exists.
- Illustrations with sample data are labelled as illustrations. Screenshots are real app captures with fictional data.
- Privacy content follows the shipping app: profile display metadata synchronizes through iCloud; credentials, authentication settings and account identifiers stay on the device.

## Backup

The previous site is kept under `_old/` with its own assets. Its pages carry `noindex` and a canonical URL under `_old/`. `scripts/check_site.py` verifies the `noindex` tag.
