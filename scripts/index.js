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

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__open-popup');
const formElement = document.querySelector('.edit-profile');
const nameInput = formElement.querySelector('.edit-profile__personal-data_input_name');
const jobInput = formElement.querySelector('.edit-profile__personal-data_input_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const template = document.querySelector('#card-template');
const cardPlace = document.querySelector('.places__list');

//добавила новые карточки
initialCards.forEach(function(newCard){
  const card = template.content.querySelector('.card').cloneNode(true);

  card.querySelector('.card__image').src = newCard.link;
  card.querySelector('.card__title').textContent = newCard.name;

  cardPlace.prepend(card);
});

//


function openPopup() {
  popupElement.classList.add('.popup_opened');
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
