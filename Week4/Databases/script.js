//here is my database:https://docs.google.com/a/columbia.edu/spreadsheets/d/1Z-2quwpdBLBS3COD410SNBdnRp0YClCCzL52CMBz9uU/pubhtml

L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);
var geojson;
var origjson;

$(document).ready(function(){
    var URL = "1Z-2quwpdBLBS3COD410SNBdnRp0YClCCzL52CMBz9uU";
    Tabletop.init( { key: URL, callback: convertToGeoJSON, simpleSheet: true } )
});

function convertToGeoJSON(data) {
    console.log(data);
    origjson = data;
    places = []
    for(i = 0; i < data.length; i++) {
        console.log(data[i]);
        place = { type: 'Feature',             
        properties: {
                    title: data[i]["name"],
                    description: data[i]["description"],
                    'marker-color': data[i]["markercolor"],
                    'marker-size': 'large',
                    'marker-symbol': data[i]["markerstyle"],
                },
                geometry: {
                    type: 'Point',
                    coordinates: [data[i]["longitude"], data[i]["latitude"]]
                }
        }
        places.push(place);
    }
    geojson = { type: 'FeaturesCollection', features: places};
    setupMap(geojson);
}

function setupMap(geo) {
    myLayer.setGeoJSON(geo); // Adds all of the points to the map
    map.fitBounds(myLayer.getBounds());
}
