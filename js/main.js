import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
inputWeight.focus()

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const IMC = calculeIMC(weight, height)

  if (isNaN(weight) || isNaN(height) || !(weight || height) != "") {
    AlertError.message("Digite apenas números")
    AlertError.open()
    return
  }
  AlertError.close()

  idealIMC(IMC)
  Modal.message(`
  Seu IMC é de ${IMC}
  Classificação: ${idealIMC(IMC)}`)
  Modal.open()
  Modal.buttonClose.focus()
  inputHeight.value = ""
  inputWeight.value = ""
  inputWeight.focus()
}

const calculeIMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2)
}

const idealIMC = (numberIMC) => {
  if (numberIMC < 18.5) {
    return "Magreza"
  } else if (numberIMC < 24.9) {
    return "Normal"
  } else if (numberIMC < 29.9) {
    return "Sobrepeso"
  } else if (numberIMC < 34.9) {
    return "Obesidade grau I"
  } else if (numberIMC < 39.9) {
    return "Obesidade grau II"
  } else {
    return "Obesidade grau III"
  }
}
