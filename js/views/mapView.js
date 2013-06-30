// views/mapView

define(['jquery',
        'underscore',
        'backbone',
        'lib/leafletMapProvider'],
  function($, _, Backbone, leafletMapProvider){
    var View = Backbone.View.extend({
      el: $("#map"),
      render: function(lat, lon, zoom) {
        var mainLayer = new leafletMapProvider.MainLayer(this.el, lat, lon, zoom)
      }
    })

    return {View: View}
  }
)
