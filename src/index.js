// console.log("Hello World");
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZW9mc2FuanUiLCJhIjoiY2pvZzhqa3Q2MDJqODNrbGJyY25hMjRzYyJ9.HD7aS5FYeGSXbe6eaBEBKA';


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker = document.createElement('div');
marker.style.width = '32px';
marker.style.height = '39px';
// marker.style.zIndex = 1;
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
