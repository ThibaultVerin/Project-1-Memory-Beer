const card = document.querySelectorAll('.card');
const arrayCard = [...card];

let clicked = false;
let firstCard;
let secondCard;

/* Mon array est rempli par les cartes. */

const displayCard = function () {
  this.classList.toggle('open');

  if (!clicked) {
    clicked = true;
    firstCard = this;
  } else {
    clicked = false;
    secondCard = this;

    console.log(firstCard, secondCard);
  }
};

/* const match = function () {
  if (firstCard.dataset.img === secondCard.dataset.img) {
    console.log('its a match');
  } else {
    this.removeEventListener('click', displayCard);
  }
}; */

for (let i = 0; i < arrayCard.length; i++) {
  arrayCard[i].addEventListener('click', displayCard);
}

/* Résultat : retournement de cartes et changement de classe lors de l'evenement */
