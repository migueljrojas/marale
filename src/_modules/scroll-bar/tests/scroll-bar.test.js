'use strict';

var ScrollBar = require('../scroll-bar');

describe('ScrollBar View', function() {

  beforeEach(function() {
    this.scrollBar = new ScrollBar();
  });

  it('Should run a few assertions', function() {
    expect(this.scrollBar);
  });

});
