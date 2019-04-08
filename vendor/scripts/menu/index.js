import stickyNavigation from './stickyNavigation';

stickyNavigation();
window.addEventListener('scroll', stickyNavigation);

const navMenu = document.querySelector('.nav-toggle');
const hamburger = document.querySelector('.hamburger');
const mainMenuSmall = document.querySelector('.mainMenu__small');

navMenu.addEventListener('click', () => {
  mainMenuSmall.classList.toggle('is-open');
  hamburger.classList.toggle('is-open');
});

window.addEventListener('resize', () => {
  if (mainMenuSmall.classList.contains('is-open') && window.innerWidth > 850) {
    mainMenuSmall.classList.remove('is-open');
    hamburger.classList.remove('is-open');
  }
});
