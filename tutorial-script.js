const tutorialBtn = document.querySelector('#tutorialBtn');
const gameContainer = document.querySelector('.main-card-container');
const mainBackground = document.querySelector('main');
const firstCard = document.querySelectorAll('.card');

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

/*
Prochaines étapes: 
    - Modification du texte
    - Modification des classes sur les cartes
*/

function step1Tutorial() {
  tutorialBtn.innerHTML = 'Click on a second card';
  firstCard[0].classList.replace('card-clignote', 'card');
  firstCard[5].classList.replace('card', 'card-clignote');
}

function step2Tutorial() {
  firstCard[0].classList.replace('card-clignote', 'card');
  firstCard[5].classList.replace('card-clignote', 'card');

  tutorialBtn.innerHTML = 'Try to find the match !';
  setTimeout(() => {
    firstCard[4].classList.replace('card', 'card-clignote');
  }, 1000);
}

function step3Tutorial() {
  firstCard[4].classList.replace('card-clignote', 'card');
  firstCard[12].classList.replace('card', 'card-clignote');
}

/*
Dernière étape: 
    - Incrémentation du score actuel (ici à 3 pour mieux voir la jauge progresser)
    - Création d'une variable currentPercent qui définit la taille de la jauge en % en fonction du score
    - Modificiation de la taille de la jauge en fonction de la variable currentPercent + transition
    - Retour du background à la couleur initiale et modification de bouton après 4s
*/

function step4Tutorial() {
  tutorialBtn.innerHTML = 'If you match, you are getting drunker !';
  currentScore += 3;
  let currentPercent = (currentScore / totalPaires) * 100;
  jaugeContainer.style.height = `${currentPercent}%`;
  jaugeContainer.style.transition = `height 2s ease-out`;
  setTimeout(() => {
    mainBackground.style.background = '#f26d3d';
    mainBackground.style.transition = 'all 3s ease';
    tutorialBtn.innerHTML = "<a href='game.html'>Let's play ! </a>";
  }, 4000);
}
