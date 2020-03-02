## 引入

```ts
// 无需引入样式文件
import { MAvatar } from "miao-ui";
```

## 示例

```ts
<MText
    color={'red'}
    size={12}
    onClick={()={
        console.log('点击事件')
    }
    />

</MText>
```

## 参数说明

### MText 通用参数

| 参数        | 说明     | 类型                       | 可选值 | 默认值 |
| --------- | ------ | ------------------------ | --- | --- |
| className |        |                          |     |     |
| style     |        |                          |     |     |
| color     | 文字颜色   | [Color](./docs/Color.md) |     |     |
| bgColor   | 文字背景颜色 | [Color](./docs/Color.md) |     |     |

### MText 私有参数

| 参数          | 说明       | 类型                     | 可选值                                       | 默认值   |
| ----------- | -------- | ---------------------- | ----------------------------------------- | ----- |
| size        | 字体大小     | [Size](./docs/Size.md) |                                           |       |
| lineSpacing | 间距       | string/int             | "none","small","normal","large",number    |       |
| fontSpacing | 行距       | string/int             | "none","small","normal","large",number    |       |
| cut         | 超出隐藏     | boolean                |                                           | false |
| align       | 字体方向     | string                 | "left","center","right"                   |       |
| special     | 突出       | string                 | "firstUpper","upper","lower"              |       |
| fontWeight  | Weight属性 | string/int             | "normal","bold","bolder","lighter",number |       |
| wrap        | 是否换行     | boolean                |                                           | false |

### specialType

| 参数         | 说明          |
| ---------- | ----------- |
| firstUpper | 首字母大写 仅英文有效 |
| upper      | 大写 仅英文有效    |
| lower      | 小写  仅英文有效   |

### MText 事件

| 事件名称    | 说明   | 回调参数 |
| ------- | ---- | ---- |
| onClick | 点击事件 |      |
