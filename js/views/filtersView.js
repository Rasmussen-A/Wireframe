// views/filtersView

define(['jquery',
        'underscore',
        'backbone',
        'text!templates/selectorTemplate.html'],
  function($, _, Backbone, selectorTemplate) {
    var Selector = Backbone.View.extend({
      el: $('#filters'),
      template: _.template(selectorTemplate),
      render: function() {
        this.$el.html(this.template())
      }
    })

    return {Selector: Selector}
  }
)
