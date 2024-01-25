import Restaurant from './images/Restaurant.gif';
import Menu from './images/Menu.png';

const loadHome = () => {
  const container = document.createElement('div');
  container.classList.add('home');

  const homeSection = document.createElement('section');
  homeSection.innerHTML = `<img src="${Restaurant}" alt="Restaurant">`;
  
  const textSection =  document.createElement('section');
  textSection.innerHTML = `
    <h1>Tastes of Ba Sing Se</h1>
    <p>Unock your inner avatar with flavours from all four nations.</p>
    <p>We combine seasonal ingredients to create our triple White Lotus rated dishes.</p>
  `;
  
  const foodSection = document.createElement('section');
  foodSection.innerHTML = `<img src="${Menu}" alt="Menu">`;
  
  container.append(homeSection, textSection, foodSection);

  return container;
}

export default loadHome;