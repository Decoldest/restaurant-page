import Cabbages from './Cabbages.png';
import Tea from './Iroh-Tea.png';
import Prunes from './Sea-Prunes.jpg';
import Cactus from './Cactus.png';
import Fire from './Fire-Flakes.jpeg';
import Custard from './Custard.jpeg';

const menuItems = [
  { src: Cabbages, alt: 'Cabbages' },
  { src: Tea, alt: 'Uncle Iroh\'s Tea' },
  { src: Prunes, alt: 'Water Tribe Sea Prune' },
  { src: Cactus, alt: 'Cactus' },
  { src: Fire, alt: 'Fire Flakes' },
  { src: Custard, alt: 'Custard' }
];

const loadMenu = () => {
  const menuDisplay = document.createElement('div');

  menuItems.forEach(item => {
    const imgElement = new Image();
    imgElement.src = item.src;
    imgElement.alt = item.alt;
    let imageContainer = document.createElement('div').appendChild(imgElement);
    menuDisplay.appendChild(imageContainer);
  });
    menuDisplay.classList.add('menu');
    
    return menuDisplay;
} 

export default loadMenu;