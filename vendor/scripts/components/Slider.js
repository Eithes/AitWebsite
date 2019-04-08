export default class Slider {
  constructor(params) {
    this.slider = params.slider || null;
    this.slides = [];
    this.captions = [];
    this.controls = {
      prev: null,
      next: null,
    };
    this.activeSlide = 0;

    this.prepareSlides();
    this.prepareControls();
    this.reset(params.initialSlide || 0);
  }

  prepareSlides() {
    if (this.slider) {
      const slides = this.slider.querySelectorAll('.slide');
      for (let i = 0; i < slides.length; i += 1) {
        this.slides.push(slides[i]);
        this.captions.push(slides[i].querySelector('.slideText') || null);
      }
    }
  }

  prepareControls() {
    if (this.slider) {
      this.controls.next = this.slider.querySelector('.control.next');
      this.controls.prev = this.slider.querySelector('.control.prev');

      if (this.controls.next) {
        this.controls.next.addEventListener('click', () => this.slidePrev());
        this.controls.next.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.controls.next.addEventListener('mouseleave', () => this.startAutoSlide());
      }

      if (this.controls.prev) {
        this.controls.prev.addEventListener('click', () => this.slidePrev());
        this.controls.prev.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.controls.prev.addEventListener('mouseleave', () => this.startAutoSlide());
      }
    }
  }

  reset(initialSlide = 0) {
    this.slides.forEach((slide, index) => {
      this.slides[index].style.opacity = '0';
      this.slides[index].style.transition = 'opacity .7s ease-out';
      if (this.captions[index]) {
        this.captions[index].classList.remove('slideTextIsOpen');
      }
    });

    this.slides[initialSlide].style.opacity = '1';
    if (this.captions[initialSlide]) {
      this.captions[initialSlide].classList.remove('slideTextIsOpen');
    }

    this.activeSlide = initialSlide;
  }

  slide(params) {
    const { currentSlide, nextSlide } = params;

    this.slides[currentSlide].style.opacity = '0';
    if (this.captions[currentSlide]) {
      this.captions[currentSlide].classList.remove('slideTextIsOpen');
    }

    this.slides[nextSlide].style.opacity = '1';
    if (this.captions[nextSlide]) {
      this.captions[nextSlide].classList.add('slideTextIsOpen');
    }

    this.activeSlide = nextSlide;
  }

  slideNext() {
    const currentSlide = this.activeSlide;
    const nextSlide = (this.activeSlide + 1 >= this.slides.length) ? 0 : this.activeSlide + 1;
    this.slide({ currentSlide, nextSlide });
  }

  slidePrev() {
    const currentSlide = this.activeSlide;
    const nextSlide = (this.activeSlide - 1 < 0) ? this.slides.length - 1 : this.activeSlide - 1;
    this.slide({ currentSlide, nextSlide });
  }

  startAutoSlide(time = false) {
    this.slideInterval = time || this.slideInterval;
    this.autoSlide = setInterval(this.slideNext.bind(this), this.slideInterval);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlide);
  }
}
