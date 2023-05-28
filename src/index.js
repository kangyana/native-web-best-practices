"use strict";
import { changeScale } from "./utils/resize.js";
import { registerComponents } from "./utils/register.js";
import PanelUpper from "./components/panel-upper/index.js";
import PanelLower from "./components/panel-lower/index.js";

/**
 * 入口文件
 */

// 初始化任务
const initalTask = () => {
  // 监听尺寸变化
  window.onresize = changeScale;
  // 按尺寸缩放
  changeScale();
  // 注册组件
  registerComponents(PanelUpper, PanelLower);
};

initalTask();
