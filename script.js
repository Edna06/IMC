// as variáveis - variables 

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



// objects literals - objetos com propriedade e valor (criar uma estrutura para o modal)

const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),


  open: function() {
    Modal.wrapper.classList.add('open')
  },
  close: function() {
    Modal.wrapper.classList.remove("open")
  }
}


// adicionando funções de cálculo, a partir dos dados que forem digitados nos meus inputs. Adicionando também, a pop-up com o meu resultado na tela.

form.onsubmit = (event) => { // só vai ser executada quando eu clicar no botão de submit 
event.preventDefault()

const weight = inputWeight.value
const height = inputHeight.value

const result = IMC(weight, height)
Modal.message.innerText = result

Modal.open()
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)). toFixed(2)
}


// adicionando evento de fechar a pop-up

Modal.btnClose.onclick = () => {
  Modal.close()

  inputHeight.value = ""
  inputWeight.value = ""

}
