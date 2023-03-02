import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards, formValidationConfig} from './constans.js'

//редактирование профиля
const popupProfile = document.querySelector('.popup_element_popup-form');
const profileOpenButton = document.querySelector('.profile__open-popup');
const profileForm = document.forms['profile-form'];
const profileNameInput = profileForm.querySelector(
  '.popup-form__input_input_name'
);
const profileJobInput = profileForm.querySelector(
  '.popup-form__input_input_description'
);
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//добавление новых карточек темплейт
const cardPlace = document.querySelector('.places__list');
// const cardImage = document.querySelector('.card').querySelector('.card__image')

//создание карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_element_add-card');
const addCardName = popupAddCardElement.querySelector('.card-name');
const addCardImage = popupAddCardElement.querySelector('.card-img');
const addCardForm = document.forms['add-card-form'];

// //картинка на весь экран
const popupBigImage = document.querySelector('.popup-big-img');
const bigImageElement = popupBigImage.querySelector(
  '.popup-big-img__fullscreen'
);
const bigImageLabel = popupBigImage.querySelector('.popup-big-img__label');

//все попапы
const popupList = Array.from(document.querySelectorAll('.popup'));

//функции открытия и закрытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

// Открытие большой картинки
const handleOpenBigImage = (link, name) => {
  openPopup(popupBigImage);
  bigImageElement.src = link;
  bigImageLabel.textContent = name;
  bigImageElement.alt = name;
};

//создание карточек
const createCard = (item) => {
  const card = new Card(item, '#card-template', handleOpenBigImage);
  const cardElement = card.createNewCard();
  return cardElement;
};

//добавление карточек на страницу
initialCards.forEach((item) => {
  cardPlace.append(createCard(item));
});

//создание новой карточки
const handleAddCardSubmit = (evt) => {
  evt.preventDefault();

  cardPlace.prepend(
    createCard({
      name: addCardName.value,
      link: addCardImage.value,
    })
  );

  evt.target.reset();

  closePopup(popupAddCardElement);
};

//открытие редактирования профиля
const editProfile = function () {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileDescription.textContent;

  openPopup(popupProfile);
};

// сохранение обновленных данных профиля
const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileJobInput.value;

  closePopup(popupProfile);
};

//закрытие карточек по крестику и оверлею
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close')
    ) {
      closePopup(popup)
      popup.querySelector('.popup-form').reset();
    }
  });
});

function closeByEscape(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
    openedPopup.querySelector('.popup-form').reset();
  }
}

//слушатели событий
profileOpenButton.addEventListener('click', editProfile);
addCardButton.addEventListener('click', () => {
  openPopup(popupAddCardElement);
});
profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddCardSubmit);

//Валидация форм
const profileFormValidation = new FormValidator(
  formValidationConfig,
  profileForm
);
profileFormValidation.enableValidation();

const addCardFormValidation = new FormValidator(
  formValidationConfig,
  addCardForm
);
addCardFormValidation.enableValidation()
