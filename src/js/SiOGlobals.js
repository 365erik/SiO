export const SIO_GLOBAL_EVENT = "setSiOGlobal";
window.SiO = window.SiO || {};

export const getSiOGlobal = (name) => window.SiO[name];

export const matchSiOGlobal = (name, value) => getSiOGlobal(name) === value;

const setSiOGlobal = (event) => {
  window.SiO = { ...window.SiO, ...event.detail };
};

export const dispatchSiOGlobal = (detail = {}) => {
  const dispatchEvent = new CustomEvent(SIO_GLOBAL_EVENT, {
    detail,
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  document.dispatchEvent(dispatchEvent);
};

const SiOGlobals = () => {
  document.addEventListener(SIO_GLOBAL_EVENT, setSiOGlobal);
};

export default SiOGlobals;
