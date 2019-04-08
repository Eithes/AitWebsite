import PopupFrame from '../components/PopupFrame';

const thanks = new PopupFrame({ frame: document.querySelector('.thanks') });

if (document.querySelector('#reviewsForm')) {
  document.querySelector('#reviewsForm__form').addEventListener('submit', (e) => {
    thanks.open({ timer: 10000 });
    e.preventDefault();
  });

  document.querySelector('#reviewsForm').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
