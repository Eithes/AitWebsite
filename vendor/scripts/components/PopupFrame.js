export default class PopupFrame {
  constructor(params = {}) {
    this.frame = params.frame || null;
    this.closer = this.frame ? this.frame.querySelector('.closePopup') : null;

    if (this.closer) {
      this.closer.addEventListener('click', this.close.bind(this));
    }
  }

  open(params = {}) {
    if (this.frame) {
      this.frame.classList.add('open');
    }

    if (typeof params.timer === 'number') {
      setTimeout(this.close.bind(this), params.timer);
    }
  }

  close() {
    if (this.frame) {
      this.frame.classList.remove('open');
    }
  }
}
