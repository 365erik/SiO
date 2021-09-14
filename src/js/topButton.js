import { SHORTCUTS } from "./shortcuts";
import { matchSiOGlobal } from "./SiOGlobals";

const tobButton = () => {
  const button = document.getElementById("ToTop");
  let lastKnownScrollPosition = 0;
  let isShowing = false;
  let ticking = false;
  let showButtonWhenScrolledThisMuch = window.innerHeight * 0.7;

  document.addEventListener(SHORTCUTS.PAGE_TOP, () => window.scrollTo(0, 0));

  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    });
  } else {
    return;
  }

  const toggleButton = () => {
    if (lastKnownScrollPosition > showButtonWhenScrolledThisMuch) {
      if (!isShowing && !matchSiOGlobal("modal", "open")) {
        button.classList.remove("hide");
        button.classList.add("show");
        isShowing = true;
      }
    } else if (isShowing) {
      button.classList.remove("show");
      button.classList.add("hide");
      isShowing = false;
    }
  };

  document.addEventListener("scroll", (e) => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleButton();
        ticking = false;
      });
      ticking = true;
    }
  });
};

export default tobButton;
