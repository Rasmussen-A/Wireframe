// views/mapView

define(['jquery',
        'underscore',
        'backbone',
        'models/searchModel',
        'lib/leafletMapProvider',
        'text!templates/searchTemplate.html'],
  function($, _, Backbone, SearchModel, leafletMapProvider, searchTemplate){
    var SearchBox = Backbone.View.extend({
      el: $('#searchbox'),
      template: _.template(searchTemplate),

      events: { "click button": "doSearch", "keypress input": "searchOnEnter" },

      doSearch: function(event) {
        //this.$("input[name='search']").val()
        this.model = new SearchModel.SearchBox()
        var response = this.model.find(this.$('input').val())
        alert(response.length)
        // Clear filters div
        // Render results template inside it
        // Smth like $().html(_.template(resultsTemplate, results: this.model.find()))
        // Or even better to create standalone view for this, yeah
      },

      searchOnEnter: function(e) {
        // 13 is keyCode of Enter button
        if (e.keyCode != 13) return;
          this.doSearch(e)
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
