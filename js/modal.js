export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  text: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
  message(text) {
    Modal.text.textContent = text
  },
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    Modal.close()
  }
})
