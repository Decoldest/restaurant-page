import loadMenu from './menu.js';
import loadReservations from './reservations.js';
import loadLocations from './locations.js';
import loadHome from './home.js';

import './style.css'

const buttonIds = {
  Menu: loadMenu,
  Reservations: loadReservations,
  Locations: loadLocations,
  Home: loadHome
};

const content = document.getElementById('content');
const emblem = document.getElementById('emblem');

const navButtons = Array.from(document.querySelectorAll('button'));
addNavButtonListeners(navButtons);

content.appendChild(loadHome());
emblem.addEventListener('click', () => {
  content.innerHTML = "";
  content.appendChild(loadHome());
});

function addNavButtonListeners(buttons) {
  for (let button of buttons) {
    button.addEventListener('click', () => {
      content.innerHTML = "";
      const buttonFunction = buttonIds[button.id] || loadHome;
      content.appendChild(buttonFunction());
    });
  }
}