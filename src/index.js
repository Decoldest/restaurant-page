import Gif from './Restaurant.gif';
import Menu from './Menu.png';

import loadMenu from './menu.js';

const content = document.getElementById('content');

const restaurantImageSection = document.createElement('section');
restaurantImageSection.innerHTML = `<img src="${Gif}" alt="Restaurant">`;

const restaurantTextSection =  document.createElement('section');
restaurantTextSection.innerHTML = `
  <h2>Taste of Ba Sing Se</h2>
  <p>Flavours from all four nations.</p>
`;

const restaurantMenuSection = document.createElement('section');
restaurantMenuSection.innerHTML = `<img src="${Menu}" alt="Menu">`;

content.appendChild(restaurantImageSection);
content.appendChild(restaurantTextSection);
content.appendChild(restaurantMenuSection);

