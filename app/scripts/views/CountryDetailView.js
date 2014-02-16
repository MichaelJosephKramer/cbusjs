/* exported CountryDetailView */
/* global google */
'use strict';

/*
 * This looks easy enough to test, right?
 *
 */
var CountryDetailView = Backbone.View.extend({
  el: '#map',

  render: function() {
    // Grabbin' the properties
    var lat = this.model.get('latlng')[0],
        lng = this.model.get('latlng')[1];

    // Setting up the options for Google Maps
    var mapOptions = {

      // This is a constructor
      center: new google.maps.LatLng(lat, lng),

      zoom: 4,

      // this is a property
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // this is also a constructor
    new google.maps.Map(this.el, mapOptions);
  }
});
