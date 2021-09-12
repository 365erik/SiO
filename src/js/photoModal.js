import { dispatchSiOGlobal, matchSiOGlobal } from "./SiOGlobals";
import { SHORTCUTS } from "./shortcuts";

const photoModal = () => {
  const image = document.getElementById("PhotoImage");
  const caption = document.getElementById("PhotoCaption").innerText || "";
  const modal = document.getElementById("PhotoModal");
  const close = document.getElementById("PhotoModalCloseButton");
  const modalImage = document.getElementById("PhotoModalImage");
  const modalCaption = document.getElementById("PhotoModalCaption");

  if (modal && image && close && modalImage) {
    const handleEsc = (e) => e.key === "Escape" && handleClose();

    const handleOpen = () => {
      document.addEventListener("keydown", handleEsc);
      modalImage.src = image.src;
      modalCaption.innerText = caption;
      modal.classList.add("open");
      dispatchSiOGlobal({ modal: "open" });
    };

    const handleClose = () => {
      modal.classList.remove("open");
      document.removeEventListener("keydown", handleEsc);
      dispatchSiOGlobal({ modal: "closed" });
    };

    image.onclick = () => {
      handleOpen();
    };

    close.onclick = () => handleClose();

    document.addEventListener(SHORTCUTS.PHOTO_MODAL, () =>
      matchSiOGlobal("modal", "open") ? handleClose() : handleOpen()
    );
  }
};

export default photoModal;
