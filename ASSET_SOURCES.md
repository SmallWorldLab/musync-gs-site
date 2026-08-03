# Asset provenance

This file records the local sources used to assemble the draft project page. It is not a public license grant.

## Website template

- Structure and bundled Bulma assets are adapted from the [Nerfies project page](https://github.com/nerfies/nerfies.github.io).
- The Nerfies website is licensed under CC BY-SA 4.0. See `TEMPLATE_ATTRIBUTION.md`.
- Google Analytics from the original template is not included.

## Paper artifacts

- Paper PDF: `/tmp/roves-build-main/AnonymousSubmission2027.pdf`
- Supplement PDF: `/tmp/roves-build-supp/SupplementaryMaterial.pdf`
- Paper source baseline: Overleaf commit `224e32ecb80d37fe516da43f97ad9cee0cf90cbf`

## Media

Final source archive:

`/data/data_4t/ResearchStudio/submission/musync_gs_media_supplement.zip`

The hero uses the final 34.5-second `00_MAIN_DEMO.mp4`. The gallery uses the individual source clips recorded by `/data/data_4t/ResearchStudio/scripts/build_musync_media_supplement.py`, plus the corresponding high-resolution Road Scene B speed-bump and sunken-road matrix. High-bitrate 960×640 sources were web-encoded to H.264 at a maximum width of 720 pixels; the small primary rain clips were remuxed with faststart. Every gallery clip has a WebP poster.

The public page uses anonymous scene aliases. Semantic media metadata is recorded in `assets/videos/gallery/manifest.json`; source selection logic remains documented by the official supplement build script rather than embedded in page HTML.

## Figures

- `pipeline.webp` ← `Figures/fig_pipeline_v23_editable_final_aaai.pdf`
- `concept.webp` ← `Figures/fig_conceptual_gap_v1_editable_aaai.pdf`
- `ablation.webp` ← `Figures/results/fig_ablation_weather_pitch_vertical_v10_aaai.pdf`
- `a2d2.webp` ← `Figures/results/fig_a2d2_real_brake_lodo_twocol.pdf`
- `carsim-validation.webp` ← `Figures/results/fig_carsim_validation_v1.png`
- `weather-grid.webp` ← `Figures/results/visual_evaluation/fig_weather_controllability_full.png`
- `road-edit.webp` ← `Figures/results/fig_road_geometry_comparison_v1.png`

Vector PDFs were rasterized at high resolution and converted to WebP. Large PNGs were resized and converted to WebP for web delivery.

## Release reminder

Before public deployment, confirm the redistribution/display terms and required acknowledgements for every dataset, simulator, baseline output, and model represented by these assets.
