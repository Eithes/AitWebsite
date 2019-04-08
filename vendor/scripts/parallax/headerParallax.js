function parallax() {
  const winY = window.scrollY;
  const top = `${(-(winY) / 1.6)}px`;
  document.querySelector('.headerText__container').style.top = top;
}

document.addEventListener('scroll', parallax);

const winWidth = window.matchMedia('(min-width: 650px)');

function mediaQuery(assingedWidth) {
  if (assingedWidth.matches) { // If media query matches
    document.querySelectorAll('.figa').forEach((figa) => {
      figa.classList.add('figa-parallax');
    });
  } else {
    document.querySelectorAll('.figa').forEach((figa) => {
      figa.classList.remove('figa-parallax');
    });
  }
}
mediaQuery(winWidth);
winWidth.addListener(mediaQuery);

