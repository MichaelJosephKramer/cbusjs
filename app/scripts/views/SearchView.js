var SearchView = Backbone.View.extend({
  template: _.template($('#search').html()),

  initialize: function() {
    this.collection = new Countries();
    this.collection.on('reset', this.render, this);
  },

  events: {
    'click .country-search-button': 'search'
  },

  render: function() {
    view = new CountriesView({collection: this.collection});
    view.render();
    return this;
  },

  search: function() {
    var query = this.$el.find('.country-name').val();
    this.collection.constructQuery(query);
    this.collection.fetch({reset: true});
  }
});
