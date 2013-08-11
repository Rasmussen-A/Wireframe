// collections/searchCollection

define(['underscore', 'backbone', 'models/resultModel'],

  function(_, Backbone, ResultModel) {

    Collection = Backbone.Collection.extend({
      model: ResultModel.Result
    })

    return { Collection: Collection }

  }
)
