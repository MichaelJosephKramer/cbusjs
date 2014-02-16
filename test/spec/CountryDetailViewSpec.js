/*global describe, Given, When, Then, CountryDetailView, Country, expect, jasmine */
/*jshint -W064 */
'use strict';

describe('CountryDetailView', function () {

  describe('initialize', function() {
    Given(function() {
      this.model = new Country({latlng: [1, 2]});
      this.subject = new CountryDetailView({model: this.model, el: '#map'});
    });

    describe('should exist', function () {
      Then(function() { expect(this.subject).not.toBeNull(); } );
    });

    describe('el should be set', function() {
      Then(function() { expect(this.subject.$el.selector).toEqual('#map'); });
    });
  });

  describe('render', function() {
    // Basic Setup
    Given(function() {
      this.model = new Country({latlng: [1, 2]});
      this.subject = new CountryDetailView({model: this.model, el: '#map'});
    });

    // A freakin' mess!
    Given(function() {
      this.roadmap = 'roadmap';
      this.mapSpy = jasmine.createSpy().andCallFake(
        function(){ return { name: 'Map' }; }
      );
      window.google = {
        maps: {
          Map: this.mapSpy,
          LatLng: function(){ return { name: 'LatLng' }; },
          MapTypeId: { ROADMAP: this.roadmap }
        }
      };
    });

    // What we expect to be passed to the Map constructor
    Given(function() {
      this.expectedOptions = {
        center: { name: 'LatLng' },
        zoom: 4,
        mapTypeId: this.roadmap
      };
    });
    When(function() { this.result = this.subject.render(); });
    Then(function() {
      expect(this.mapSpy)
      .toHaveBeenCalledWith(this.subject.el, this.expectedOptions);
    });
  });
});
