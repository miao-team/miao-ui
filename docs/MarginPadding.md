## 引用

```scss
// 在指定的文件中或 app.scss 中引入对应样式 size.scss
@import '~miao-ui/styles/cores/size.scss' // 如不使用框架则建议这个
// 或
@import '~miao-ui/styles/index.scss'
```

## 示例

```ts
<Text className="margin-{***}">测试文字</Text>
<Image className="padding-{***}" />
```

## 参数说明

|名称|参数|备注|
| ---|---|---|
|常规尺寸|[margin/padding]-[SIZE]|SIZE 参数请参考[[Size解决方案](./docs/Size.md)]|
||0|margin/padding : 0|
