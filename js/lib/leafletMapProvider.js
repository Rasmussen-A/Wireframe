// lib/leafletMapProvider

define(['jquery', 'leaflet'],
  function($, L) {
    var el = $('#map')

    var MainLayer = function(element, latitude, longitude, zoom) {
      // create a map in the "map" div, set the view to a given place and zoom
      var map = L.map(element).setView([latitude, longitude], zoom);

      // add an OpenStreetMap tile layer
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }

    return {
      MainLayer: MainLayer,
      el: el
    }
  }
)
