# chenning来源
杨振宁（英语：Chen-Ning Franklin Yang，1922年10月1日－[注 1]），中国[12]理论物理学家，在统计力学和粒子物理学等领域贡献卓著，在物理学界影响力很大。他曾在抗日战争时的西南联合大学念本科、硕士，后赴美念博士。他与李政道于1956年共同提出宇称不守恒理论，因而分享1957年诺贝尔物理学奖，以中华民国国籍成为最早的华人诺奖得主。     

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/CNYang.jpg/200px-CNYang.jpg)

# ZYUI

ZYUI 是最右 抄 [zent](https://youzan.github.io/zent/) PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件。包括这个网站也是抄的。

为了简单,所以没有删除zent原有的组件。
zent的目标是让 React 项目开发更快、更简单。ZYUI也是这个目标。         


# 为什么抄zent ?
* zent整体架构简单易懂，相比antd的各种封装。zent清晰明了。还有部分文档说明。
* 自己写了一个轻量的组件库，发展无论怎么轻量，最终还是需要，文档，组件库打包脚本化等等。zent都包含了。因此站在zent的基础上，搭建了ZYUI。

### 特性

* 高质量的 React 基础组件以及丰富的业务组件
* 内置 TypeScript 类型定义文件
* 支持定制主题
* 代码/样式按需加载
* yarn + webpack + babel + postcss + prettier + stylefmt
* 一套有赞设计师绘制的图标库
* 单测覆盖率在 90% 以上

### 支持环境

* React >= 15.6
* 现代浏览器以及 IE 11 及以上
* 支持服务端渲染(SSR)

### 安装

```bash
npm i @xc/zyui
```

### 使用组件

```jsx
import { Button } from '@xc/zyui';

// 引入样式
import '@xc/zyui/css/index.css';

ReactDOM.render(<Button />, mountNode);
```

### 按需加载

<!-- [babel-plugin-zent](babel-plugin-zent) 这个 babel 插件可以帮助减小打包文件的大小，原理是自动做了类似下面的代码变换。 -->

```js
import { Button } from '@xc/zyui';

// 变换为

import Button from '@xc/zyui/lib/button';
```
<!-- 
适用于基于 ZYUI 开发的组件库，以及对 ZYUI 使用量较少的项目。详细使用帮助请看[插件的文档](babel-plugin-zent)。 -->


