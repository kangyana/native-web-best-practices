import Component from "../../utils/component.js";

/**
 * 面板.下半部分
 * @class PanelLower
 * @extends {Component}
 */
class PanelLower extends Component {
  static id = "panel-lower";
  static props = ["placement"];
  static url = import.meta.url;

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "placement":
        this.shadowRoot.querySelector(".panel-lower").classList.add(newValue);
        break;
    }
  }
}

export default PanelLower;
