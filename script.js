const joinButton = document.querySelector('.button');
const closeButton = document.querySelector('.close');
const popUp = document.querySelector('.pop-up');
const mainEl = document.querySelector('.main');

joinButton.addEventListener('click', () => {
  if (popUp.classList.contains('move-down'))
    popUp.classList.remove('move-down');
  popUp.classList.add('move-up');
  popUp.style.pointerEvents = 'auto';
  mainEl.classList.add('blur-container');
});

closeButton.addEventListener('click', () => {
  popUp.classList.remove('move-up');
  popUp.classList.add('move-down');
  popUp.style.pointerEvents = 'none';
  mainEl.classList.remove('blur-container');
});
