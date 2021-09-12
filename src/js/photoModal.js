import { dispatchSiOGlobal } from "./SiOGlobals";

const photoModal = () => {
  const image = document.getElementById("PhotoImage");
  const caption = document.getElementById("PhotoCaption").innerText || "";
  const modal = document.getElementById("PhotoModal");
  const close = document.getElementById("PhotoModalCloseButton");
  const modalImage = document.getElementById("PhotoModalImage");
  const modalCaption = document.getElementById("PhotoModalCaption");

  if (modal && image && close && modalImage) {
    const closeModal = () => {
      modal.classList.remove("open");
      document.removeEventListener("keydown", handleEsc);
      dispatchSiOGlobal({ modal: "closed" });
    };

    const handleEsc = (e) => e.key === "Escape" && closeModal();

    image.onclick = () => {
      document.addEventListener("keydown", handleEsc);
      modalImage.src = image.src;
      modalCaption.innerText = caption;
      modal.classList.add("open");
      dispatchSiOGlobal({ modal: "open" });
    };

    close.onclick = () => closeModal();
  }
};

export default photoModal;
