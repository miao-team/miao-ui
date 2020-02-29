## 引入

```ts
// 按需引入需要在 app.scss 中引入对应样式 grid.scss
// @import "~miao-ui/styles/grid.scss"
import { MGrid } from "miao-ui";
```

## 示例

```ts
<MGrid
    bgColor="red"
    column="5"
    gap="10"
    rowLine
    columnLine
    />
    <View />
    <View />
    ...
</MGrid>
```

## 参数说明

### MGrid 参数

| 参数| 说明| 类型| 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
|className|样式名称|string|
|style|样式|string|
|~~color~~|字体色彩||||
|bgColor|背景色(整组件背景色 非单一子项)||||
|column|列数|INT
|gap|间距(X/Y),单位:PX|INT
|gapX|间距(X),单位:PX|INT
|gapY|间距(Y),单位:PX|INT
|scrollX|是否可横向滚动|boolean
|scrollY|是否纵向滚动.需定义让体高度|boolean
|lineX|是否显示子项边框(X)|boolean
|lineY|是否显示子项边框(Y)|boolean
|flowType|子项排列方式|string|row/column|row|
|skeleton|是否启骨架屏|boolean||false|


### MGrid 事件

| 事件名称 |说明| 回调参数 |
| --- | --- | --- |
|---|


### MGrid 发送广播

| 广播名称 |说明|发行版本| 执行周期 | 回调参数 |
| --- | --- | --- |---|--- |
|outputGridInitalize|初始化完成|Pro||

### MGrid 接收广播

| 监听名称 |执行事件 |发行版本| 回调参数 |
| --- | --- | --- |---|
|onChangeFlowTypeStatus||Pro
|onChangeColumnValue||Pro
|onChangeProps||Pro
