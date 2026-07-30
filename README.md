# muSync-GS project page draft

This is a dependency-free static project page for:

> **muSync-GS: Physics-Synchronized Driving Video Synthesis for Weather and Geometric Road Hazards**

The information flow is informed by the public SceneFactory project page, but the HTML, CSS, JavaScript, visual system, and components here are original. No Nerfies/Bulma template code is included.

## Preview locally

```bash
cd /home/yc8786/data4t/Yang/RoVES_project_page
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Current draft status

- The page intentionally keeps the authors anonymous.
- Search indexing is disabled with `<meta name="robots" content="noindex, nofollow">`.
- Paper and supplement buttons point to the current local compiled PDFs.
- Code, public data, arXiv, final venue, contact, and BibTeX remain placeholders.
- Five H.264, 1280×720, 10 fps, silent videos are already packaged for the page.

Do **not** deploy publicly until the publication/anonymity decision is confirmed. See [CONTENT_CHECKLIST.md](CONTENT_CHECKLIST.md).

## Structure

```text
.
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── images/
│   ├── papers/
│   └── videos/
├── CONTENT_CHECKLIST.md
└── .nojekyll
```

The page has no npm/build step and can be hosted directly with GitHub Pages.

## Fastest customization points

Search `index.html` for:

- `Anonymous project-page draft`
- `Code soon`
- `Citation placeholder`
- `Authors withheld during review`
- `Venue pending`
- `noindex, nofollow`

Update these only after the corresponding release details are approved.

## Recommended deployment

Use a separate repository such as `musync-gs-site` rather than adding website assets to the Overleaf repository.

1. Create an empty GitHub repository.
2. Commit this directory to its `main` branch.
3. In **Settings → Pages**, publish from `main` / root.
4. Add the final GitHub Pages URL to the paper after checking the review policy.
5. Optionally add a custom domain and analytics after public release.

## Asset notes

- Current pipeline and Figure 7 web images were rasterized from the latest vector PDFs, avoiding stale labels.
- Figure 6 contains no H/D ratio overlays.
- The supplement PDF is the newly compiled 20-page version from commit `224e32e`.
- Before release, confirm redistribution/display permissions for Waymo-derived frames and videos, A2D2-derived plots, and CarSim-derived figures.

