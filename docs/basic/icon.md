## 引入

```ts
// 按需引入需要在 app.scss 中引入对应样式 EIcon.scss
import { MIcon } from "miao-ui";
```

## 示例

```ts
<MIcon
    color="red"
    icon="home"
    size="xl"
    onClick={()=>console.log('onEvent.onClick')}
    />
```

## 参数说明

### MLayout 参数

| 参数| 说明| 类型| 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
|color|||||
|size|||||
|icon|||||
|color|||||

### headerArray

| 参数| 说明| 类型| 可选值 | 默认值 |
| --- | --- | --- | --- | --- |

### MLayout 事件

| 事件名称 |说明| 回调参数 |
| --- | --- | --- |

### MLayout 发送广播

| 广播名称 |说明| 执行周期 | 回调参数 |
| --- | --- | --- |--- |

### MLayout 接收广播

| 监听名称 |执行事件 | 回调参数 |
| --- | --- | --- |
