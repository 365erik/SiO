import { SHORTCUTS } from "./shortcuts";

export const toggleTitle = (toggleID = "") => {
  const toggle = document.getElementById(toggleID);
  const className = "scrolled";

  if (!toggle) {
    return;
  }

  let ticking = false;

  document.addEventListener("scroll", (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (!toggle.classList.contains(className) && window.scrollY > 50) {
          toggle.classList.add(className);
        } else if (window.scrollY === 0) {
          toggle.classList.remove(className);
        }
        ticking = false;
      });
      ticking = true;
    }
  });
};

const menu = ({ toggleID, menuID, openClass }) => {
  const toggle = document.getElementById(toggleID);
  const menu = document.getElementById(menuID);

  const handleToggleMenu = (menu) => {
    menu.classList.toggle(openClass);
  };

  if (menu) {
    if (toggle) {
      toggle.addEventListener("click", (event) => {
        event.preventDefault();
        handleToggleMenu(menu);
      });
    }

    document.addEventListener(SHORTCUTS.MENU, () => {
      handleToggleMenu(menu);
    });
  }
};

export default menu;
