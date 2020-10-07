// Selection du nombre de joueurs
function onePlayer() {
  sessionStorage.setItem('player', 'one player');
  sessionStorage.setItem('playerIsSet', 'true');
  window.location.href = 'game.html';
}

sessionStorage.player;

function twoPlayers() {
  sessionStorage.setItem('player', 'two players');
  sessionStorage.setItem('playerIsSet', 'true');
  window.location.href = 'game.html';
}
