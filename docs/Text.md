## 引用

```scss
// 在指定的文件中或 app.scss 中引入对应样式 text.scss
@import '~miao-ui/styles/cores/text.scss' // 如不使用框架则建议这个
// 或
@import '~miao-ui/styles/index.scss'
```

## 示例

```ts
<Text className="text-{***}">测试文字</Text>
```

## 参数说明

### 字体样式([Color](./docs/Color.md))

| 参数| 类名|备注|
| ---|---|---|
|常规颜色|text-[COLOR]|COLOR 参数请参考[[Color解决方案](./docs/Color.md)]|
|Abc|text-Abc|首字母大写(仅限英文)|
|abc|text-abc|小写(仅限英文)|
|ABC|text-ABC|大写(仅限英文)|
|price|text-price|金额格|
|left|text-left|居左|
|right|text-ABC|居右|
|center|text-ABC|居中|
|bold|text-bold|加粗|

### 字体样式([Size](./docs/Size.md))

| 参数| 类名|备注|
| ---|---|---|
|常规尺寸|text-[SIZE]|SIZE 参数请参考[[Size解决方案](./docs/Size.md)]|
|8~72|text-[8~72]|font-size:**px|
