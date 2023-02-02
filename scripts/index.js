
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
const popupEditElement = document.querySelector('.popup_element_edit-profile');
const popupCloseButtonElement = popupEditElement.querySelector('.popup__close_edit-profile');
const popupOpenButtonElement = document.querySelector('.profile__open-popup');
const formEditElement = document.querySelector('.popup__form-edit');
const nameInput = formEditElement.querySelector('.edit-profile__personal-data_input_name');
const jobInput = formEditElement.querySelector('.edit-profile__personal-data_input_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//добавление новых карточек темплейт
const template = document.querySelector('#card-template');
const cardPlace = document.querySelector('.places__list');

//создание карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCardElement = document.querySelector('.popup_element_add-card');
const addCardCloseButton = popupAddCardElement.querySelector('.popup__close_add-card');
const addCardName = popupAddCardElement.querySelector('.card-name');
const addCardImage = popupAddCardElement.querySelector('.card-img');
const formAddElement = document.querySelector('.popup__form-add');

//картинка на весь экран
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

  cardImage.addEventListener('click', (evt) => {
    openPopup(popupBigImage);
    popupBigImage.querySelector('.popup-big-img__fullscreen').src = evt.target.src;
    popupBigImage.querySelector('.popup-big-img__label').textContent = evt.target.alt;
    popupBigImage.querySelector('.popup-big-img__fullscreen').alt = evt.target.alt;
  });
popupBigImage.querySelector('.popup-big-img__close').addEventListener('click', () =>
closePopup(popupBigImage));

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

  cardPlace.prepend (createNewCard({
    name: addCardName.value, link: addCardImage.value
  })
  );

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
