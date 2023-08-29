const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
inputWeight.focus()

const Modal = {

  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
}

form.onsubmit = event => {
  event.preventDefault()
  
  const weight = inputWeight.value;
  const height = inputHeight.value;
  Modal.message.textContent = `Seu IMC é de ${IMC(weight, height)}`
  Modal.open()
  Modal.buttonClose.focus()

}

Modal.buttonClose.onclick = () => {
  Modal.close()
  inputHeight.value = ""
  inputWeight.value = ""
  inputWeight.focus()
}

const IMC = (weight, height) => {
  return (weight/((height/100) ** 2)).toFixed(2)
}


