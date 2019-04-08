const captions = document.querySelectorAll('.figa-parallax');

const photoesParallax = () => {
  for (let i = 0; i < captions.length; i += 1) {
    const img = captions[i];
    const imgParent = img.parentElement;

    const { speed } = img.dataset;

    const imgY = imgParent.offsetTop;
    const imgH = imgParent.offsetHeight;

    const winY = window.scrollY;
    const winH = window.innerHeight;

    // The next pixel to show on screen
    const winBottom = winY + winH;

    let imgPercent = 0;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + imgH) {
    // Number of pixels shown after block appear
      const imgBottom = ((winBottom - imgY - 500) * speed);
      // Max number of pixels until block disappear
      const imgTop = winH + imgH;
      // Porcentage between start showing until disappearing
      imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }

    img.style.bottom = `${imgPercent}%`;
  }
};

photoesParallax();

document.addEventListener('scroll', photoesParallax);

