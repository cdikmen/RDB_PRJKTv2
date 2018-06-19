//Leaflet Map Options

var map = L.map('map', {
    center: [45, -98],
    zoom: 4,
    minZoom: 3,
    maxZoom: 14,
    zoomControl: true
})

var classicMap = L.tileLayer('https://api.mapbox.com/styles/v1/lvbld/cjilq1v341s472smwt8cg32dl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHZibGQiLCJhIjoiY2ppbHAzeTEzMDA1cTNrcXZ3aHFoOW81ciJ9.2v4-f5DAzE4sA2l96PsrYg',{
    attribution:"Mapbox",
    minZoom: 3,
    maxZoom: 14,
    detectRetina: true
}).addTo(map);

// PINS
var place = L.marker([45, -97]).addTo(map);

place.bindPopup("<h1>Hey check it out!</h1>");


// CIRCLE
var zone = L.circle([44, -94],{
    color: 'red',
    fillColor: 'red',
    opacity: .75,
    radius:10000
}).addTo(map);

zone.bindPopup("<p>NOAICE!</p>");

// POLYGON (TRIANGLE)
var area = L.polygon([[44, -93],[43,-92],[41,-93]],{
    color: 'green',
    fillColor: 'green',
    opacity: 1
}).addTo(map);

area.bindPopup("<em>yeah nice!</em>");