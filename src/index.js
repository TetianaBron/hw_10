import itemTmp from './tmp.hbs';
import menuItems from './menu.json'

const menuContainer = document.querySelector('.js-menu');
const cardMarkup = createMenuMarkup(menuItems);

menuContainer.insertAdjacentHTML('beforeend', cardMarkup);

function createMenuMarkup(menuItems) {
    return itemTmp(menuItems);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
inputToggle.addEventListener('change', onInput);

function onInput(e) {
      if (e.target.checked) {
        body.classList.add(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', 'dark');
    }
    else {
        body.classList.add(Theme.LIGHT)
         body.classList.remove(Theme.DARK)
         localStorage.setItem('theme', 'light');
    }
}

populateInput();

function populateInput() {
    if (localStorage.getItem('theme') === 'dark') {
    body.classList.add(Theme.DARK);
    inputToggle.checked = true;
    } else {
    body.classList.add(Theme.LIGHT);
    inputToggle.checked = false;
    }
}