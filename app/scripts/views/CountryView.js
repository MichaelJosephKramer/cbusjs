/* exported CountryView */
/* global CountryDetailView */
/* global JST */
'use strict';

var CountryView = Backbone.View.extend({
  template: JST['app/scripts/templates/CountriesView.ejs'],

  initialize: function() {
    _.bindAll(this, 'render');
  },

  events: {
    'click .map-it': 'map'
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  map: function() {
    new CountryDetailView({model: this.model, el: '#map'}).render();
  }
});

