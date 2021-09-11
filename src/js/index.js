import menu from "./menu";
import tagline from "./tagline";
import topButton from "./topButton";
import photoModal from "./photoModal";

document.addEventListener("DOMContentLoaded", () => {
  menu({
    toggleID: "MainNavigationToggle",
    menuID: "MainMenuAndSettings",
    openClass: "open",
    closeClass: "closed",
  });
  tagline({ taglineID: "Tagline" });
  topButton();
  photoModal();
});
