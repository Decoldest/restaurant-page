import Cabbages from './Cabbages.png';
import Tea from './Iroh-Tea.png';
import Prunes from './Sea-Prunes.png';
import Cactus from './Cactus.png';

const loadMenu = () => {
  const menuDisplay = document.createElement('div');
  menuDisplay.innerHTML = 
    `<img src="${Cabbages}" alt="Cabbages">
    <img src="${Tea}" alt="Uncle Iroh's Tea"
    <img src="${Prunes}" alt="Water Tribe Sea Prune">
    <img src="${Cactus}" alt="Cabbages"`;
} 

export default loadMenu;