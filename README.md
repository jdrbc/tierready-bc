# BC Alert Reform

Advocacy website urging British Columbia to use **tiered Alert Ready / Wireless Public Alerting** instead of sending every wireless emergency alert at the highest, non-opt-out priority.

**Brand:** BC Alert Reform  
**Subtitle:** Sensible alerting

## Pages

- **Home** (`/`) — overview of the single-tier problem, alert counts, estimated sleep disruption, and CTAs to email the Minister / contact your MLA (with copyable letter).
- **Workarounds** (`/workarounds`) — airplane mode, power off, phone-away-from-bed, and accurate guidance that uninstalling apps does **not** stop cell-broadcast Alert Ready, plus a guided helper.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Preview (with GitHub Pages base path): http://127.0.0.1:4173/tierready-bc/

## Deploy

Pushes to `main` deploy via GitHub Actions to GitHub Pages:

https://jdrbc.ca/tierready-bc/

## Notes

- Alert counts: [alertready.ca/alert-count](https://www.alertready.ca/alert-count/)
- Sleep / opt-out figures are labeled estimates or qualitative patterns, not official statistics.
- Policy context: [CRTC 2025-180](https://www.crtc.gc.ca/eng/archive/2025/2025-180.htm)
