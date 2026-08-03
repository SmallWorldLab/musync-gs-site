# Project page 内容准备清单

当前原型已经能完整预览，但仍是**匿名、不可公开索引的 draft**。以下按发布优先级整理。

## 1. 公开前必须确认

| 内容 | 当前状态 | 需要你准备/确认 |
|---|---|---|
| 项目名称 | 已使用 `muSync-GS` | 确认公开品牌究竟是 `muSync-GS`、`RoVES`，还是两者组合。建议与论文标题保持 `muSync-GS`。 |
| 作者顺序 | 缺失 | 所有作者英文名、顺序、个人主页链接。 |
| 单位与通讯作者 | 缺失 | 单位全称、上标对应关系、通讯作者标记和联系邮箱。 |
| 论文状态 | 缺失 | Under review / accepted / preprint；未解除匿名前不要公开作者和项目 URL。 |
| Venue | 占位 | 最终会议名称、年份、paper ID 或 award 信息（若有）。 |
| Paper / arXiv | 本地 PDF 已有 | 决定使用本地 PDF、arXiv PDF、会议 PDF 还是 DOI；给出正式 URL。 |
| Code URL | `Coming soon` | GitHub organization、仓库名、公开日期、release tag。 |
| Data / artifact URL | 缺失 | 哪些数据、配置、manifest、预训练模型可以公开，以及下载方式。 |
| BibTeX | 占位 | 最终作者、venue、页码、DOI/arXiv、年份。 |
| Contact | 缺失 | 项目联系邮箱或 issue tracker。 |
| License | 缺失 | 页面代码、媒体、论文图、公开代码/数据分别采用什么 license。不要默认它们是同一个 license。 |

## 2. 已经整理好的内容

- 完整英文标题、meta description 和一句话核心卖点。
- 非论文式长摘要，而是适合网页阅读的 problem statement。
- 最新 pipeline 和 conceptual-gap 图。
- 34.5 秒最终匿名总览视频。
- 20 个独立展示卡片 / 19 个唯一视频：
  - Sunny + Rain 10/25/50；
  - Sunny + Snow 0.5/1/2/3；
  - Speed bump × Dry/Rain 50/Snow 3；
  - Sunken road × Dry/Rain 50/Snow 3；
  - 5 个匿名 multi-scene 路线。
- Frozen CarSim、VGGT video diagnostics、A2D2、visual-control 四组结果模块。
- 最新 Figure 6（无 H/D ratio）、Figure 7（`CarSim state reference`、`Body pitch`）。
- 最新 9 页主文和 20 页 supplement。
- Scope/limitation：静态或准静态 Waymo 场景、动态 agents 未重模拟、VGGT 指标限制、geometry-only empirical reference。
- Nerfies/Bulma 学术主页结构、响应式分类视频画廊、按需视频加载、reduced-motion、alt text 和 BibTeX 复制。

## 3. 建议再准备的展示素材

### P0：很值得补

1. **8–12 秒 hero teaser**
   - 当前使用最终 34.5 秒 media-supplement overview，信息完整但首屏偏长。
   - 更理想的是另剪一个首屏版本：Sunny → Rain-50 braking → speed hump → Snow-3 depression，每段 2–3 秒。

2. **统一的 baseline side-by-side 视频**
   - Weather：Cosmos / LTX-Video / VACE / muSync-GS，同场景、同 seed、同时间窗口。
   - Geometry：hump / depression，同样的 approach-contact-after timing。
   - 页面当前采用静态 Figure 5/6；有成套视频后说服力会更强。

3. **视频同步 telemetry overlay**
   - 至少显示 speed、body pitch、route progress 中的 1–2 个。
   - 让访客不用读方法也能看出“视觉变化与物理响应同步”。

4. **Social preview 图（1200×630）**
   - 当前直接使用 media cover。
   - 最终建议制作带项目名、主场景、weather/geometry 双案例和一句 tagline 的专用 OG 图。

### P1：有时间再补

- 五个 Waymo 场景已经具有独立 poster 和按需加载视频。
- 一张简化版 Table 3，而不是把论文整张表塞进网页。
- 30–60 秒 narrated overview 或字幕版 demo。
- 每支视频的英文 transcript / caption 文件（WebVTT）。
- Downloadable media supplement 与 checksum manifest。

## 4. 数值与措辞发布检查

发布前逐项和最终论文交叉检查：

- CarSim：`0.0273 m/s`, `0.0590°`, `0.0101`, `26.61 N per-wheel`。
- Video W：`0.00424 ± 0.00010` normalized-progress RMSE。
- Path：`0.00266 ± 0.00007` progress-aligned lateral deviation。
- Geometry：muSync-GS `0.352/0.396`；rendered state reference `0.354/0.406`。
- A2D2：14 events、3 drives、`0.062°`、`0.381°/s`、correlation `0.901/0.560`。
- Visual：rain/snow ordering `1.000/1.000`、localized-edit rate `0.711`、T-IoU `0.603`。

注意：

- VGGT 数值必须继续称为 **diagnostics**，不要写成统一物理准确率排名。
- Rendered state reference 是 geometry-only empirical reference，不要称严格 measurement floor。
- Source-motion correlation 是 retention diagnostic，不是“越高越好”的任务指标。

## 5. 匿名与授权检查

在公开 GitHub Pages 前：

- 确认会议是否允许在审稿期公开同标题、同素材的项目页。
- 未解除匿名时，不加入作者、实验室、个人 GitHub、可反查身份的 URL 或 analytics ID。
- 确认 Waymo-derived frame/video 的网页展示与再分发条件。
- 确认 A2D2 图表、CarSim 派生图及 baseline 输出的展示许可和必要 attribution。
- 检查视频中车牌、行人脸部或其他不应公开的信息。
- 页面 footer 增加最终 dataset/model acknowledgements。

## 6. 上线前技术检查

- 删除 `<meta name="robots" content="noindex, nofollow">`（仅在确认可以公开后）。
- 替换匿名提示、Code soon、Citation placeholder。
- 用手机、Safari、Chrome、Firefox 各检查一次。
- 确认所有 MP4 支持 byte-range，并使用 H.264 `faststart`。
- 跑一次 Lighthouse：Performance、Accessibility、Best Practices、SEO。
- 确认 GitHub Pages base path；如果部署到子路径，不要改成根路径 `/assets/...`。
- 设置 favicon、OpenGraph URL、canonical URL 和 404 页面。
- 若加入 analytics，使用不影响匿名和隐私的配置，并在 footer 说明。

## 7. 推荐上线结构

建议独立仓库：

```text
SmallWorldLab/musync-gs-site
```

当前 Nerfies 风格页面顺序：

1. Publication title / anonymous authors / resource buttons
2. Hero teaser
3. Four-number proof strip
4. Abstract / conceptual gap
5. Counterfactual video gallery: Rain / Snow / Speed Bump / Sunken Road / Multi-scene
6. Pipeline / three shared interfaces
7. CarSim / video / A2D2 evaluation blocks
8. Visual controllability
9. Scope / reproducibility / BibTeX

该版本使用 Nerfies 的经典 academic project-page 节奏，同时用 proof strip 和结果模块突出“同步响应确实可见”。
