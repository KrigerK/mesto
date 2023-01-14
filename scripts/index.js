const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__open-popup');
const formElement = document.querySelector('.edit-profile');
const nameInput = formElement.querySelector('.edit-profile__personal-data_input_name');
const jobInput = formElement.querySelector('.edit-profile__personal-data_input_description');
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

function openPopup() {
  popupElement.classList.add('popup_opened');
  nameInput.textContent = profileName.value;
  jobInput.textContent = profileDescription.value;
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
