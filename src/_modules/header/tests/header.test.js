'use strict';

var Header = require('../header');

describe('Header View', function() {

  beforeEach(function() {
    this.header = new Header();
  });

  it('Should run a few assertions', function() {
    expect(this.header);
  });

});
