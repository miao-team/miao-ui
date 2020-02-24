# MIAO-UI 是一个基于 Taro(2.0+) 框架的组件库
### 本项目目前处于开发期,暂不适合于生产环境,谢谢 GitHub 上的版本与 Npm上的版本可能不一致 . 1.0 以后开启正式版本管理
[![GitHub stars](https://img.shields.io/github/stars/yinliangdream/miao-ui?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/yinliangdream/miao-ui?style=for-the-badge)](https://github.com/yinLiangDream/miao-ui)


## 特色

- 全部组件采用 TypeScript 编写，所有类型申有清晰有了
- 丰富的配色方案，统一管理组件的配色方案/极具色彩表现力
- 丰富的组件库，应有尽有 0 耦合

## 使用方式

>
> 安装：`npm i miao-ui`， `yarn add miao-ui`

## _注意_

> _当前版本为开发版本,请暂时不要下载或用于项目中！_

## 使用案例

### 引入 `CSS` 文件

引入 `CSS` 需要在 `src` 目录下 `app.scss` 中引入样式

```js
@import "~miao-ui/src/style/index.scss";
```

### 引入组件

```jsx
import { MIcon } from "miao-ui";

<MIcon size="xl" color="red" icon="home" />;
```

## 开发进度 及 组件

## 样式管理

| 文档| 版本号| 说明 |
| --- | --- | --- |
| [Color](./docs/Color.md)| 0.9|框架配色方案 |
| [Size](./docs/Size.md)| 0.9|尺寸配置方案 |
| [Text](./docs/Text.md)| 0.0.1|字本样式解决方案 |
| [Border](./docs/Border.md)| 0.1.5|边框样式解决方案 |
| [Radius](./docs/Radius.md)| 0.0.1|边角圆角解决方案 |
| [Shadow](./docs/Shadow.md)| 0.9|阴影效果解决方案 |
| [Margin & Padding](./docs/MarginPadding.md)| 0.1|边距解决方案 |
| [Transition](./docs/Transition.md)| 0.0.1|回弹效果解决方案 |

###  核心组件
|组件|名称|版本号|开发进度|文档进度|文档|
|---|---|---|---|---|---|
|Layout|Layout|0.0.1|||[更新中](##"创作你的创作")|
|Header||||||
|NavBar||||||
|Footer||||||
|TabBar||||||
|Content||||||
|Text||||||
|Image||||||

###  基础组件
|组件|名称|版本号|开发进度|文档进度|文档|
|---|---|---|---|---|---|
|Icon||||||
|Tag||||||
|Button||||||
|Avatar||||||
|Divider||||||
|Curtain||||||
|Image||||||
|Image||||||
|Image||||||
|Image||||||

###  UI布局组件
|组件|名称|版本号|开发进度|文档进度|文档|
|---|---|---|---|---|---|
|Panel||||||
|Grid||||||
|Flex||||||
|Card||||||
|TitleBar||||||
|Swiper||||||
|List||||||

###  操作反馈组件
|组件|名称|版本号|开发进度|文档进度|文档|
|---|---|---|---|---|---|
|Progress||||||
|Loading||||||
|Animation||||||
|Message||||||
|ActionSheet||||||
