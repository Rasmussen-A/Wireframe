// models/search

define(['underscore', 'backbone'],
  function(_, Backbone) {
    SearchBox = Backbone.Model.extend({
      server: "http://nominatim.openstreetmap.org/search/",
      params: "?format=json",
      query: "",

      initialize: function(model) {
        var request = model.server + model.query + model.params
        // TODO - get a JSON answer and load it in leaflet layer
      }
    })

    return { SearchBox: SearchBox }
  }
)
