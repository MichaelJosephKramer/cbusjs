/* exported SearchView */
/* global CountriesView */
/* global Countries */

'use strict';

var SearchView = Backbone.View.extend({

  initialize: function() {
    this.collection = new Countries();
    this.collection.on('reset', this.render, this);
  },

  events: {
    'click .country-search-button': 'search'
  },

  render: function() {
    var view = new CountriesView({collection: this.collection});
    view.render();
    return this;
  },

  search: function() {
    var query = this.$el.find('.country-name').val();
    this.collection.constructQuery(query);
    this.collection.fetch({reset: true});
  }

});
