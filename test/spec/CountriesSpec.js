/*global describe, Given, When, Then, Countries, Country, expect */
/*jshint -W064 */
'use strict';

describe('Countries', function () {
  Given(function() { this.subject = new Countries(); });

  describe('should exist', function () {
    Then(function() { expect(this.subject).not.toBeNull(); } );
  });

  describe('model', function() {
    Then(function() { expect(this.subject.model).toBe(Country); } );
  });

  describe('constructQuery', function() {
    Given(function() { this.expected = 'http://restcountries.eu/rest/name/test'; });
    When(function() { this.subject.constructQuery('test'); });
    Then(function() { expect(this.subject.url).toEqual(this.expected); } );
  });

});
