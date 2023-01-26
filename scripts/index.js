const initialCards = [
  {
    name: 'Балаклава',
    link: './images/places-balaclava.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//редактирование профиля
const popupEditElement = document.querySelector('.popup_element_edit-profile');
const popupCloseButtonElement = popupEditElement.querySelector('.popup__close_edit-profile');
const popupOpenButtonElement = document.querySelector('.profile__open-popup');
const formElement = document.querySelector('.edit-profile');
const nameInput = formElement.querySelector('.edit-profile__personal-data_input_name');
const jobInput = formElement.querySelector('.edit-profile__personal-data_input_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//добавление новых карточек темплейт
const template = document.querySelector('#card-template');
const cardPlace = document.querySelector('.places__list');

//создание карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_element_add-card');
const addCardCloseButton = popupAddCardElement.querySelector('.popup__close_add-card')

//добавление новых карточек
initialCards.forEach(function(newCard){
  const card = template.content.querySelector('.card').cloneNode(true);

  card.querySelector('.card__image').src = newCard.link;
  card.querySelector('.card__title').textContent = newCard.name;

  cardPlace.prepend(card);
});

//функциb открытия и закрытия попапа
function openPopup (popup){
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// //функция редактирования профиля
const editProfile = function () {

  nameInput.textContent = profileName.value;
  jobInput.textContent = profileDescription.value;

  openPopup(popupEditElement);
}

//функция добавления карточек
function addCard () {
  openPopup(popupAddCardElement);
}


// function closePopup() {
//   popupElement.classList.remove('popup_opened');
// }

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

  closePopup();
}

popupOpenButtonElement.addEventListener('click', editProfile);

popupCloseButtonElement.addEventListener('click', () => {
  closePopup(popupEditElement)});

formElement.addEventListener('submit', handleFormSubmit);

addCardButton.addEventListener('click', addCard);

addCardCloseButton.addEventListener('click', () => {
  closePopup(popupAddCardElement)});
