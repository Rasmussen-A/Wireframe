// views/mapView

define(['jquery',
        'underscore',
        'backbone',
        'models/search',
        'lib/leafletMapProvider',
        'text!templates/searchTemplate.html'],
  function($, _, Backbone, SearchModel, leafletMapProvider, searchTemplate){
    var SearchBox = Backbone.View.extend({
      el: $('#searchbox'),
      template: _.template(searchTemplate),

      events: { "click button": "doSearch" },
      doSearch: function( event ) {
        var search = new SearchModel.SearchBox({
          query: this.$("input[name='search']").val()
        })
      },

      render: function() {
        this.$el.html(this.template())
      }
    })

    var Map = Backbone.View.extend({
      el: $('#map'),
      render: function(lat, lon, zoom) {
        var mainLayer = new leafletMapProvider.MainLayer(this.el, lat, lon, zoom)
      }
    })

    return {
      SearchBox: SearchBox,
      Map: Map
    }
  }
)
