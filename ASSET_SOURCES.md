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

The packaged media supplement remains unchanged:

`/data/data_4t/ResearchStudio/submission/musync_gs_media_supplement.zip`

The project-page hero is a separate 14.1-second web edit. It is not written back into the media supplement ZIP.

Project-page videos are role-separated by scene:

- Rain braking: Scene 113792 from `/data/data_4t/Yang/RoVES_repro/outputs/roves_parametric_weather/113792/20260728-straight-flat-113792-road2mpa-center28-v1`. The page uses Sunny / Rain 2 / 10 / 25 / 50 mm/h in a 5.5-second 3 + 2 matrix. Under the matched 40 km/h, 2.0 MPa braking command, Rain 50 increases stopping distance by 5.58 m relative to Sunny.
- Snow braking: the page uses the stable formal release at `/data/data_4t/ResearchStudio/artifacts/official_snow_multiscene_stable_20260729/342571/snow5`. Snow 0 / 0.5 / 1 / 2 / 3 mm/h SWE are shown in a 6.2-second 3 + 2 matrix. The approved lossless composition retains the road-accumulation residual with fractional static and semantic sampling. The crop reaches the Snow 2/3 stop at 6.1 seconds and ends before the static post-stop hold.
- Weather-conditioned road hazards: Scene 938501 from `/data/data_4t/Yang/RoVES_repro/outputs/roves_m123_final_weather/938501/20260721-m123-rain5x3-official-v1` and `/data/data_4t/Yang/RoVES_repro/outputs/roves_m123_final_weather/938501/20260721-m123-snow5x3-official-v1`. Four 5.2-second matrices cover Speed Hump / Sunken Road under the five rain and five snow levels. The crop retains approach, axle contact, body response, and at least one second of settled recovery.
- Scene 938501 snow uses the approved lossless independent road-accumulation and particle-residual composition documented by the official Snow5D release. The ZIP itself is not regenerated or modified.

High-bitrate sources were web-encoded to 1280×720 H.264 with faststart. Every displayed gallery clip has a WebP poster.

Semantic media metadata and response windows are recorded in `assets/videos/gallery/manifest.json`.

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
