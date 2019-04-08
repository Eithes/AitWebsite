const arrow = document.querySelector('.upArrow');

if (arrow) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 1700) {
      arrow.classList.add('is-open');
    } else {
      arrow.classList.remove('is-open');
    }
  });

  arrow.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
