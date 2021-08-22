import menu from "./menu";
import tagline from "./tagline";

document.addEventListener("DOMContentLoaded", () => {
  menu({toggleID: "MainNavigationToggle", menuID: "MainNavigationMenu", openClass: "is-open"});
  tagline({taglineID: "Tagline"});
});
