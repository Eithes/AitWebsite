const searchBox = document.querySelector('.searchBox');

if (searchBox) {
  searchBox.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-search')) {
      document.querySelector('.searchBox-input').classList.toggle('is-open');
      document.querySelector('.searchBox-input').focus();
    } else if (!e.target.classList.contains('searchBox-input')) {
      document.querySelector('.searchBox-input').classList.remove('is-open');
    }
  });
}

