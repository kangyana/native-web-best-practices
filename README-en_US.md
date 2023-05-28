Language : [🇨🇳](./README.md) | 🇺🇸

<h1 align="center">Native Web Development Best Practices</h1>

## Folder structure

```
├── src
│   ├── assets               # Local static resources
│   ├── components           # Common components
│   ├── constants            # Constants
│   ├── pages                # Page entry
│   ├── utils                # Tool library
│   ├── global.less          # Global style
│   ├── index.js             # Project entry
├── index.html               # Root
├── README.md                # Document
```

## Start

Open the [root file](./index.html) using vscode, Right click `Open with Liver Server`.

## Custom component

A component consists of three files, which are:

| type | required | role                 |
| ---- | -------- | -------------------- |
| js   | y        | component logic      |
| html | y        | component template   |
| css  | y        | component stylesheet |

### Create the component

For each component, it needs to be created in the component's corresponding `.js` file.

Create a Component using the `Component` constructor, It has three required properties: `id`, `props`, and `url`.

```js
class ComponentA extends Component {
  static id = "component-a"; // component unique id
  static props = ["title", "size"]; // component parameters
  static url = import.meta.url; // file path

  constructor() {
    super();
  }
}
```

```html
<template id="component-a">something</template>
```

### Register the component

In [entry file](./src/index.js), register with the `registerComponents` function:

```js
import ComponentA from "./components/component-a/index.js";

registerComponents(ComponentA);
```

### Use the component

```html
<component-a title="A title" size="large">A Content</component-a>
```
