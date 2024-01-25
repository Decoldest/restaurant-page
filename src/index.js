import loadMenu from './menu.js';
import loadReservations from './reservations.js';
import loadLocations from './locations.js';
import loadHome from './home.js';

import './style.css'

const content = document.getElementById('content');

const navButtons = Array.from(document.querySelectorAll('button'));
addNavButtonListeners(navButtons);

content.appendChild(loadHome());

function addNavButtonListeners(navButtons) {
  for (let button of navButtons) {
    button.addEventListener('click', () => {
      content.innerHTML = "";
      let buttonFunction;

      switch (button.id) {
        case "Menu":
          buttonFunction = loadMenu;
          break;
        case "Reservations":
          buttonFunction = loadReservations;
          break;
        case "Locations":
          buttonFunction = loadLocations;
          break;
        case "Home":
          buttonFunction = loadHome;
          break;
        default:
          buttonFunction = loadHome;
      }
      content.appendChild(buttonFunction());
    });
  }
}