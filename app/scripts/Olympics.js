/* exported Olympics */
'use strict';

/* Think it's poorly designed? Too bad. You're not allowed to change it. */
var ShippingService = {
  Sochi: {
    toIceRink: function() {
      throw 'You should not be here';
    },

    toSlidingPark: function() {
      throw 'You should not be here';
    },

    toAll: function() {
      throw 'You should not be here';
    }
  },

  Moscow: {
    toTheKremlin: function() {
      throw 'You should not be here';
    }
  }
};

/* Our consumer object */

var Olympics = function Olypmics() {};

Olympics.prototype.shipToSochi = function() {
  ShippingService.Sochi.toAll();
};

Olympics.prototype.shipToIceRink = function() {
  ShippingService.Sochi.toIceRink();
};

Olympics.prototype.shipEverywhere = function() {
  ShippingService.Sochi.toAll();
  ShippingService.Moscow.toTheKremlin();
};
