## 引用

```scss
// 在指定的文件中或 app.scss 中引入对应样式 border.scss
@import '~miao-ui/styles/cores/border.scss' // 如不使用框架则建议这个
// 或
@import '~miao-ui/styles/index.scss'
```

## 示例

```ts
<View className="solid-{***}">测试文字</View>
<View className="solids-{***}">测试文字</View>
<View className="dashed-{***}">测试文字</View>
```

## 参数说明

|名称|类名|子类名|
| ---| ---|---|
|实线边框|solid|`solid`,`solid-left`,`solid-right`,`solid-top`,`solid-bottom`|
|加粗实线边框|solids|`solids`,`solids-left`,`solids-right`,`solids-top`,`solids-bottom`|
|虚线边框|dashed|`dashed`,`dashed-left`,`dashed-right`,`dashed-top`,`dashed-bottom`|
