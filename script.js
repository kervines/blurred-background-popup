const joinButton = document.querySelector('.button');
const popUp = document.querySelector('.pop-up');
const bodyEl = document.querySelector('body');
const containerEl = document.querySelector('.container');
const closeButton = document.querySelector('.close');

joinButton.addEventListener('click', () => {
  if (popUp.classList.contains('move-down'))
    popUp.classList.remove('move-down');
  popUp.classList.add('move-up');
  popUp.style.pointerEvents = 'auto';
  containerEl.classList.add('blur-container');
  bodyEl.classList.add('blur');
});

closeButton.addEventListener('click', () => {
  popUp.classList.remove('move-up');
  popUp.classList.add('move-down');
  popUp.style.pointerEvents = 'none';
  containerEl.classList.remove('blur-container');
  bodyEl.classList.remove('blur');
});
