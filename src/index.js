// console.log("Hello World");
// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const buildMarker = require('./marker');
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken =
  'pk.eyJ1IjoiY29kZW9mc2FuanUiLCJhIjoiY2pvZzhqa3Q2MDJqODNrbGJyY25hMjRzYyJ9.HD7aS5FYeGSXbe6eaBEBKA';

//   const iconURLs = {
//     hotels: "http://i.imgur.com/D9574Cu.png",
//     restaurants: "http://i.imgur.com/cqR6pUI.png",
//     activities: "http://i.imgur.com/WbMOfMl.png"
// };

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

buildMarker("activity", [-74.009, 40.705], map);
buildMarker("hotel", [-74.009, 40.805], map);
buildMarker("restaurant", [-74.009, 40.905], map);