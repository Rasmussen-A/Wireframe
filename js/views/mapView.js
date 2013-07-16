// views/mapView

define(['jquery',
        'underscore',
        'backbone',
        'lib/leafletMapProvider',
        'text!templates/searchTemplate.html'],
  function($, _, Backbone, leafletMapProvider, searchTemplate){
    var SearchBox = Backbone.View.extend({
      el: $('#map-wrapper'),
      template: _.template(searchTemplate),
      render: function() {
        this.$el.html(this.template())
      }
    })

    var Map = Backbone.View.extend({
      render: function(lat, lon, zoom) {
        var mainLayer = new leafletMapProvider.MainLayer('map', lat, lon, zoom)
      }
    })

    return {
      SearchBox: SearchBox,
      Map: Map
    }
  }
)
