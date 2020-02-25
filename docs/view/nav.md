## 引入

```ts
// 按需引入需要在 app.scss 中引入对应样式 nav.scss
// @import "~miao-ui/styles/nav.scss"
import { MNav } from "miao-ui";
```

## 示例

```ts
<MNav

    />

</MNav>
```

## 参数说明

### MNav 参数

| 参数| 说明| 类型| 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
|bgColor|背景样式|string|
|~~color~~|字体样式|string|
|type|布局样式|TypeArray|center,full,default|default|
|title|标题|string|||
|titleClassName|标题样式|string|
|active|选中/激活序号|string||0|
|activeClassName|选中/激活的css样式|string|
|items|被选项数组|ItemsArray|
|itemClassName|导航区 css




### TypeArray

| 参数| 说明| 类型| 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
|default|默认居中左 子选项自动宽度|||是|
|center|选项居中,等分|
|full|选项等分|


### ItemsArray

| 参数| 说明| 类型| 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
|id|
|text|
|icon|
|className|



### MNav 事件

| 事件名称 |说明| 回调参数 |
| --- | --- | --- |
| onClick | 点击选项时回调 | item:点击项目对应数据,index:被点击项目的序号 |

### MNav 发送广播

| 广播名称 |说明| 执行周期 | 回调参数 |默认状态 |
| --- | --- | --- |--- |--- |
| broadcastNavHeightEvent | 广播组件当前高度 | didShow,didUpdate |height:number|OFF|

### MLayout 接收广播

| 监听名称 | 说明 | 参数 |默认状态 |
| --- | --- | --- |--- |
| broadcastNavTitleStateEvent |  | true:show,false:hide | ON |
