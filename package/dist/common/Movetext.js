'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movetext = function Movetext() {
  _classCallCheck(this, Movetext);
};

Movetext.toRows = function (string) {
  var rows = [];
  if (string) {
    var arr = string.split(' ');
    arr.map(function (item, i) {
      if (i % 2 === 0) {
        rows.push({
          w: arr[i].split('.')[1],
          b: arr[i + 1] ? arr[i + 1] : ''
        });
      }
    });
  }

  return rows;
};

Movetext.substring = function (string, back) {
  var substring = '';
  var arr = string.split(' ');
  arr.forEach(function (item, i) {
    if (i <= arr.length - 1 + back) {
      substring += item + ' ';
    }
  });

  return substring.slice(0, -1);
};

exports.default = Movetext;