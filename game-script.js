/* Résultat : retournement de cartes et changement de classe lors de l'evenement */
/* ----- SCRIPT JAUGE -----
L'objectif de la fonction est d'obtenir une taille en % qui est déterminée en fonction du score actuel.
Ex: 0 paires trouvées, la taille est de 0% (0/9*100)
Ex: 8 paires trouvées, la taille est ~90% (8/9*100)

/!\ ATTENTION /!\
Ici le total de paires à 9 (au lieu de 8) pour ne jamais atteindre une taille de 100% sinon la jauge est trop grande !

*/

// const jaugeContainer = document.querySelector('.jauge-container');
// const jaugeMousse = document.querySelector('.jauge-mousse');
// const totalPaires = 9;
// let currentScore = 0;

// function scoreCompteur() {
//   currentScore = currentScore + 1;
//   if (currentScore >= 8) return;
//   let currentPercent = (currentScore / totalPaires) * 100;
//   jaugeContainer.style.height = `${currentPercent}%`;
//   jaugeContainer.style.transition = `height 2s ease-out`;
//   console.log(currentScore);
// }

/* ----- END SCRIPT JAUGE ----- */

// ----- START GAME -----

const gameContainer = document.querySelector('.main-card-container');
const playMenu = document.querySelector('.playMenu');
let onePlayer, twoPlayers;

function onePlayerSelected() {
  // Masque les div de selection du nombre de joueurs
  for (let i = 0; i < playerBtn.length; i++) {
    playerBtn[i].style.display = 'none';
  }
  //Affiche la div pour entrer le nom du joueur 1
  player1.style.display = 'flex';

  playerNameBtn1.addEventListener('click', () => {
    const playerName = document.querySelector('#playerNameInput1');
    localStorage.setItem('name', `${playerName.value}`);
    console.log(localStorage);
    const selectDifficulty = document.querySelector('.playerName');
    selectDifficulty.innerHTML = 'Select difficulty';
    const levelBtn = document.querySelectorAll('.levelBtn');
    for (let i = 0; i < levelBtn.length; i++) {
      levelBtn[i].style.visibility = 'visible';
      levelBtn[i].style.opacity = 1;
      levelBtn[i].style.transition = 'opacity 1s ease';
    }
  });
}

function twoPlayersSelected() {
  // Masque les div de selection du nombre de joueurs
  for (let i = 0; i < playerBtn.length; i++) {
    playerBtn[i].style.display = 'none';
  }

  //Affiche la div pour entrer le nom du 1er joueur
  player1.style.display = 'flex';

  //Nom du 2ème joueur + stockage nom du 1er joueur + Masquer div 1er joueur
  playerNameBtn1.addEventListener('click', () => {
    const playerName1 = document.querySelector('#playerNameInput1');
    localStorage.setItem('name1', `${playerName1.value}`);
    player1.style.display = 'none';
    player2.style.display = 'flex';
  });

  //Stockage nom 2ème joueur + selection difficulté
  playerNameBtn2.addEventListener('click', () => {
    const playerName2 = document.querySelector('#playerNameInput2');
    localStorage.setItem('name2', `${playerName2.value}`);
    player2.innerHTML = 'Select difficulty'; //remplace nom player 2 par select difficulty
    const levelBtn = document.querySelectorAll('.levelBtn'); //affiche les différents levels
    for (let i = 0; i < levelBtn.length; i++) {
      levelBtn[i].style.visibility = 'visible';
      levelBtn[i].style.opacity = 1;
      levelBtn[i].style.transition = 'opacity 1s ease';
    }
  });
}

// ----- AFFICHAGE DU MENU ------
const player1 = document.querySelector('#playerName1'); // div joueur 1
const player2 = document.querySelector('#playerName2'); // div joueur 2
const playerBtn = document.querySelectorAll('.playerBtn'); // Selection du nombre de joueur
const playerNameBtn1 = document.querySelector('#playerNameCompleted'); //submit player 1 name
const playerNameBtn2 = document.querySelector('#playerNameCompleted2'); //submit player 2 name

// Cas n°1: Mode 1 joueur déjà sélectionné
if (
  sessionStorage.playerIsSet === 'true' &&
  sessionStorage.player === 'one player'
) {
  onePlayerSelected();
}

// Cas n°2 : Mode 2 joueurs déjà sélectionné
else if (
  sessionStorage.playerIsSet === 'true' &&
  sessionStorage.player === 'two players'
) {
  twoPlayersSelected();
}

