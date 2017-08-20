'use strict';

// Constructor
var Header = function() {
  this.name = 'header';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Header;
