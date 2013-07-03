// routers/selectorRouter

define(['jquery',
        'underscore',
        'backbone'],
  function($, _, Backbone){
    var Controller = Backbone.Router.extend({
      routes: {
        "!/itineraries": "itineraries",
        "!/itineraries/:section": "itineraries"
      },

      itineraries: function(section) {
        // TODO - find some methods to exec that actions
        // each time when this router called
        $('#filters').empty()
        $('#head-nav li').removeClass('active')
          $('#itineraries').addClass('active')
     }
    })

    return {Controller: Controller}
  }
)
