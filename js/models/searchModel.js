// models/search

define(['jquery', 'underscore', 'backbone'],
  function($, _, Backbone) {
    var SearchBox = Backbone.Model.extend({
      server: "http://nominatim.openstreetmap.org/search?q=",
<<<<<<< HEAD
      params: "&accept-language=ru&format=json",
=======
      params: "&format=json",
>>>>>>> LeaFlet

      find: function(query) {
        // TODO - query validation?
        var request = this.server + query + this.params

        // Not $.getJSON beacause it async and can't return result in variable
        var response = []
        $.ajax({
          url: request,
          async: false,
          dataType: 'json',
          success: function(json) { response = json }
        })

        return response
      }
    })

    return { SearchBox: SearchBox }
  }
)
