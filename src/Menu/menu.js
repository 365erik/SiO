const menu = ({toggleID, menuID, openClass}) => {
  const toggle = document.getElementById(toggleID);
  const menu = document.getElementById(menuID);

  if (toggle && menu) {
    let isOpen = false;

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      isOpen = !isOpen;
      if (isOpen) {
        menu.classList.add(openClass);
        toggle.classList.add(openClass);
      } else {
        menu.classList.remove(openClass);
        toggle.classList.remove(openClass);
      }
      event.preventDefault();
    });
  }
};

export default menu;
