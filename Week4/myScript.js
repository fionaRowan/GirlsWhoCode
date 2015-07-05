L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',


    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'Correctional Service Department',
            description: 'The plaintiff is against the "sharing the same cell" idea!',
            'marker-color': '#f9d62e',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -73.937, 40.836]
        }
    },


// find more symbols here: https://www.mapbox.com/maki/
// marker colors, anyone? http://www.color-hex.com/color/ff69b4
// find coordinates of cities here: http://www.gps-coordinates.net/
    {
        type: 'Feature',
        properties: {
            title: 'Nyc Department of Corrections',
            description: 'Separate cells for sure, here!',
            'marker-color': '#FF69B4',
            'marker-size': 'large',
            'marker-symbol':'rocket',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.882, 40.804]
        }
    },

    {
        type: 'Feature',
        properties: {
            title: 'MDC BROOKLYN',
            description: 'DEFINITELY two cells... maybe three!',
            'marker-color': '#f9d62e',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.004, 40.660]
        }
    },

    {
        type: 'Feature',
        properties: {
            title: 'Rikers Island Facilities',
            description: 'Plaintiff says they only have room for one of us :(',
            'marker-color': '#eae374',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.886, 40.793]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Bayview Correctional Facility',
            description: "we might be able to see each other in the cafeteria here!",
            'marker-color': '#BE9A6B',
            'marker-size': 'large',
            'marker-symbol': 'cafe',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.007, 40.746]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Affordable Bail Bonds New York',
            description: 'Nope!',
            'marker-color': '#7ec9b1',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.944, 40.678]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: 'Bergen County Jail',
            description: 'staggered release dates!! :/ ',
            'marker-color': '#fc913a',
            'marker-size': 'large',
            'marker-symbol': 'star',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.039, 40.873]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Elizabeth Detention Center',
            description: 'We would be in different BUILDINGS D:',
            'marker-color': '#ff4e50',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.189, 40.66]
        }
    },


    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});
