import { inputHeight,inputWeight} from "./script.js"

// objects literals - objetos com propriedade e valor (criar uma estrutura para o modal)

export const Modal = {

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


// adicionando evento de fechar a pop-up

 Modal.btnClose.onclick = () => {
  Modal.close()

  inputHeight.value = ""
  inputWeight.value = ""
}


// usando variável global {window}
//keydown significa tecla pressionada 

window.addEventListener('keydown', handleKeydown)

function handleKeydown (event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}