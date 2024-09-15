//-------------------------------------------------------------   LeafletJS Map
//----- MAP TILES
let mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});
// ----- INITIAL MAP SETTINGS
let map = L.map("map", {  // "map" is the #div where to build the map in html
    layers: [mapTileLayers],  // variable from above
    center: [46.62, -33.134],  // central lat-lng once loaded
    zoom: 2  // smaller numbers = zoomOut // larger numbers = zoomIn
});

let mapOverlay = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}");
mapOverlay.bringToFront().addTo(map).setZIndex(9);

let myDublin = L.circle([53.349807, -6.260255], {
    color: "#000",
    opacity: 0.5,
    fillColor: "#fcba03",
    fillOpacity: 0.5,
    radius: 10000
}).addTo(map).bindPopup("Dublin Spire").bindTooltip("Dublin");

let myNewYork = L.circle([40.7850, -73.968285], {
    color: "#000",
    opacity: 0.5,
    fillColor: "#fcba03",
    fillOpacity: 0.5,
    radius: 10000
}).addTo(map).bindPopup("NewYork Spire").bindTooltip("NewYork");

var rioMarker = L.marker([-22.951993, -43.210439]).addTo(map).bindPopup("Christ the Redeemer").bindTooltip("Rio de Janeiro") /*.openPopup()*/;
// set custom icon per marker
var rioIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/TravelTimN/ci-ifd-lead/master/week4-leafletjs/example-project/img/rio.png", // image location
    iconSize: [50, 50], // image size (width: 50px; height: 50px;)
    iconAnchor: [25, 50] // sets location of marker respective to LatLng coordinates [X, Y]
});
rioMarker.setIcon(rioIcon); // append custom icon to marker


