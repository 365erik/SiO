import { SHORTCUTS } from "./shortcuts";

const menu = ({ toggleID, menuID, openClass, closeClass }) => {
  const toggle = document.getElementById(toggleID);
  const menu = document.getElementById(menuID);
  let isOpen = false;

  const handleToggleMenu = (menu, isOpen) => {
    if (isOpen) {
      menu.classList.add(openClass);
      menu.classList.remove(closeClass);
    } else {
      menu.classList.add(closeClass);
      menu.classList.remove(openClass);
    }
  };

  if (menu) {
    if (toggle) {
      toggle.addEventListener("click", (event) => {
        event.preventDefault();
        isOpen = !isOpen;
        handleToggleMenu(menu, isOpen);
      });
    }

    document.addEventListener(SHORTCUTS.MENU, () => {
      isOpen = !isOpen;
      handleToggleMenu(menu, isOpen);
    });
  }
};

export default menu;
