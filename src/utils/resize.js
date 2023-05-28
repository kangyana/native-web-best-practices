import { SCREEN_WIDTH } from "../constants/screen.js";

// 修改页面缩放
const changeScale = () => {
  const scaleX = window.innerWidth / SCREEN_WIDTH;
  document
    .getElementById("root")
    .style.setProperty("transform", `scale(${scaleX}`);
};

export { changeScale };
