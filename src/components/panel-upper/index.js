import Component from "../../utils/component.js";

/**
 * 面板.上半部分
 * @class PanelUpper
 * @extends {Component}
 */
class PanelUpper extends Component {
  static id = "panel-upper";
  static props = ["placement"];
  static url = import.meta.url;

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "placement":
        this.shadowRoot.querySelector(".panel-upper").classList.add(newValue);
        break;
    }
  }
}

export default PanelUpper;
