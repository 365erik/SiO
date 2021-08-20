import "./css/main.css";

import menu from "./Menu/menu";

document.addEventListener("DOMContentLoaded", () => {
  menu({toggleID: "MainMenuToggle", menuID: "MainNavigation", openClass: "is-open"});
});
