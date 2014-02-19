/*global describe, Given, When, Then, spyOn, expect, SearchView */
/*jshint -W064 */
'use strict';

describe('CountryDetailView', function () {
  Given(function() { this.subject = new SearchView(); });
  Given(function() { spyOn(this.subject.collection, 'fetch'); });

  /* note: in Backbone $el, is jQuery object */

  describe('search, jquery', function() {
    Given(function() { this.findStub = { val: function() { return 1; } }; });
    Given(function() { spyOn($.fn, 'find').andReturn(this.findStub); });
    When(function() { this.subject.search(); });
    Then(function() { expect($.fn.find).toHaveBeenCalled(); } );
  });

  describe('search, typical', function() {
    Given(function() { this.findStub = { val: function() { return 1; } }; });
    Given(function() { spyOn(this.subject.$el, 'find').andReturn(this.findStub); });
    When(function() { this.subject.search(); });
    Then(function() { expect(this.subject.$el.find).toHaveBeenCalled(); } );
  });

});
