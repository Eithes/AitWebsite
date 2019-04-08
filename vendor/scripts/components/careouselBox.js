(function carouselManipulation() {
  const box = document.querySelector('.carouselBox');

  if (!box) {
    return false;
  }

  function exitCarousel(e) {
    if (e.target.parentElement.classList.contains('exitCarousel')) {
      box.style.display = 'none';
    }
  }

  document.body.addEventListener('click', exitCarousel);

  const arrowRight = document.querySelector('#arrow-right');
  const arrowLeft = document.querySelector('#arrow-left');
  const currentImg = document.querySelector('#current');
  const galleryImgs = document.querySelectorAll('.galleryItem img');

  function imgClick(e) {
    currentImg.src = e.target.getAttribute('data-attr');
    currentImg.setAttribute('data-attr', e.target.getAttribute('data-attr'));
  }
  galleryImgs.forEach(img => img.addEventListener('click', imgClick));

  const imgAttributes = [];
  galleryImgs.forEach((img) => {
    imgAttributes.push(img.getAttribute('data-attr'));
  });

  let currentSlideIndex = 0;
  function startCarousel(e) {
    if (e.target.parentElement.classList.contains('galleryItem') && (window.innerWidth >= 450)) {
      box.style.display = 'block';
    }

    currentSlideIndex = imgAttributes.indexOf(currentImg.getAttribute('data-attr'));
    function slideLeft() {
      currentSlideIndex -= 1;
      currentImg.src = imgAttributes[currentSlideIndex];
    }
    if (arrowLeft) {
      arrowLeft.addEventListener('click', () => {
        if (currentSlideIndex === 0) {
          currentSlideIndex = imgAttributes.length - 1;
        }
        slideLeft();
      });
    }
    function slideRight() {
      currentSlideIndex += 1;
      currentImg.src = imgAttributes[currentSlideIndex];
    }
    if (arrowRight) {
      arrowRight.addEventListener('click', () => {
        if (currentSlideIndex === imgAttributes.length - 1) {
          currentSlideIndex = 0;
        }
        slideRight();
      });
    }
  }

  const galleryCarousel = document.querySelector('.gallery');
  if (galleryCarousel) {
    document.querySelector('.gallery').addEventListener('click', startCarousel);
  }

  return true;
}());
