import Gif from './Restaurant.gif';
import Menu from './Menu.png';


const content = document.getElementById('content');
const restaurantImageSection = document.createElement('section');
const restaurantTextSection =  document.createElement('section');
const restaurantMenuSection = document.createElement('section');


const backgroundImage = new Image();
backgroundImage.src = Gif;

restaurantImageSection.appendChild(backgroundImage);

restaurantTextSection.innerHTML = `
  <h2>Taste of Ba Sing Se</h2>
  <p>Flavours from all four nations.</p>
`;

const menuImage = new Image();
menuImage.src = Menu;

content.appendChild(restaurantImageSection);
content.appendChild(restaurantTextSection);
content.appendChild(restaurantMenuSection);