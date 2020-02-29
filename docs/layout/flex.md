## 引入

```ts
// 按需引入需要在 app.scss 中引入对应样式 flex.scss
// @import "~miao-ui/styles/flex.scss"
import { MFlex } from "miao-ui";
```

## 示例

```ts
<MFlex
    justify="start"
    align="start"
    wrap
    direction="row"
    />

</MFlex>
```

## 参数说明

### MFlex 参数

| 参数| 说明| 类型| 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
|color|
|bgColor|
|className|
|style|
|justify|水平方向排列方式||"start","end","center","between","around"
|align|垂直方向排列方式||"start","center","end","stretch"
|wrap|是否换行
|direction|水平还是垂直布局||"row","column","row-reverse","column-reverse"


### justifyType

| 参数| 说明|
| --- | --- |
|start|
|end|
|center|
|between|
|around|

### alignType

| 参数| 说明|
| --- | --- |
|start|
|end|
|center|
|stretch|

### directionType

| 参数| 说明|
| --- | --- |
|row|
|column|
|row-reverse|
|column-reverse|
