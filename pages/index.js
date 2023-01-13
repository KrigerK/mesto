const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__open-popup');

function openPopup() {
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);

popupCloseButtonElement.addEventListener('click', closePopup);

const formElement = document.querySelector('.edit-profile');
const nameInput = formElement.querySelector('.edit-profile__name');
const jobInput = formElement.querySelector('.edit-profile__description');

function handleFormSubmit (evt) {
    evt.preventDefault();
    const profileName = document.querySelector('.profile__name')
    const profileDescription = document.querySelector('.profile__description')

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

}
handleFormSubmit

formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', closePopup);
