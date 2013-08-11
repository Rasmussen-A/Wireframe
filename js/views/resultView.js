// views/resultView

define(['jquery',
        'underscore',
        'backbone',
        'collections/resultsCollection',
        'text!templates/resultTemplate.html'],
  function($, _, Backbone, ResultsCollection, resultTemplate) {
    List = Backbone.View.extend({
      el: $('#filters'),
      template: _.template(resultTemplate),

      render: function(response) {
        this.$el.empty()
        this.collection = new ResultsCollection.Collection(response)
        this.$el.html(this.template({ results: this.collection.models }))
      }
    })

    return { List: List }
  }
)
