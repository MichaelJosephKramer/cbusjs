var CountriesView = Backbone.View.extend({
  el: '#list-of-countries',

  render: function() {
    this.$el.empty();

    this.collection.each(function(m) {
      var view = new CountryView({model: m});
      this.$el.append(view.render().el);
    }, this);

    return this;
  }
});

