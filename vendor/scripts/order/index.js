import PopupFrame from '../components/PopupFrame';

const thanks = new PopupFrame({ frame: document.querySelector('.thanks') });
const bookFormContainer = new PopupFrame({ frame: document.querySelector('.bookFormContainer') });

const orderButtons = document.querySelectorAll('.order-button');
if (orderButtons.length) {
  for (let i = 0; i < orderButtons.length; i += 1) {
    orderButtons[i].addEventListener('click', (e) => {
      bookFormContainer.open();
      document.querySelector('#route').value = e.target.dataset.exc;
    });
  }
}

const bookForm = document.querySelector('.bookForm');
if (bookForm) {
  bookForm.addEventListener('submit', (e) => {
    bookFormContainer.close();
    e.preventDefault();
    thanks.open({ timer: 10000 });
  });
}
