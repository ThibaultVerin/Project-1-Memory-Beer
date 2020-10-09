const tutorialBtn = document.querySelector('#tutorialBtn');
const gameContainer = document.querySelector('.main-card-container-tuto');
const mainBackground = document.querySelector('main');

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

const card = document.querySelectorAll('.card');
const arrayCard = [...card];
let clicked = false;
let firstCard;
let secondCard;
let lockBoard = false;

function startTutorial() {
  sessionStorage.clear();
  tutorialBtn.style.width = '400px';
  tutorialBtn.style.transition = 'all 1s ease';
  tutorialBtn.innerHTML = 'Click on a first card';
  mainBackground.style.background = 'rgba(0, 0, 0, 0.5)';
  mainBackground.style.transition = 'all 1s ease';

  gameContainer.style = 'display: flex; visibility: visible; opacity : 1';

  setTimeout(() => {
    card[0].classList.toggle('card-clignote');
  }, 1500);
}

tutorialBtn.addEventListener('click', startTutorial);

const displayCard = function () {
  arrayCard[5].setAttribute('data-index', 'img1');
  arrayCard[0].setAttribute('data-index', 'img2');
  if (this === firstCard) {
    return;
  }

  if (lockBoard) {
    return;
  }

  this.classList.add('open');

  if (!clicked) {
    clicked = true;
    firstCard = this;
    tutorialBtn.innerHTML = 'Click on a second card';
    arrayCard[5].classList.toggle('card-clignote');
    console.log('firstCard');
  } else {
    clicked = false;
    secondCard = this;
    console.log('secondCard');
  }

  unmatch();
};

function unmatch() {
  // SI SUCCES
  /*   if (firstCard.dataset.index === secondCard.dataset.index) {
    firstCard.removeEventListener('click', displayCard);
    secondCard.removeEventListener('click', displayCard);
    console.log('its a match');
  } else { */
  setTimeout(() => {
    arrayCard[0].classList.remove('open');
    arrayCard[5].classList.remove('open');
    lockBoard = false;
    firstCard = null;
    tutorialBtn.innerHTML = 'Try to find the match !';
    arrayCard[4].classList.toggle('card-clignote');
  }, 4000);
}

/* displayCard2(); */

arrayCard[0].addEventListener('click', displayCard);

arrayCard[5].addEventListener('click', displayCard);

const displayCard2 = function () {
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
    arrayCard[12].classList.toggle('card-clignote');
  } else {
    clicked = false;
    secondCard = this;
    console.log(secondCard);
  }

  match();
};

function match() {
  firstCard.removeEventListener('click', displayCard2);
  secondCard.removeEventListener('click', displayCard2);
  console.log('its a match');
  setTimeout(() => {
    tutorialBtn.innerHTML = "<a href='game.html'>Let's play ! </a>";
  }, 3000);
  setTimeout(() => {
    mainBackground.style.background = '#f26d3d';
    mainBackground.style.transition = 'all 3s ease';
  }, 4000);
}

arrayCard[4].addEventListener('click', displayCard2);

arrayCard[12].addEventListener('click', displayCard2);
