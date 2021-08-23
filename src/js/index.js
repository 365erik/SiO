import menu from "./menu";
import tagline from "./tagline";
import topButton from "./topButton";

document.addEventListener("DOMContentLoaded", () => {
  menu({toggleID: "MainNavigationToggle", menuID: "MainNavigationMenu", openClass: "is-open"});
  tagline({taglineID: "Tagline"});
  topButton();
});
