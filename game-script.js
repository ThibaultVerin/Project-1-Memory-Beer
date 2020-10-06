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
  this.classList.toggle('open');

  /*   if (clicked) {
    return;
  } */

  if (!clicked) {
    clicked = true;
    firstCard = this;
    console.log(firstCard.dataset.index);
  } else {
    clicked = false;
    secondCard = this;

    match();
  }
};

/*     - 3eme étape : via le data.index definit dans l'image on va déterminer si match ou non, si match remove eventListener, si pas match remove class et add setTimeout pour gérer la transition */

function match() {
  if (firstCard.dataset.index === secondCard.dataset.index) {
    firstCard.removeEventListener('click', displayCard);
    secondCard.removeEventListener('click', displayCard);
    console.log('its a match');
  } else {
    setTimeout(() => {
      firstCard.classList.remove('open');
      secondCard.classList.remove('open');
    }, 1000);
  }
}

for (let i = 0; i < arrayCard.length; i++) {
  arrayCard[i].addEventListener('click', displayCard);
}

/* Résultat : retournement de cartes et changement de classe lors de l'evenement */
/* ----- SCRIPT JAUGE -----
L'objectif de la fonction est d'obtenir une taille en % qui est déterminée en fonction du score actuel.
Ex: 0 paires trouvées, la taille est de 0% (0/9*100)
Ex: 8 paires trouvées, la taille est ~90% (8/9*100)

/!\ ATTENTION /!\
Ici le total de paires à 9 (au lieu de 8) pour ne jamais atteindre une taille de 100% sinon la jauge est trop grande !

*/

const jaugeContainer = document.querySelector('.jauge-container');
const jaugeMousse = document.querySelector('.jauge-mousse');
const totalPaires = 9;
let currentScore = 0;

jaugeMousse.addEventListener('mouseover', function () {
  if (currentScore === 8) return;
  currentScore += 1;
  let currentPercent = (currentScore / totalPaires) * 100;
  jaugeContainer.style.height = `${currentPercent}%`;
  jaugeContainer.style.transition = `height 2s ease-out`;
  console.log(currentScore);
});

/* 
  - Pour l'instant la fonction s'exécute lorsque l'on survole la jauge => une fois le jeu fini elle doit se déclencher lorsque l'on trouve une paire
  - A chaque exécution, le score actuel est incrémenté de 1
  - La fonction calcul la taille de la jauge
  - La nouvelle taille est appliquée avec une transition
  - Si le score est de 8 (jeu fini), la fonction est interrompue grâce à return
*/
