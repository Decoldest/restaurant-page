

const loadLocations = () => {
  const locationsDisplay = document.createElement('div');
  locationsDisplay.innerHTML = 
    `<h2>Locations</h2>
    <p>We have restaurants in the following locations</p>
    <ul>
      <li>Water Tribe: Next to Yue's memorial/grave site</li>
      <li>Earth Kingdom: Ba Sing Se adjacent to Iroh's Jasmine Dragon</li>
      <li>Fire Nation: Ember Island West Side</li>
      <li>Southern Air Temple: Destroyed by Fire Nation</li>
    </ul>`
  return locationsDisplay;
}

export default loadLocations;