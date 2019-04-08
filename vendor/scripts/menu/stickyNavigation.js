const nav = document.querySelector('#navigation');

const stickyNavigation = () => {
  if (window.scrollY >= 350) {
    nav.classList.add('scrolledMenu');
    nav.classList.remove('scrolledMenuOut');
  } else if (window.scrollY < 350 && window.scrollY > 200 && nav.classList.contains('scrolledMenu')) {
    nav.classList.add('scrolledMenuOut');
  } else if (window.scrollY <= 0) {
    nav.classList.remove('scrolledMenu');
    nav.classList.remove('scrolledMenuOut');
  }
};

export default stickyNavigation;

