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

      map: function(section) {
        // TODO - find some methods to exec that actions
        // each time when this router called
        $('#head-nav li').removeClass('active')
          $('#common-map').addClass('active')
        // TODO - also mapView brokes navigation
        //var view = new mapView.View()
        //  view.render(59.94, 30.30, 11)

        // Define a default action if no section given
        if (section === undefined) section = 'vechicular'
        var selector = new filtersView.Selector()
          selector.render()
        $('#type li').removeClass('active')
          $("#" + section).addClass('active')
      }
    })

    return {Controller: Controller}
  }
)
