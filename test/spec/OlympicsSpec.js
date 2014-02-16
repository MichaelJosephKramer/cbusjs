/*global beforeEach, describe, it, ShippingService, Olympics, expect, jasmine, spyOn */
'use strict';

describe('Olympics, without straight-up spies', function() {
  var subject;

  beforeEach(function() {
    subject = new Olympics();
  });

  describe('shipToSochi', function() {
    it('should ship to Sochi', function() {
      spyOn(ShippingService.Sochi, 'toAll');
      subject.shipToSochi();
      expect(ShippingService.Sochi.toAll).toHaveBeenCalled();
    });
  });

  describe('ship to ice rink', function() {
    it('should ship to ice rink', function() {
      spyOn(ShippingService.Sochi, 'toIceRink');
      subject.shipToIceRink();
      expect(ShippingService.Sochi.toIceRink).toHaveBeenCalled();
    });
  });

  describe('shipEverywhere', function() {
    it('should ship everywhere', function() {
      spyOn(ShippingService.Sochi, 'toAll');
      spyOn(ShippingService.Moscow, 'toTheKremlin');
      subject.shipEverywhere();
      expect(ShippingService.Sochi.toAll).toHaveBeenCalled();
      expect(ShippingService.Moscow.toTheKremlin).toHaveBeenCalled();
    });
  });
});

describe('Olympics, with a hand-crafted object', function() {
  var subject;

  beforeEach(function() {
    subject = new Olympics();

    window.ShippingService = {
      Sochi: {
        toIceRink: jasmine.createSpy(),
        toAll: jasmine.createSpy()
      },
      Moscow: {
        toTheKremlin: jasmine.createSpy()
      }
    };
  });

  describe('shipToSochi', function() {
    it('should ship to Sochi', function() {
      subject.shipToSochi();
      expect(ShippingService.Sochi.toAll).toHaveBeenCalled();
    });
  });

  describe('ship to ice rink', function() {
    it('should ship to ice rink', function() {
      subject.shipToIceRink();
      expect(ShippingService.Sochi.toIceRink).toHaveBeenCalled();
    });
  });

  describe('shipEverywhere', function() {
    it('should ship everywhere', function() {
      subject.shipEverywhere();
      expect(ShippingService.Sochi.toAll).toHaveBeenCalled();
      expect(ShippingService.Moscow.toTheKremlin).toHaveBeenCalled();
    });
  });
});

describe('Olympics, with createSpyObj', function() {
  var subject;

  beforeEach(function() {
    subject = new Olympics();

    // Create spy object using Jasmine
    ShippingService.Sochi = jasmine.createSpyObj(
      'Sochi', // arbitrary name
      ['toIceRink', 'toAll'] // array of methods to spy on
    );

    // Create spy object by hand
    ShippingService.Moscow = { toTheKremlin: jasmine.createSpy() };
  });

  describe('shipToSochi', function() {
    it('should ship to Sochi', function() {
      subject.shipToSochi();
      expect(ShippingService.Sochi.toAll).toHaveBeenCalled();
    });
  });

  describe('ship to ice rink', function() {
    it('should ship to ice rink', function() {
      subject.shipToIceRink();
      expect(ShippingService.Sochi.toIceRink).toHaveBeenCalled();
    });
  });

  describe('shipEverywhere', function() {
    it('should ship everywhere', function() {
      subject.shipEverywhere();
      expect(ShippingService.Sochi.toAll).toHaveBeenCalled();
      expect(ShippingService.Moscow.toTheKremlin).toHaveBeenCalled();
    });
  });
});
