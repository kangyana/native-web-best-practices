/**
 * 注册组件
 * @param {CustomElementConstructor[]} constructors 组件集合
 */
const registerComponents = (...constructors) => {
  for (let index = 0; index < constructors.length; index++) {
    const constructor = constructors[index];
    const { id, url } = constructor;
    const templateUrl = new URL(url).pathname.replace(".js", ".html"); // 模板文件路径
    // 加载模板
    fetch(templateUrl)
      .then((res) => res.text())
      .then((res) => {
        // 插入dom
        document.body.insertAdjacentHTML("beforeend", res);
        // 挂载自定义元素
        window.customElements.define(id, constructor);
      })
      .catch((err) => {
        console.err("注册组件失败", err);
      });
  }
};

export { registerComponents };
