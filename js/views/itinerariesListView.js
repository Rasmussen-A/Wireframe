// views/itinerariesListView

define(['jquery',
		'underscore',
		'backbone',
		'text!templates/itinerariesList.html'],
  function($, _, Backbone, itinerariesList) {
  	Itineraries = Backbone.View.extend({
  		el: $('#filters'),
  		template: _.template(itinerariesList),
  		render: function() {
  			this.$el.html(this.template())
  		}
  	})
  }
)