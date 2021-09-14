import SiOGlobals from "./SiOGlobals";
import menu, { toggleTitle } from "./menu";
import tagline from "./tagline";
import topButton from "./topButton";
import photoModal from "./photoModal";
import shortcuts from "./shortcuts";

SiOGlobals();
shortcuts();

document.addEventListener("DOMContentLoaded", () => {
  menu({
    toggleID: "MainNavigationToggle",
    menuID: "MainMenuAndHelp",
    openClass: "open",
  });
  toggleTitle("MainNavigationToggle");
  tagline({ taglineID: "Tagline" });
  topButton();
  photoModal();
});
