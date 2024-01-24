

const loadReservations = () => {
  const reservationsDisplay = document.createElement('div');
  reservationsDisplay.innerHTML = 
    `<h2>Reservations</h2>
    <p>We are currently not taking any reservations in our Air Nomad location 
    as the Southern Air Temple was decimated from Fire Nation Attacks</p>
    <p>To book a reservation to one of our other locations, please 
      send a messenger hawk to 1000 White Lotus Lane.</p>`
  return reservationsDisplay;
}

export default loadReservations;