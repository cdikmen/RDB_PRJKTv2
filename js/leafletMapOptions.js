//Leaflet Demo Recording

var map = L.map('map', {
    center: [45, -98],
    zoom: 4,
    minZoom: 3,
    maxZoom: 14,
    zoomControl: true
})

var classicMap = L.tileLayer('https://api.mapbox.com/styles/v1/lvbld/cjilqfdc42ebn2rpjthbvg6j1/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHZibGQiLCJhIjoiY2ppbHAzeTEzMDA1cTNrcXZ3aHFoOW81ciJ9.2v4-f5DAzE4sA2l96PsrYg',{
    attribution:"Mapbox",
    minZoom: 3,
    maxZoom: 14
}).addTo(map);