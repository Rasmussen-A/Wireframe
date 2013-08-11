// models/resultModel

define(['underscore', 'backbone'],
  function(_, Backbone) {
    // Don't use a template here
    Result = Backbone.Model.extend({
      defaults: {
        diplay_name: '',
        lat: 0,
        lon: 0
      }
    })

    return { Result: Result }
  }
)
