var Views = {};

var MapView = Backbone.View.extend({
  template: _.template( $("#map_template").html(), {} ),
  el: $("#map"),
  initialize: function() { this.render(); },

  render: function() {
    $(this.el).html(this.template());
  }
});

Views = {
  map_view: new MapView()
}
