/**
 * 注册组件
 * @param {CustomElementConstructor[]} constructors 组件集合
 */
const registerComponents = (...constructors) => {
  for (let index = 0; index < constructors.length; index++) {
    const constructor = constructors[index];
    const { id, url } = constructor;
    const jsUrl = new URL(url).pathname; // js文件路径
    const templateUrl = jsUrl.replace(".js", ".html"); // 模板文件路径
    const cssUrl = jsUrl.replace(".js", ".css"); // 样式表文件路径
    // 加载模板
    fetch(templateUrl)
      .then((res) => res.text())
      .then((res) => {
        // 插入样式表
        const text = res.replace(
          "</template>",
          `<link rel="stylesheet" href="${cssUrl}" /></template>`
        );
        // 插入dom
        document.body.insertAdjacentHTML("beforeend", text);
        // 挂载自定义元素
        window.customElements.define(id, constructor);
      })
      .catch((err) => {
        console.err("注册组件失败", err);
      });
  }
};

export { registerComponents };
