//Phoebe Hughes
//Spreadsheet map
var geojson;
var origjson;

$(document).ready(function(){
    var URL = "https://docs.google.com/spreadsheets/d/1QrsA0B7TtL9Up8ijcv-h_7vZqgoxg87nFtO3NX4MV30/pubhtml";
    Tabletop.init( { key: URL, callback: convertToGeoJSON, simpleSheet: true } )
});

function convertToGeoJSON(data, tabletop) {
    console.log(data);
    origjson = data;
    places = []
    for(i = 0; i < data.length; i++) {
        console.log(data[i]);
        place = { type: 'Feature',             
        properties: {
                    title: data[i]["name"],
                    description: data[i]["description"],
                    'marker-color': data[i]["hexcolor"],
                    'marker-size': 'large',
                    'marker-symbol': data[i]["markersymbol"],
                },
                geometry: {
                    type: 'Point',
                    coordinates: [data[i]["long"], data[i]["lat"]]
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


L.mapbox.accessToken = 'pk.eyJ1IjoicGxodWdoZXMiLCJhIjoiMGNkZjA2ODVhNmNiNzRjZmY3ZjcxODk4N2EwNjNiOTUifQ.MpmfM0SBk5p9qkDKACMjgg';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);
