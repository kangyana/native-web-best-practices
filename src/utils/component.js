/**
 * 组件.构造器
 * @class Component
 * @extends {HTMLElement}
 */
class Component extends HTMLElement {
  static id = ""; // 组件ID
  /**
   * 参数
   * @type {string[]}
   */
  static props = [];

  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return this.props;
  }

  render() {
    const template = document.querySelector(`template#${this.constructor.id}`);
    const content = template.content.cloneNode(true);
    this.attachShadow({ mode: "open" }).appendChild(content);
  }
}

export default Component;
