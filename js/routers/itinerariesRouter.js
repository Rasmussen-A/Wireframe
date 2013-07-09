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
        $('#filters').empty()

        $('#head-nav li').removeClass('active')
          $('#itineraries').addClass('active')
     }
    })

    return {Controller: Controller}
  }
)
