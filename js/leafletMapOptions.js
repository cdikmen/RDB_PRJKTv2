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
var marker = L.marker([45, -97]).addTo(map);



// CIRCLE
var circle = L.circle([44, -94],{
    color: 'red',
    fillColor: 'red',
    opacity: .75,
    radius:10000
}).addTo(map);

// POLYGON (TRIANGLE)
var polygon = L.polygon(
            [[44, -93],
            [43,-92],
            [41,-93]],{
    color: 'green',
    fillColor: 'green',
    opacity: 1
}).addTo(map);



marker.bindPopup("<h1>Hey check it out!</h1>")
circle.bindPopup("<p>NOAICE!</p>")
polygon.bindPopup("<em>yeah nice!</em>")

