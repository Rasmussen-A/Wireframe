// app.js

define(['jquery', 'underscore', 'backbone', 'routers/mainRouter', 'bootstrap'],
  function($, _, Backbone, mainRouter) {
    var controller = new mainRouter.Controller()
      Backbone.history.start()
  }
)
