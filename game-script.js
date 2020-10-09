// ----- START GAME -----
var score = 0;
var scorePlayerTwo = 0;

const gameContainer = document.querySelector('.main-card-container');
const playMenu = document.querySelector('.playMenu');

function onePlayerSelected() {
  // Masque les div de selection du nombre de joueurs
  for (let i = 0; i < playerBtn.length; i++) {
    playerBtn[i].style.display = 'none';
  }
  //Affiche la div pour entrer le nom du joueur 1
  player1.style.display = 'flex';

  playerNameBtn1.addEventListener('click', () => {
    const playerName = document.querySelector('#playerNameInput1');
    sessionStorage.setItem('name1', `${playerName.value}`);
    const selectDifficulty = document.querySelector('.playerName');
    selectDifficulty.innerHTML = 'Select difficulty';
    const levelBtn = document.querySelectorAll('.levelBtn');
    for (let i = 0; i < levelBtn.length; i++) {
      levelBtn[i].style.visibility = 'visible';
      levelBtn[i].style.opacity = 1;
      levelBtn[i].style.transition = 'opacity 1s ease';
    }
  });
  // Début -- Récupération de la touche Entrée pour valider l'input //
  const validEnterP1 = () => {
    const playerName1 = document.querySelector('#playerNameInput1');
    sessionStorage.setItem('name1', `${playerName1.value}`);
    player1.innerHTML = 'Select difficulty'; //remplace nom player 1 par select difficulty
    const levelBtn = document.querySelectorAll('.levelBtn'); //affiche les différents levels
    for (let i = 0; i < levelBtn.length; i++) {
      levelBtn[i].style.visibility = 'visible';
      levelBtn[i].style.opacity = 1;
      levelBtn[i].style.transition = 'opacity 1s ease';
    }
  };
  playerName1.onkeypress = function () {
    if (event.keyCode == 13) validEnterP1();
  };
}
// Fin -- Récupération de la touche Entrée pour valider l'input //

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
    sessionStorage.setItem('name1', `${playerName1.value}`);
    player1.style.display = 'none';
    player2.style.display = 'flex';
  });

  // Début -- Récupération de la touche Entrée pour valider l'input //
  const validEnterP1 = () => {
    const playerName1 = document.querySelector('#playerNameInput1');
    sessionStorage.setItem('name1', `${playerName1.value}`);
    player1.style.display = 'none';
    player2.style.display = 'flex';
  };
  const validEnterP2 = () => {
    const playerName2 = document.querySelector('#playerNameInput2');
    sessionStorage.setItem('name2', `${playerName2.value}`);
    player1.style.display = 'none';
    player2.innerHTML = 'Select difficulty'; //remplace nom player 2 par select difficulty
    const levelBtn = document.querySelectorAll('.levelBtn'); //affiche les différents levels
    for (let i = 0; i < levelBtn.length; i++) {
      levelBtn[i].style.visibility = 'visible';
      levelBtn[i].style.opacity = 1;
      levelBtn[i].style.transition = 'opacity 1s ease';
    }
  };
  playerName1.onkeypress = function () {
    if (event.keyCode == 13) validEnterP1();
  };
  playerName2.onkeypress = function () {
    if (event.keyCode == 13) validEnterP2();
  };
  // Fin -- Récupération de la touche Entrée pour valider l'input //

  //Stockage nom 2ème joueur + selection difficulté
  playerNameBtn2.addEventListener('click', () => {
    const playerName2 = document.querySelector('#playerNameInput2');
    sessionStorage.setItem('name2', `${playerName2.value}`);
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
const onePlayer = document.querySelector('#playerBtn1');

let twoPlayersMode = false;
// Cas n°1: Mode 1 joueur déjà sélectionné
if (sessionStorage.playerIsSet === 'true' && sessionStorage.playerNb === '1') {
  onePlayerSelected();
}

// Cas n°2 : Mode 2 joueurs déjà sélectionné
else if (
  sessionStorage.playerIsSet === 'true' &&
  sessionStorage.playerNb === '2'
) {
  twoPlayersSelected();
  twoPlayersMode = true;
}

// Cas n°3 : Nombre de joueurs non sélectionné
// Enregistrement du choix du nombre de joueurs dans sessionStorage
else if (!sessionStorage.hasOwnProperty('playerIsSet')) {
  //Affiche les boutons 1 player, 2 players
  for (let i = 0; i < playerBtn.length; i++) {
    playerBtn[i].style.display = 'flex';
  }
  //set le nombre de joueurs et lance le menu pour 1 joueur
  onePlayer.addEventListener('click', () => {
    sessionStorage.setItem('playerNb', '1');
    sessionStorage.setItem('playerIsSet', 'true');
    onePlayerSelected();
  });

  //set le nombre de joueurs et lance le menu pour 2 joueurs
  const twoPlayers = document.querySelector('#playerBtn2');
  twoPlayers.addEventListener('click', () => {
    sessionStorage.setItem('playerNb', '2');
    sessionStorage.setItem('playerIsSet', 'true');
    twoPlayersSelected();
    twoPlayersMode = true;
  });
}

// ----- FIN AFFICHAGE MENU -----

const playerOneDiv = document.querySelector('#player1');
const playerTwoDiv = document.querySelector('#player2');

function startGame() {
  playMenu.style = 'display: none';
  gameContainer.style = 'display : flex';
  const scoreTable = document.querySelector('.score-container');
  scoreTable.style.display = 'flex';

  // ----- Div Mode 1 joueur -----
  playerOneDiv.innerHTML = `${sessionStorage.name1}: ${score}`;

  // ----- Div Mode 2 joueurs -----
  playerTwoDiv.innerHTML = `${sessionStorage.name2}: ${scorePlayerTwo}`;

  if (!twoPlayersMode) {
    playerTwoDiv.style.display = 'none';
  }
}

let drunk = false;
const drunkMode = document.querySelector('#drunkMode');
drunkMode.addEventListener('click', () => {
  drunk = true;
});

// ----- END START GAME -----

// ----- SHUFFLE -----

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

// ----- GESTION PLATEAU DE JEU -----

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
  } else {
    clicked = false;
    secondCard = this;

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

// ----- FONCTION MATCHING -----

let playerOne = {
  name: sessionStorage.name1,
  score: score,
  isPlaying: true,
};
let playerTwo = {
  name: sessionStorage.name2,
  score: scorePlayerTwo,
  isPlaying: false,
};

let totalMatch = 0;

function match() {
  // SI SUCCES
  if (firstCard.dataset.index === secondCard.dataset.index) {
    firstCard.removeEventListener('click', displayCard);
    secondCard.removeEventListener('click', displayCard);

    //GAME OVER
    totalMatch += 1;
    if (totalMatch >= 8) {
      endGame();
    }

    //GESTION SCORE : succès + 100 points
    if (playerOne.isPlaying === true) {
      score = score + 100;
      playerOneDiv.innerHTML = `${sessionStorage.name1} :${score}`;
      return score;
    } else if (playerTwo.isPlaying === true) {
      scorePlayerTwo = scorePlayerTwo + 100;
      playerTwoDiv.innerHTML = `${sessionStorage.name2}: ${scorePlayerTwo}`;
      return scorePlayerTwo;
    }
    return scorePlayerTwo;
  }
  // SI ECHEC : Le joueur perd 30 points
  else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('open');
      secondCard.classList.remove('open');
      lockBoard = false;
      firstCard = null;
    }, 1000);

    if (playerOne.isPlaying === true) {
      if (score > 0) {
        score = score - 30;
      } else {
        score = 0;
      }
      playerOneDiv.innerHTML = `${sessionStorage.name1}: ${score}`;
      // MODE 2 JOUEURS : CHANGEMENT DE JOUEUR
      if (twoPlayersMode) {
        playerOne.isPlaying = false;
        playerTwo.isPlaying = true;
        playerTwoDiv.classList.toggle('isPlaying');
        playerOneDiv.classList.toggle('isPlaying');
      }

      return score;
    } else if (playerTwo.isPlaying === true) {
      if (scorePlayerTwo > 0) {
        scorePlayerTwo = scorePlayerTwo - 30;
      } else if (scorePlayerTwo <= 0) {
        scorePlayerTwo = 0;
      }
      playerTwoDiv.innerHTML = `${sessionStorage.name2}: ${scorePlayerTwo}`;
      // MODE 2 JOUEURS : CHANGEMENT DE JOUEUR
      if (twoPlayersMode) {
        playerTwo.isPlaying = false;
        playerTwoDiv.classList.toggle('isPlaying');
        playerOne.isPlaying = true;
        playerOneDiv.classList.toggle('isPlaying');
      }

      // return scorePlayerTwo;
    }
  }
}

// EVENEMENT CLIQUE SUR LES CARTES

for (let i = 0; i < arrayCard.length; i++) {
  arrayCard[i].addEventListener('click', displayCard);
}

//FONCTION FIN DE JEU
//Affiche la modale et stocke les données en local Storage pour les lire dans le ranking.
function endGame() {
  const endGameModal = document.querySelector('.endGame-container');
  endGameModal.style.display = 'flex';
  //Stockage des données
  localStorage.setItem('isOver', 'true');
  localStorage.setItem('score1', `${score}`);
  localStorage.setItem('name1', `${sessionStorage.name1}`);
  if (localStorage.hasOwnProperty('name2')) {
    localStorage.setItem('score2', `${scorePlayerTwo}`);
    localStorage.setItem('name2', `${sessionStorage.name2}`);
  }
  //Clean sessionStorage pour choisir à nouveau le nb de joueurs si play again
  sessionStorage.clear();
}
