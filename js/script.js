import { Modal } from "./modal.js"
import { calculateIMC, NotANumber } from "./utils.js"
import { alertError } from "./alert-error.js"

// as variáveis - variables 
const form = document.querySelector('form')
export const inputWeight = document.querySelector('#weight')
export const inputHeight = document.querySelector('#height')



// adicionando funções de cálculo, a partir dos dados que forem digitados nos meus inputs. Adicionando também, a pop-up com o meu resultado na tela.

form.onsubmit = (event) => { // só vai ser executada quando eu clicar no botão de submit 
event.preventDefault()

const weight = inputWeight.value
const height = inputHeight.value

// se isso for true, ele vai retornar true 
const weightOrHeightIsNotANumber = NotANumber(weight) || NotANumber(height)

if (weightOrHeightIsNotANumber === true) {
  alertError.open()
  return;
}

const result = calculateIMC(weight, height)

displayResultMessage(result)
}


function displayResultMessage(result) {
Modal.message.innerText = result
Modal.open()
}


// desaparecendo popUp quando eu digitar no input
form.oninput = () => {
  alertError.close()
}



  
  
  
  
  