// Cas n°3 : Nombre de joueurs non sélectionné
else if (!sessionStorage.hasOwnProperty('playerIsSet')) {
  //Affiche les boutons 1 player, 2 players
  for (let i = 0; i < playerBtn.length; i++) {
    playerBtn[i].style.display = 'flex';
  }
  const onePlayer = document.querySelector('#playerBtn1');
  console.log(onePlayer);
  //set le nombre de joueurs et lance le menu pour 1 joueur
  onePlayer.addEventListener('click', () => {
    sessionStorage.setItem('player', 'one player');
    sessionStorage.setItem('playerIsSet', 'true');
    onePlayerSelected();
  });

  //set le nombre de joueurs et lance le menu pour 2 joueurs
  const twoPlayers = document.querySelector('#playerBtn2');
  twoPlayers.addEventListener('click', () => {
    sessionStorage.setItem('player', 'two players');
    sessionStorage.setItem('playerIsSet', 'true');
    twoPlayersSelected();
  });
}

// ----- FIN AFFICHAGE MENU -----

function startGame() {
  console.log(gameContainer);
  playMenu.style = 'display: none';
  gameContainer.style = 'display : flex';
}

let drunk = false;
const drunkMode = document.querySelector('#drunkMode');
drunkMode.addEventListener('click', () => {
  drunk = true;
  console.log(drunk);
});

// ----- END START GAME -----

/* Récupération des images - carte face cachées / cartes avec icone de bières
 */

/*  */
const backCard = 'Pictures/cards/back-face.png';
const cardArray = [
  { url: 'Pictures/cards/bouteille2.png', name: 'bouteille2' },
  { url: 'Pictures/cards/bouteille4.png', name: 'bouteille4' },
  { url: 'Pictures/cards/bouteille3.png', name: 'bouteille3' },
  { url: 'Pictures/cards/bouteille5.png', name: 'bouteille5' },
  { url: 'Pictures/cards/bouteille6.png', name: 'bouteille6' },
  { url: 'Pictures/cards/bouteille7.png', name: 'bouteille7' },
  { url: 'Pictures/cards/bouteille8.png', name: 'bouteille8' },
  { url: 'Pictures/cards/bouteille10.png', name: 'bouteille10' },
  { url: 'Pictures/cards/bouteille2.png', name: 'bouteille2' },
  { url: 'Pictures/cards/bouteille4.png', name: 'bouteille4' },
  { url: 'Pictures/cards/bouteille3.png', name: 'bouteille3' },
  { url: 'Pictures/cards/bouteille5.png', name: 'bouteille5' },
  { url: 'Pictures/cards/bouteille6.png', name: 'bouteille6' },
  { url: 'Pictures/cards/bouteille7.png', name: 'bouteille7' },
  { url: 'Pictures/cards/bouteille8.png', name: 'bouteille8' },
  { url: 'Pictures/cards/bouteille10.png', name: 'bouteille10' },
];

function shuffle(arr) {
  let currentIndex = arr.length - 1,
    temporaryValue,
    randomIndex;
  for (currentIndex; currentIndex >= 0; currentIndex--) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    temporaryValue = arr[randomIndex];
    arr[randomIndex] = arr[currentIndex];
    arr[currentIndex] = temporaryValue;
  }
  return arr;
}

shuffle(cardArray);

const myContainer = document.querySelector('.card-container');

for (let i = 0; i < cardArray.length; i++) {
  const myDiv = document.createElement('div');
  myContainer.appendChild(myDiv);
  myDiv.classList.toggle('card');
  myDiv.setAttribute('data-index', cardArray[i].name);
  myDiv.innerHTML = `
  <img class="card-back" src=${backCard}>
  <img class="card-front" src=${cardArray[i].url} >`;
}

/* Récupération des cartes et placement dans un tableau avec "..." */

const card = document.querySelectorAll('.card');

/* Mon array est rempli par les cartes. */
const arrayCard = [...card];

/* Création de variables avec la première représentant si on a cliqué ou non, puis une variable pour la première carte cliquée ansi que pour la deuxième */

let clicked = false;
let firstCard;
let secondCard;
/* Création de la variable lockBoard pour bloquer le board lorsqu'il y a deux clicks */

let lockBoard = false;

/* Création de la fonction "Display" qui s'active lors de "l'addEventListener" (voir plus bas):
- 1ere étape : modification de la classe pour modifier le style CSS lors de l'evenement
- 2eme étape : déterminer si la carte cliquée est la 1ere ou 2eme et attribuer aux variables 
this = élément qui déclenche l'élément */

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

/*     - 3eme étape : via le data.index definit dans l'image on va déterminer si match ou non, si match remove eventListener, si pas match remove class et add setTimeout pour gérer la transition */
let score = 5000;

function match() {
  if (firstCard.dataset.index === secondCard.dataset.index) {
    firstCard.removeEventListener('click', displayCard);
    secondCard.removeEventListener('click', displayCard);
    console.log('its a match');
    score = score + 10;
    return score;
  } else {
    lockBoard = true;
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

//Fonction qui permet de stocker le score en local storage
function endGame() {
  localStorage.setItem('isOver', 'true');
  localStorage.setItem('score', `${score}`);
}
endGame();
