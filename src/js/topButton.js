import { SHORTCUTS } from "./shortcuts";

const tobButton = () =>
  document.addEventListener(SHORTCUTS.PAGE_TOP, () => window.scrollTo(0, 0));

export default tobButton;
