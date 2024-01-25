import Cabbages from './images/Cabbages.png';
import Tea from './images/Iroh-Tea.png';
import Prunes from './images/Sea-Prunes.jpg';
import Cactus from './images/Cactus.png';
import Fire from './images/Fire-Flakes.jpeg';
import Custard from './images/Custard.jpeg';

const menuItems = [
  { src: Cabbages, alt: 'Cabbages', description: 'My cabbages.', price: 12 },
  { src: Tea, alt: 'Uncle Iroh\'s Tea', description: 'Hot leaf juice.',price: 4 },
  { src: Prunes, alt: 'Water Tribe Sea Prune', description: 'Best served on the way back up.', price: 24},
  { src: Cactus, alt: 'Cactus', description: 'Quench ya.', price: 10 },
  { src: Fire, alt: 'Fire Flakes', description: 'Why is it spicy.', price: 6 },
  { src: Custard, alt: 'Custard', description: 'Aang\'s favourite.', price: 22 }
];

const loadMenu = () => {
  const menuDisplay = document.createElement('div');

  menuItems.forEach(item => { 
    menuDisplay.appendChild(setMenuItem(item));
  });
  menuDisplay.classList.add('menu');
    
  return menuDisplay;
} 

function setMenuItem (item) {

  const imgElement = new Image();
  imgElement.src = item.src;
  imgElement.alt = item.alt;

  const menuName = document.createElement('h2');
  menuName.textContent = item.alt;
  
  const description = document.createElement('p');
  description.textContent = item.description;

  const price = document.createElement('h3');
  price.textContent = item.price;

  let imageContainer = document.createElement('div')
  imageContainer.append(imgElement, menuName, description, price);
  return imageContainer;
}

export default loadMenu;