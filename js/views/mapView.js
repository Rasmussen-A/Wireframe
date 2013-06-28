// views/mapView

define(['jquery',
        'underscore',
        'backbone',],
  function($, _, Backbone){
    var View = Backbone.View.extend({
      el: $("#map"),
      render: function() {
        $('#map').append('View is ready!')
      }
    })

    return { View: View }
  }
)
