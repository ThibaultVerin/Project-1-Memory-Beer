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
