export const SHORTCUTS = {
  MENU: "toggle_menu",
  PHOTO_MODAL: "toggle_photo_modal",
};

export const SHORTCUT_KEYS = {
  m: SHORTCUTS.MENU,
  p: SHORTCUTS.PHOTO_MODAL,
};

const dispatch = (name, detail = {}) => {
  const dispatchEvent = new CustomEvent(name, {
    detail,
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  document.dispatchEvent(dispatchEvent);
};

const handleKeydown = ({ key }) => {
  if (SHORTCUT_KEYS.hasOwnProperty(key)) {
    dispatch(SHORTCUT_KEYS[key]);
  }
};

const shortcuts = () => {
  document.addEventListener("keydown", handleKeydown);
};

export default shortcuts;
