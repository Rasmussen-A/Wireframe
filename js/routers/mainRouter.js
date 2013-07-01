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
        "!/itineraries": "itineraries"
      },

      map: function() {
        $('#head-nav li').removeClass('active')
        $('#common-map').addClass('active')
        var view = new mapView.View()
          view.render(59.94, 30.30, 11)
        var selector = new filtersView.Selector()
          selector.render()
      },

      itineraries: function() {
        $('#head-nav li').removeClass('active')
        $('#itineraries').addClass('active')
      }
    })

    return {Controller: Controller}
  }
)
