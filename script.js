const password = document.querySelector('#password');
const confirmation = document.querySelector('#con-pass');
const falseConfirmation = document.querySelector('#con-pass + span');


confirmation.addEventListener('input', () => {
  if(password.value !== ''){

    if(password.value === confirmation.value){
      falseConfirmation.classList.remove('false-confirmation');
      confirmation.setAttribute('style', 'border:2px solid #00FFAB')
    }else{
      confirmation.setAttribute('style', 'border:2px solid #FF0000');
      falseConfirmation.classList.add('false-confirmation');
    }

  }else{
    confirmation.setAttribute('style', 'border:2px solid white');
    falseConfirmation.classList.remove('false-confirmation');
  }
})
