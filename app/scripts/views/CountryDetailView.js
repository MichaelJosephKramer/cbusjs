/* exported CountryDetailView */
/* global google */
'use strict';

var CountryDetailView = Backbone.View.extend({
  el: '#map',
  render: function() {
    var lat = this.model.get('latlng')[0],
    lng = this.model.get('latlng')[1],
    mapOptions = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    if (lat && lng) {
      new google.maps.Map(this.el, mapOptions);
    } else {
      this.$el.html('<h4>Map Unavailable<h4>');
    }
  }
});
