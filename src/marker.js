
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const buildMarker = (typeOfMarker, LngLat, map) => {
  const activity = document.createElement('div');
  activity.style.width = '32px';
  activity.style.height = '39px';
  activity.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  
  const hotel = document.createElement('div');
  hotel.style.width = '32px';
  hotel.style.height = '39px';
  hotel.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  
  const restaurant = document.createElement('div');
  restaurant.style.width = '32px';
  restaurant.style.height = '39px';
  restaurant.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';

  if (typeOfMarker === 'activity') {
    typeOfMarker = activity;
  } else if (typeOfMarker === 'hotel') {
    typeOfMarker = hotel;
  } else {
    typeOfMarker = restaurant;
  }

  new mapboxgl.Marker(typeOfMarker).setLngLat(LngLat).addTo(map);
};

module.exports = buildMarker;