
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
const formEditElement = document.querySelector('.form_edit');
const nameInput = formEditElement.querySelector('.edit-profile__personal-data_input_name');
const jobInput = formEditElement.querySelector('.edit-profile__personal-data_input_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//добавление новых карточек темплейт
const template = document.querySelector('#card-template');
const cardPlace = document.querySelector('.places__list');
const newCardName = initialCards.name;
const newCardLink = initialCards.link;

//создание карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_element_add-card');
const addCardCloseButton = popupAddCardElement.querySelector('.popup__close_add-card');
const addCardName = popupAddCardElement.querySelector('.popup_element_card-name');
const addCardImage = popupAddCardElement.querySelector('.popup_element_card-img');
const formAddElement = document.querySelector('.form_add');

const popupBigImage = document.querySelector('.popup-big-img');

//добавление новых карточек темплейт
const createNewCard = (newCard) =>{
  const card = template.content.querySelector('.card').cloneNode(true);

  const cardImage = card.querySelector('.card__image');
  const cardName = card.querySelector('.card__title');

  cardImage.src = newCard.link;
  cardImage.alt = newCard.name;
  cardName.textContent = newCard.name;

  const cardLikeElement =  card.querySelector('.card__like');
  cardLikeElement.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active')
  });

  const cardRemoveElement = card.querySelector('.card__trash-btn');
  cardRemoveElement.addEventListener('click', () => {
    card.remove();
  });



  return card;
};


const renderNewCard = (newCard) => {
  cardPlace.append(createNewCard(newCard))
};

initialCards.forEach((item) => renderNewCard(item));

//функциb открытия и закрытия попапа
const openPopup = function (popup){
  popup.classList.add('popup_opened');
}
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}

//открытие редактирования профиля
const editProfile = function () {

  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;

  openPopup(popupEditElement);
}

// сохранение обновленных данных профиля
const handleFormSubmit = function (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

  closePopup(popupEditElement);
}

//создание новой карточки
const addCardSubmit = function (evt){
  evt.preventDefault();

  const card = template.content.querySelector('.card').cloneNode(true);

  card.querySelector('.card__image').src = addCardImage.value;
  card.querySelector('.card__image').alt = addCardName.value;
  card.querySelector('.card__title').textContent = addCardName.value;

  cardPlace.prepend(card);

  addCardImage.value = '';
  addCardName.value = '';

  closePopup(popupAddCardElement);
}

//слушатели событий
popupOpenButtonElement.addEventListener('click', editProfile);

popupCloseButtonElement.addEventListener('click', () =>{
  closePopup(popupEditElement)});

addCardButton.addEventListener('click', () => {
  openPopup(popupAddCardElement);
});

addCardCloseButton.addEventListener('click', () => {
  closePopup(popupAddCardElement)});

formEditElement.addEventListener('submit', handleFormSubmit);

formAddElement.addEventListener('submit', addCardSubmit);
