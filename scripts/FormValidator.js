export default class FormValidator {
  constructor(config, form) {
    (this._config = config), (this._form = form);
  }

  _handleFormInput = (event) => {
    this._input = event.target;
    this._inputId = this._input.id;
    this._inputErrorElement = document.querySelector(`#${this._inputId}-error`);

    if (!this._input.validity.valid) {
      this._input.classList.add(this._config.inputErrorClass);
      this._inputErrorElement.textContent = this._input.validationMessage;
    } else {
      this._input.classList.remove(this._config.inputErrorClass);
      this._inputErrorElement.textContent = '';
    }
  };
  _addInputListeners = () => {
    this._form.addEventListener('input', (event) => {
      this._handleFormInput(event);
    });
  };

  _toggleButton = () => {
    this._submitButton = this._form.querySelector(
      this._config.submitButtonSelector
    );
    this._isFormValid = this._form.checkValidity();

    this._submitButton.disabled = !this._isFormValid;
    this._submitButton.classList.toggle(
      this._config.inactiveButtonClass,
      !this._isFormValid
    );
  };

  enableValidation = () => {
    this._form.addEventListener('input', () => this._toggleButton());

    this._addInputListeners();
    this._toggleButton();

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButton();
      }, 0);
    });
  };
}
