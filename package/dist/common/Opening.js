'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var openings = require('../assets/json/openings.json');

var Opening = function Opening() {
  _classCallCheck(this, Opening);
};

Opening.byEco = function (eco) {
  return openings.filter(function (item) {
    return item.eco.startsWith(eco);
  });
};

Opening.byMovetext = function (movetext) {
  var items = openings.filter(function (item) {
    return movetext.startsWith(item.movetext);
  });
  var longest = items.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  }, '');
  if (longest) {
    return [longest];
  }

  return null;
};

Opening.bySameMovetext = function (movetext) {
  var items = openings.filter(function (item) {
    return movetext === item.movetext;
  });
  if (items) {
    return items;
  }

  return null;
};

Opening.byName = function (name) {
  return openings.filter(function (item) {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
};

exports.default = Opening;