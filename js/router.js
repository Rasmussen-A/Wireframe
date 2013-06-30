// router.js

define(['jquery',
        'underscore',
        'backbone',
        'views/mapView'],
  function($, _, Backbone, mapView) {

    var Controller = Backbone.Router.extend({
      routes: {
        "": "map",
        "!/map": "map"
      },
      map: function() {
        var view = new mapView.View()
        view.render(59.94, 30.30, 11)
      }
    })

    return {Controller: Controller}
  }
)
