const password = document.querySelector('#password');
const confirmation = document.querySelector('#con-pass');
const falseConfirmation = document.querySelector('#con-pass + span');


confirmation.addEventListener('input', () => {
  if(password.value !== '' && confirmation.value !== ''){

    if(password.value === confirmation.value){
      falseConfirmation.classList.remove('false-confirmation');
      confirmation.setAttribute('style', 'border:2px solid green')
    }else{
      confirmation.setAttribute('style', 'border:2px solid red');
      falseConfirmation.classList.add('false-confirmation');
    }
    
  }else{
    confirmation.setAttribute('style', 'border:1px solid gray');
    falseConfirmation.classList.remove('false-confirmation');
  }
})
