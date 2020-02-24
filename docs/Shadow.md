## 引用

```scss
// 在指定的文件中或 app.scss 中引入对应样式 shadow.scss
@import '~miao-ui/styles/cores/shadow.scss' // 如不使用框架则建议这个
// 或
@import '~miao-ui/styles/index.scss'
```

## 示例

```ts
<Text className="shadow-{***}">测试文字</Text>
<Image className="shadow-{***}" />
```

## 参数说明

| 名称|参数|备注|
| ---|---|---|
| Color|shadow-[COLOR]|COLOR 参数请参考[[Color解决方案](./docs/Color.md)]|
||warp|处理中|
||blur|处理中|
