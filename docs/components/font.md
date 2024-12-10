---
title: Font
---

# Font 字体

## 字体家族

Hony UI 使用了**思源黑体**作为默认字体。

```css
body {
    font-family: var(--hony-font-family);
}
```

另外，针对网页中显示的代码，使用**Consolas**字体会更加舒适。

```css
.code-font {
    font-family: var(--hony-code-font-family);
}
```

**DIN**字体可用于卡片等大数字展示的场景，请酌情使用。

```css
.din-font {
    font-family: var(--hony-din-font-family);
}
```

## 字体大小

Hony UI 的字体大小使用了**14px**作为默认值，可以根据需要调整。

```css
body {
    font-size: var(--hony-font-size-base);
    line-height: var(--hony-line-height-base);
}
```

字体的大小和行高如下：

| 使用场景 | 大小   | 行高   | css变量名                                                |
|------|------|------|-------------------------------------------------------|
| 提示   | 12px | 20px | --hony-font-size-small --hony-line-height-small       |
| 正文   | 14px | 22px | --hony-font-size-base --hony-line-height-base         |
| H5   | 16px | 24px | --hony-font-size-medium --hony-line-height-medium     |
| H4   | 20px | 28px | --hony-font-size-large --hony-line-height-large       |
| H3   | 24px | 32px | --hony-font-size-xlarge --hony-line-height-xlarge     |
| H2   | 30px | 40px | --hony-font-size-xxlarge --hony-line-height-xxlarge   |
| H1   | 38px | 46px | --hony-font-size-xxxlarge --hony-line-height-xxxlarge |

## 字重

Hony UI 的字体重量只使用了 regular 以及 bold 的两种字体重量，分别对应代码中的 400 和 700。

```css
body {
    font-weight: var(--hony-font-weight-regular);
}

.bold-font {
    font-weight: var(--hony-font-weight-bold);
}
```








