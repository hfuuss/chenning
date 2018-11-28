## @xc/babel-plugin-zyui

这个插件通过自动化代码和样式的引入来帮助减小打包体积。

### 特性

- 减小打包体积
- JavaScript 代码按需引入
- 样式按需引入

### 使用

`npm install @xc/babel-plugin-zyui -D`

配置示例:

```js
// In your .babelrc
{
	"plugins": [
		["@xc/babel-plugin-zyui"]
	]
}
```

在 JavaScript 代码中通过 `import { Button, Dialog } from '@xc/zyui'` 这种方式去引入 ZYUI 组件，插件会自动引入用到的组件代码。

### 配置

- `moduleMapppingFile`: zyui 模块映射文件的绝对路径，默认是当前项目下的 zyui 安装目录。
- `noModuleRewrite`: 关闭 JavaScript 模块重写，一般配合打包工具的 tree-shaking 使用。 
- `automaticStyleImport`: 设置为 `true` 启用样式自动引入。
- `useRawStyle`: 配合 `automaticStyleImport` 使用, 设置为 `true` 自动引入样式源文件(PostCSS).

```js
// 默认值
{
	moduleMappingFile: '@xc/zyui/lib/module-mapping.json',
	noModuleRewrite: false,
	automaticStyleImport: false,
	useRawStyle: false
}
```
