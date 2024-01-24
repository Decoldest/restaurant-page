import Gif from './Restaurant.gif';
import Menu from './Menu.png';

import loadMenu from './menu.js';
import loadReservations from './reservations.js';
import loadLocations from './locations.js';

import './style.css'

const content = document.getElementById('content');

const loadMain = () => {
  const container = document.createElement('container');
  container.classList.add('main');

  const mainSection = document.createElement('section');
  mainSection.innerHTML = `<img src="${Gif}" alt="Restaurant">`;
  
  const textSection =  document.createElement('section');
  textSection.innerHTML = `
    <h2>Taste of Ba Sing Se</h2>
    <p>Flavours from all four nations.</p>
  `;
  
  const foodSection = document.createElement('section');
  foodSection.innerHTML = `<img src="${Menu}" alt="Menu">`;
  
  container.append(mainSection, textSection, foodSection);
  content.appendChild(container);
}

loadMain();

const navButtons = Array.from(document.querySelectorAll('button'));
addNavButtonListeners(navButtons);

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
        case "Main":
          buttonFunction = loadMain;
          break;
        default:
          //load Homepage
      }
      content.appendChild(buttonFunction());
    });
  }
}