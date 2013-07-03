// app.js

define(['jquery',
       'underscore',
       'backbone',
       'routers/mapRouter',
       'routers/itinerariesRouter',
       'bootstrap'],
  function($, _, Backbone, mapRouter, itinerariesRouter) {
    var mapController = new mapRouter.Controller()
    var itinerariesController = new itinerariesRouter.Controller()
      Backbone.history.start()
  }
)
