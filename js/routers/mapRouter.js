// router.js

define(['jquery',
        'underscore',
        'backbone',
        'views/mapView',
        'views/filtersView'],
  function($, _, Backbone, mapView, filtersView) {

    var Controller = Backbone.Router.extend({
      routes: {
        "": "map",
        "!/map": "map",
        "!/map/:section": "map"
      },

      initialize: function() {
        //var view = new mapView.View()
        //  view.render(59.94, 30.30, 11)
      },

      map: function(section) {
        $('#head-nav li').removeClass('active')
          $('#common-map').addClass('active')

        // Define a default action if no section given
        if (section === undefined) section = 'vechicular'

        // Render v/p/c selector in filters block
        var selector = new filtersView.Selector()
          selector.render()

        $('#type li').removeClass('active')
          $("#" + section).addClass('active')
      }
    })

    return {Controller: Controller}
  }
)
