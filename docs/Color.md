## 引用

```scss
// 在指定的文件中或 app.scss 中引入对应样式 color.scss
@import '~miao-ui/styles/color.scss' // 如不使用框架则建议这个
// 或
@import '~miao-ui/styles/index.scss'
```

## 示例

```ts
<View className="bg-red">
    测试文字
</View>
```

## 参数说明

### 标准色

| 参数| 对应色值| 默认字体色值 |
| --- | --- | --- |
| red | #e54d42 |#ffffff  |  
| orange | #f37b1d |  #ffffff|  
| yellow | #fbbd08 | #ffffff |  
| olive | #8dc63f | #ffffff |  
| green |#39b54a  | #ffffff |  
| cyan | #1cbbb4 |  #ffffff|  
| blue | #0081ff | #ffffff |  
| purple | #6739b6 |#ffffff  |  
| mauve | #9c26b0 | #ffffff |  
| pink |#e03997  |  #ffffff|  
| brown | #a5673f | #ffffff |  
| grey | #8799a3 |  #ffffff|  
| black | #333333 | #ffffff |  
| gray | #aaaaaa |  #ffffff|  
| white |  #ffffff| #000000 |  

### 浅色

```scss
// 浅色类名与标准色类名一致,只需追加类名 `light`
<View className="bg-red light">
    测试文字
</View>
```

| 参数| 对应色值| 默认字体色值 |
| --- | --- | --- |
| red | #fadbd9 |#e54d42  |  
| orange | #fde6d2 |  #f37b1d|  
| yellow | #fef2ce | #fbbd08 |  
| olive | #e8f4d9 | #8dc63f |  
| green |#d7f0db  | #39b54a |  
| cyan | #d2f1f0 |  #1cbbb4|  
| blue | #cce6ff | #0081ff |  
| purple | #e1d7f0 |#6739b6  |  
| mauve | #ebd4ef | #9c26b0 |  
| pink |#f9d7ea  |  #e03997|  
| brown | #ede1d9 | #a5673f |  
| grey | #e7ebed |  #8799a3|  
|~~black~~| #333333 | #ffffff |  
| ~~gray~~ | #aaaaaa |  #ffffff|  
| ~~white~~ |  #ffffff| #000000 |  



### 渐变色

| 参数| 对应色值 |
| --- | --- |
| gradual-red | ['#f43f3b', '#ec008c'] |
| gradual-orange | ['#ff9700', '#ed1c24'] |
| gradual-green | ['#39b54a', '#8dc63f'] |
| gradual-purple | ['#9000ff', '#5e00ff'] |
| gradual-pink | ['#ec008c', '#6739b6'] |
| gradual-blue | ['#0081ff', '#1cbbb4'] |
