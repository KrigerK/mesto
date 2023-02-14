const formValidationConfig = {
  formSelector: '.popup-form',
  inputSelector: '.popup-form__input',
  inputErrorClass: 'popup-form__input_type_error',
  submitButtonSelector: '.popup-form__submit',
  inactiveButtonClass: 'popup-form__submit_disabled'
}

const handleFormInput = (event, config) => {
  const input = event.target;
  const inputId = input.id;
  const inputErrorElement = document.querySelector(`#${inputId}-error`);

  if(!input.validity.valid){
    input.classList.add(config.inputErrorClass)
    inputErrorElement.textContent = input.validationMessage;
  }else{
    input.classList.remove(config.inputErrorClass)
    inputErrorElement.textContent = '';
  }
}


const addInputListeners = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach((input) => {
    input.addEventListener('input', (event) =>{
      handleFormInput (event, config)
    });
  });
}

const toggleButton = (form, config) => {
  const submitButton = form.querySelector(config.ubmitButtonSelector);
  const isFormValid = form.checkValidity();

  submitButton.disabled = !isFormValid;
  submitButton.classList.toggle(config.inactiveButtonClass, !isFormValid);

  console.log(!isFormValid)

}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    form.addEventListener('input', ()=> toggleButton(form, config))

    addInputListeners(form, config)
    toggleButton(form, config)
  })
}

enableValidation(formValidationConfig);

