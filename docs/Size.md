## 引用

```scss
// 在指定的文件中或 app.scss 中引入对应样式 size.scss
@import '~miao-ui/styles/cores/size.scss' // 如不使用框架则建议这个
// 或
@import '~miao-ui/styles/index.scss'
```

## 示例

```ts
<Text className="text-{***}">测试文字</Text>
<Image className="img-{***}" />
```

## 参数说明

### 尺寸(Size)

| 参数|对应定号|对应宽高|对应margin|对应padding|备注|
| ---|---|---|---|---|---|
|xs|10|10*10|5|5|
|sm|12|12*12|10|10|
|md|14|14*14|15|15|
|~~df~~|14|14*14|||1.0版本后 不建议使用|
|lg|16|16*16|20|20|
|xl|18|18*18|25|25|
|xxl|22|22*22|||
|sl|40|40*40|||
|xls|60|60*60|||
|[1~100]|font-size:?px|width:?px height:?px|||
