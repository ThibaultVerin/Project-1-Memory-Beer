const tutorialBtn = document.querySelector('#tutorialBtn');
const gameContainer = document.querySelector('.main-card-container');
const mainBackground = document.querySelector('main');
const firstCard = document.querySelectorAll('.card');

const jaugeContainer = document.querySelector('.jauge-container');
const jaugeMousse = document.querySelector('.jauge-mousse');
const totalPaires = 9; //Le total de paires est déclaré à 9 au lieu de 8 car si la jauge fait 100% c'est trop grand
let currentScore = 0; // Initialisation du score actuel à 0

// END VARIABLES DECLARATION //

// START TUTORIAL SCRIPT //

/*
1ème étape : 
    - modification de la taille du boutton avec transition
    - ajout du nouveau texte
    - modification du background avec transition
    - apparition du plateau de jeu (qui était mis en display : "none" au départ pour le masquer)
    - animation clignottement sur la première carte au bout de 1500ms (voir doc sur la fonction setTimeOut)
*/

function startTutorial() {
  tutorialBtn.style.width = '400px';
  tutorialBtn.style.transition = 'all 1s ease';
  tutorialBtn.innerHTML = 'Click on a first card';
  mainBackground.style.background = 'rgba(0, 0, 0, 0.5)';
  mainBackground.style.transition = 'all 1s ease';

  gameContainer.style = 'display: flex; visibility: visible; opacity : 1';

  setTimeout(() => {
    firstCard[0].classList.replace('card', 'card-clignote');
  }, 1500);
}

const card = document.querySelectorAll('.card');
const arrayCard = [...card];
let clicked = false;
let firstCard;
let secondCard;
let lockBoard = false;

const displayCard = function () {
  if (this === firstCard) {
    return;
  }

  if (lockBoard) {
    return;
  }

  this.classList.toggle('open');

  if (!clicked) {
    clicked = true;
    firstCard = this;
    console.log('firstCard');
  } else {
    clicked = false;
    secondCard = this;
    console.log('secondCard');

    /*Code pour gérer l'event DRUNK MODE */

    if (drunk) {
      myContainer.addEventListener('click', () => {
        myContainer.classList.add('rotate');
      });
    }

    match();
  }
};

function match() {
  // SI SUCCES
  if (firstCard.dataset.index === secondCard.dataset.index) {
    firstCard.removeEventListener('click', displayCard);
    secondCard.removeEventListener('click', displayCard);
    console.log('its a match');
  } else {
    setTimeout(() => {
      firstCard.classList.remove('open');
      secondCard.classList.remove('open');
      lockBoard = false;
      firstCard = null;
    }, 1000);
  }
}

for (let i = 0; i < arrayCard.length; i++) {
  arrayCard[i].addEventListener('click', displayCard);
}
