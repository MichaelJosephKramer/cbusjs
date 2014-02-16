/*global describe, Given, Then, Country, expect */
/*jshint -W064 */
'use strict';

describe('Country', function () {
  describe('should exist', function () {
    Given(function() { this.subject = new Country(); });
    Then(function() { expect(this.subject).not.toBeNull(); } );
  });
});
