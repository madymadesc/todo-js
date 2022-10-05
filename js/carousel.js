function classToggle() {
    var el = document.querySelector('.icon-cards-content');
    el.classList.toggle('step-animation');
  }
  
  document.querySelector('#toggle-animation').addEventListener('click', classToggle);