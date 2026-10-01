# 财务卡片巡游 · Financial Card Tour

使用 Remotion 重建的可编辑财务卡片动画：深绿色柔光背景、白色财务卡片、荧光绿标题与收入条形图，通过透视移动、镜头推进和拉远组成连续六秒巡游。

- 画布：1080 × 1920，9:16
- 帧率：30fps
- 时长：6秒 / 180帧
- Composition：`FinancialCardTour`
- 关联动效片段：`029698a2-50d4-4a4e-be7f-25eb67f76d90`
- 片段页面：https://motionface.cc/?recording=029698a2-50d4-4a4e-be7f-25eb67f76d90

所有卡片均为 React 文字、CSS 和图表组件，未把参考视频作为背景播放。字体使用 Arial / Helvetica 系统字体，不需要远程字体或额外图片。当前版本是无声画面复刻；参考中的音乐未包含。

## 安装与预览

推荐 Node.js 22或24，npm 10或更高版本。

```bash
npm ci
npm run check
npm run dev
```

打开控制台显示的本地地址，选择 `FinancialCardTour`，点击播放。默认通常是 http://localhost:3000/FinancialCardTour；端口被占用时以实际输出为准。

指定端口：

```bash
npm run dev -- --port=3011
```

## 导出

确认预览效果后执行：

```bash
npm run render
```

输出文件：`out/financial-card-tour.mp4`。默认使用 H.264，1080×1920、30fps。首次导出时 Remotion 可能下载自己的无头浏览器。

## 修改内容

| 要修改的内容 | 文件 |
| --- | --- |
| 标题、发票品牌、客户资料、收入、交易、费用 | `src/config.ts` |
| 分辨率、帧率、时长 | `src/config.ts` → `video` |
| 全局巡游速度 | `src/config.ts` → `speed`（默认为1） |
| 卡片位置、缩放、透视与运动时间 | `src/Motion.tsx` → `paths` |
| 标题显示时间和位置 | `src/FinancialCardTour.tsx` |
| 背景柔光、圆角、阴影和文字排版 | `src/style.css` |
| 卡片内部结构 | `src/Cards.tsx` |

卡片底色、文字、收入线与标题主色在 `config.ts` 中集中定义。背景光晕、辅助图表色和阴影的细节在 `style.css` 中调整。

布局使用720×1280设计坐标，在1080×1920画布中等比放大1.5倍。`Motion.tsx` 每个关键点按顺序记录：秒、中心X、中心Y、缩放、平面旋转、左右透视、上下透视、模糊。

如需延长视频并保持现有节奏，增加 `video.seconds` 即可，结尾卡片保持最后姿态；如需将整段等比例放慢，例如8秒，设置 `video.seconds: 8` 和 `speed: 0.75`。

## 时间轴

| 时间 | 内容 |
| --- | --- |
| 0–2.1秒 | 卡片群漂移，收入卡片逐渐推进并聚焦 |
| 2.1–3.4秒 | 发票卡片接力，Manage Invoices 标题出现 |
| 3.4–4.7秒 | 交易卡片接力，Organize Transactions 标题出现 |
| 4.7–6秒 | 卡片群拉远，Understand Business 两行标题收束 |

## 验证与边界

工程使用固定 Remotion 4.0.478 与锁文件；动画全部由帧号驱动，不依赖 CSS animation、随机数或网络素材。执行 TypeScript 检查，并检查收入、发票、交易及结尾关键帧和 Studio 预览。

这是组件化重建，并非逐像素匹配。原片的镜头畸变、压缩模糊和确切字体未提供，因此以 CSS 透视、轻微模糊与系统无衬线字体近似。修改字体可能影响字宽，应在预览中检查标题与卡片文字。

参考视频、签名下载地址、绑定凭证、临时分析图和本机依赖不进入仓库。绑定操作在仓库外完成。
