import Map from './images/Map.jpeg';

const loadLocations = () => {
  const locationsDisplay = document.createElement('div');
  locationsDisplay.innerHTML = 
    `<div>
      <h2>Locations</h2>
      <h3>We have restaurants in the following locations:</h3>
      <ul>
        <li>Water Tribe: Next to Yue's memorial/grave site</li>
        <li>Earth Kingdom: Ba Sing Se adjacent to Iroh's Jasmine Dragon</li>
        <li>Fire Nation: Ember Island West Side</li>
        <li>Southern Air Temple: Destroyed by Fire Nation</li>
      </ul>
    </div>
    <img src="${Map}" alt="Map">`

  locationsDisplay.classList.add('location');    
 
  return locationsDisplay;
}

export default loadLocations;