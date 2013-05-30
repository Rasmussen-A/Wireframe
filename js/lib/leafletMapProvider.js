var App;

App || (App = {});

App.MapProviders || (App.MapProviders = {});

App.MapProviders.Leaflet = function() {
  return {
    createMap: function(elementId) {
      this.map = new L.Map(elementId);
      this.addBaseMap();
      return map;
    },
    addBaseMap: function() {
      var cloudemadeAttribution, cloudemadeUrl, layer;
      map_url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      map_attribution = 'Map data &copy; <a href="openstreetmap.org">OpenStreetMap</a> contributors, <a href="creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="cloudmade.com">CloudMade</a>';
      layer = new L.TileLayer(map_url, {
        maxZoom: 15,
        attribution: map_attribution
      });
      return this.addLayerToMap(layer);
    },
    addLayerToMap: function(layer) {
      return this.map.addLayer(layer);
    },
  setViewForMap: function(options) {
      var point;
      point = new L.LatLng(options.latitude, options.longitude);
      return this.map.setView(point, options.zoomLevel);
  }
  };
};
