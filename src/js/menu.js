const menu = ({ toggleID, menuID, openClass, closeClass }) => {
  const toggle = document.getElementById(toggleID);
  const menu = document.getElementById(menuID);

  if (toggle && menu) {
    let isOpen = false;

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      isOpen = !isOpen;
      if (isOpen) {
        menu.classList.add(openClass);
        menu.classList.remove(closeClass);
      } else {
        menu.classList.add(closeClass);
        menu.classList.remove(openClass);
      }
      event.preventDefault();
    });
  }
};

export default menu;
