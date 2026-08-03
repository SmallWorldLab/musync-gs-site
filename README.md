# muSync-GS project page

Academic project page for:

> **muSync-GS: Physics-Synchronized Driving Video Synthesis for Weather and Geometric Road Hazards**

This revision is based on the public [Nerfies project-page template](https://github.com/nerfies/nerfies.github.io). The structure uses Bulma and Nerfies-style academic presentation, while the content, research media, typography accents, result modules, and responsive styling are customized for muSync-GS.

The media section contains 20 individually labeled cards backed by 19 unique videos: rain-rate control, snow-rate control, speed bumps, sunken roads, and five reconstructed routes. Gallery media is loaded only when it approaches the viewport.

## Local preview

```bash
cd /home/yc8786/data4t/Yang/RoVES_project_page
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Draft status

- Authors and venue remain anonymous.
- Search indexing is disabled with `noindex, nofollow`.
- Paper and supplement point to packaged local PDFs.
- Code, public data, arXiv, final venue, contact, and BibTeX remain release placeholders.
- The GitHub Pages deployment should remain disabled until the anonymity and release decision is confirmed.

See [CONTENT_CHECKLIST.md](CONTENT_CHECKLIST.md) before publication.

## Structure

```text
.
├── index.html
├── static/
│   ├── css/
│   └── js/
├── assets/
│   ├── images/
│   ├── papers/
│   └── videos/
├── CONTENT_CHECKLIST.md
├── ASSET_SOURCES.md
└── TEMPLATE_ATTRIBUTION.md
```

No build step is required. The repository can be served as a static site.

## Media loading

- Only the hero overview autoplays.
- Gallery videos use `preload="none"` and near-viewport source hydration.
- Starting one gallery video pauses the others.
- Each video ships with a small WebP poster and an explicit condition caption.

## Template license

The Nerfies website is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This adapted website therefore retains visible attribution in the footer and is distributed under the same website-code license. Research media, PDFs, datasets, and third-party artifacts retain their own terms.
