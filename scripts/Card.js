export default class Card {
  constructor(data, templateSelector, handleOpenBigImage) {
    this._name = data.name,
    this._link = data.link,
    this._templateSelector = templateSelector,
    this._handleOpenBigImage = handleOpenBigImage
}
  _getTemplate(){
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
}

  _toggleLikeElement(){
    this._card.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _removeCard(){
    this._card.remove();
  }

  _setEventListeners() {

    this._card.querySelector('.card__like').addEventListener('click', () => {
      this._toggleLikeElement();
    });

    this._card.querySelector('.card__trash-btn').addEventListener('click', () => {
      this._removeCard();
    });
    this._cardImage.addEventListener('click',()=>{
      this._handleOpenBigImage(this._link, this._name)
    })
  }

  createNewCard(){
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__image');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();

    return this._card;

}

}



