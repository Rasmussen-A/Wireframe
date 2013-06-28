// router.js

define(['jquery',
        'underscore',
        'backbone',
        'views/mapView'],
  function($, _, Backbone, mapView) {

    var Controller = Backbone.Router.extend({
      routes: {
        "": "map",
        "/map": "map"
      },
      map: function() {
        var view = new mapView.View()
        view.render()
      }
    })

    return {Controller: Controller}
  }
)
