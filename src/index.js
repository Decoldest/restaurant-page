import Gif from './Restaurant.gif';
import Menu from './Menu.png';

import loadMenu from './menu.js';
import loadReservations from './reservations.js';
import loadLocations from './locations.js';

import './style.css'

const content = document.getElementById('content');

const loadHome = () => {
  const container = document.createElement('container');
  container.classList.add('home');

  const homeSection = document.createElement('section');
  homeSection.innerHTML = `<img src="${Gif}" alt="Restaurant">`;
  
  const textSection =  document.createElement('section');
  textSection.innerHTML = `
    <h2>Taste of Ba Sing Se</h2>
    <p>Flavours from all four nations.</p>
  `;
  
  const foodSection = document.createElement('section');
  foodSection.innerHTML = `<img src="${Menu}" alt="Menu">`;
  
  container.append(homeSection, textSection, foodSection);
  content.appendChild(container);
}

loadHome();

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
        case "Home":
          buttonFunction = loadHome;
          break;
        default:
          //load Homepage
      }
      content.appendChild(buttonFunction());
    });
  }
}