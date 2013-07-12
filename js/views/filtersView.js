// views/filtersView

define(['jquery',
        'underscore',
        'backbone',
        'text!templates/selectorTemplate.html',
        'jqueryui'],
  function($, _, Backbone, selectorTemplate) {

    var Selector = Backbone.View.extend({
      el: $('#filters'),
      template: _.template(selectorTemplate),

      render: function() {
        this.$el.html(this.template())
        // TODO - set min and max depends on current hour
        // Do ir throught model or something, not here
        $('#trackbar').slider({
          range: true,
          min: 0,
          max: 23,
          values: [0, 2],
          slide: function(event, ui) {
            $('#start-hour').html(ui.values[0])
            $('#end-hour').html(ui.values[1])
          }
        })
        $('#start-hour').html($('#trackbar').slider("values", 0))
        $('#end-hour').html($('#trackbar').slider("values", 1))
      }
    })

    return {Selector: Selector}
  }
)
