// collections/searchCollection

define(['underscore',
        'backbone',
        'models/searchModel'],
  function(_, Backbone, SearchModel) {

    var Collection = Backbone.Collection.extend({
      model: SearchModel.SearchBox,

      initialize: function() {
        this.find()
      }
    })

    return { Collection: Collection }

  }
)
