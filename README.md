Language : 🇨🇳 | [🇺🇸](./README-en_US.md)

<h1 align="center">原生 Web 开发最佳实践</h1>

## 目录结构

```
├── src
│   ├── assets               # 静态资源
│   ├── components           # 通用组件
│   ├── constants            # 常量
│   ├── pages                # 页面入口
│   ├── utils                # 工具库
│   ├── global.less          # 全局样式
│   ├── index.js             # 项目入口
├── index.html               # 根文件
├── README.md                # 总文档
```

## 启动

使用 vscode 打开[根文件](./index.html)，右键 `Open with Liver Server`。

## 自定义组件

一个组件由三个文件组成，分别是：

| 文件类型 | 是否必需 | 作用       |
| -------- | -------- | ---------- |
| js       | 是       | 组件逻辑   |
| html     | 是       | 组件模板   |
| css      | 是       | 组件样式表 |

### 创建组件

对于每个组件，都需要在组件对应的 `.js` 文件中进行创建。

使用 `Component` 构造器创建组件，有三个必填属性：`id`、`props`、`url`。

```js
class ComponentA extends Component {
  static id = "component-a"; // 组件的唯一标识
  static props = ["title", "size"]; // 组件接收的参数
  static url = import.meta.url; // 组件的路径

  constructor() {
    super();
  }
}
```

```html
<template id="component-a">something</template>
```

### 注册组件

在[入口文件](./src/index.js)，使用 `registerComponents` 函数注册：

```js
import ComponentA from "./components/component-a/index.js";

registerComponents(ComponentA);
```

### 使用组件

```html
<component-a title="A title" size="large">A Content</component-a>
```
