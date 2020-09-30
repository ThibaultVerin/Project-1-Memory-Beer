const burgerLogo = document.querySelector('#burger-logo');
const navBar = document.querySelector('#navbar');
const title = document.querySelector('.title');
burger.onclick = function () {
  burgerLogo.style.display = 'none';
  title.style.display = 'none';
  navBar.style.display = 'flex';
};
