const photoModal = () => {
  const photoModal = document.getElementById("PhotoModal");
  const photoImg = document.getElementById("Photo_Img");
  const photoModal__close = document.getElementById("PhotoModal__close");
  const photoModal__image = document.getElementById("PhotoModal__image");

  const closeModal = () => {
    photoModal.classList.remove("open");
    document.removeEventListener("keydown", handleEsc);
  };

  const handleEsc = (e) => e.key === "Escape" && closeModal();

  if (photoModal && photoImg && photoModal__close && photoModal__image) {
    photoImg.onclick = () => {
      document.addEventListener("keydown", handleEsc);
      photoModal__image.src = photoImg.src;
      photoModal.classList.add("open");
    };

    photoModal__close.onclick = () => closeModal();
  }
};

export default photoModal;
