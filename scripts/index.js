
const initialCards = [
  {
    name: 'Балаклава',
    link: './images/places-balaclava.jpg'
  },
  {
    name: 'Ай-Петри',
    link: './images/places-ai-petri.jpg'
  },
  {
    name: 'Фиолент',
    link: './images/places-fiolent.jpg'
  },
  {
    name: 'Ялта',
    link: './images/places-yalta.jpg'
  },
  {
    name: 'Скала Дива',
    link: './images/places-diva.jpg'
  },
  {
    name: 'Херсонес Таврический',
    link: './images/places-hersones.jpg'
  }
];

//редактирование профиля
const popupProfile = document.querySelector('.popup_element_popup-form');
const profileOpenButton = document.querySelector('.profile__open-popup');
const profileForm = document.forms["profile-form"];
const profileNameInput = profileForm.querySelector('.popup-form__input_input_name');
const profileJobInput = profileForm.querySelector('.popup-form__input_input_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//добавление новых карточек темплейт
const template = document.querySelector('#card-template');
const cardPlace = document.querySelector('.places__list');

//создание карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_element_add-card');
const addCardName = popupAddCardElement.querySelector('.card-name');
const addCardImage = popupAddCardElement.querySelector('.card-img');
const addCardForm = document.forms["add-card-form"];

//картинка на весь экран
const popupBigImage = document.querySelector('.popup-big-img');
const bigImageElement = popupBigImage.querySelector('.popup-big-img__fullscreen');
const bigImageLabel = popupBigImage.querySelector('.popup-big-img__label');

//все кнопки закрытия
const closeButtons = document.querySelectorAll('.popup__close');

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

  cardImage.addEventListener('click', (evt) => {
    openPopup(popupBigImage);
    bigImageElement.src = evt.target.src;
    bigImageLabel.textContent = evt.target.alt;
    bigImageElement.alt = evt.target.alt;
  });

  return card;
};

const renderNewCard = (newCard) => {
  cardPlace.append(createNewCard(newCard))
};

initialCards.forEach(renderNewCard);

//функции открытия и закрытия попапа
const openPopup = function (popup){
  popup.classList.add('popup_opened');
}
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}

//открытие редактирования профиля
const editProfile = function () {

  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileDescription.textContent;

  openPopup(popupProfile);
}

// сохранение обновленных данных профиля
const handleProfileFormSubmit = function (evt) {
    evt.preventDefault();

    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileJobInput.value;

  closePopup(popupProfile);
}

//создание новой карточки
const handleAddCardSubmit = function (evt){
  evt.preventDefault();

  cardPlace.prepend (createNewCard({
    name: addCardName.value, link: addCardImage.value
  })
  );

evt.target.reset()

closePopup(popupAddCardElement);
}

//закрытие карточек
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup))
});

//слушатели событий
profileOpenButton.addEventListener('click', editProfile);
addCardButton.addEventListener('click', () => {
  openPopup(popupAddCardElement);
});
profileForm.addEventListener('submit', handleProfileFormSubmit);

addCardForm.addEventListener('submit',  handleAddCardSubmit);
