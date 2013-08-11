// views/filtersView

define(['jquery',
        'underscore',
        'backbone',
        'text!templates/selectorTemplate.html',
        'text!templates/listTemplate.html',
        'jqueryui'],
  function($, _, Backbone, selectorTemplate, listTemplate) {

    var Selector = Backbone.View.extend({
      el: $('#filters'),
      template: _.template(selectorTemplate),

      initialize: function() { this.$el.html(this.template()) },

      render: function() {
        // TODO - set min and max depends on current hour
        // Do ir throught model or something, not here
        $('#trackbar').slider({
          range: true,
          min: 0,
          max: 16,
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

    var List = Backbone.View.extend({
      el: $('#filters'),
      template: _.template(listTemplate),

      render: function() {
        // TODO - this wouldn't rendering. Why?
        this.$el.append(this.template())
      }
    })

    return {
      Selector: Selector,
      List: List
    }
  }
)
