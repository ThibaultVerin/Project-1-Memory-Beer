const burgerLogo = document.querySelector('#burger-logo');
const navBar = document.querySelector('#navbar');
const title = document.querySelector('.title');
burger.onclick = function () {
  burgerLogo.style.display = 'none';
  title.style.display = 'none';
  navBar.style.width = '100%';
  navBar.style.display = 'flex';
  navBar.style.flexDirection = 'row';

  navBar.style.alignItems = 'center';
  navBar.style.justifyContent = 'space-between';
};
