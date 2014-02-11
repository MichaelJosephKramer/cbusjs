var CountryView = Backbone.View.extend({
  template: _.template($('#country').html()),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  events: {
    'click .map-it': 'map'
  },

  render: function() {
    html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  map: function(e) {
    new CountryDetailView({model: this.model}).render();
  }
});

