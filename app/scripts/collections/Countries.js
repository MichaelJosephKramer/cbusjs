/* exported Countries */
/* global Country */
'use strict';

var Countries = Backbone.Collection.extend({
  model: Country,

  constructQuery: function(query) {
    this.url = 'http://restcountries.eu/rest/name/' + query;
  }
});
