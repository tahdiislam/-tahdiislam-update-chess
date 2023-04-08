'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pgn = require('./Pgn.js');

var _Pgn2 = _interopRequireDefault(_Pgn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ascii = function Ascii() {
  _classCallCheck(this, Ascii);
};

Ascii.toFen = function (ascii) {
  var string = '';
  Ascii.promote(ascii).forEach(function (rank, i) {
    string += rank.join('').replace(/\s/g, '');
    string += '/';
  });
  string = string.slice(0, -1);
  var filtered = '';
  var strSplit = string.split('');
  var n = 1;
  strSplit.forEach(function (item, i) {
    if (strSplit[i] === '.') {
      if (strSplit[i + 1] === '.') {
        n++;
      } else {
        filtered += n;
        n = 1;
      }
    } else {
      filtered += strSplit[i];
      n = 1;
    }
  });

  return filtered;
};

Ascii.flip = function (color, ascii) {
  if (color == _Pgn2.default.symbol.BLACK) {
    var flipped = ascii.map(function (rank) {
      return new Array(rank.length);
    });
    var nFiles = ascii[0].length;
    var nRanks = ascii.length;
    ascii.forEach(function (rank, i) {
      rank.forEach(function (file, j) {
        var k = nRanks - 1 - i;
        var l = nFiles - (j + 1);
        flipped[i][j] = ascii[k][l];
      });
    });
    return flipped;
  }

  return ascii;
};

Ascii.toAscii = function (fen) {
  var arr = fen.split('/').map(function (rank) {
    var row = [];
    var digits = [].concat(_toConsumableArray(rank.matchAll(/[0-9]+/g))).map(function (item) {
      return [item.index, parseInt(item[0])];
    });
    var letters = [].concat(_toConsumableArray(rank.matchAll(/[a-zA-Z]{1}/g))).map(function (item) {
      return [item.index, item[0]];
    });
    [].concat(_toConsumableArray(digits), _toConsumableArray(letters)).sort(function (a, b) {
      return a[0] - b[0];
    }).forEach(function (item) {
      var elem = void 0;
      typeof item[1] === 'number' ? elem = Array(item[1]).fill(' . ') : elem = [' ' + item[1] + ' '];
      row = [].concat(_toConsumableArray(row), _toConsumableArray(elem));
    });
    return row;
  });

  return arr;
};

Ascii.fromIndexToAlgebraic = function (i, j, size) {
  var file = String.fromCharCode(97 + j);
  var rank = size.ranks - i;

  return file + rank;
};

Ascii.fromAlgebraicToIndex = function (sq, size) {
  var i = size.ranks - sq.charAt(1);
  var j = sq.charAt(0).charCodeAt(0) - 97;

  return [i, j];
};

Ascii.promote = function (ascii) {
  ascii[0] = ascii[0].map(function (item) {
    return item === ' P ' ? ' Q ' : item;
  });
  ascii[ascii.length - 1] = ascii[ascii.length - 1].map(function (item) {
    return item === ' p ' ? ' q ' : item;
  });

  return ascii;
};

Ascii.asciiDiff = function (a, b) {
  var sqs = [];
  a.forEach(function (rank, i) {
    rank.forEach(function (file, j) {
      if (a[i][j] !== b[i][j]) {
        sqs.push({
          from: a[i][j],
          to: b[i][j],
          sq: Ascii.fromIndexToAlgebraic(i, j, {
            files: a.length,
            ranks: rank.length
          })
        });
      }
    });
  });

  return sqs;
};

Ascii.sqDiff = function (a, b) {
  var diff = {
    files: Math.abs(a.charCodeAt(0) - b.charCodeAt(0)),
    ranks: Math.abs(a.charCodeAt(1) - b.charCodeAt(1))
  };

  return diff;
};

Ascii.xAxisSign = function (a, b, color, flip) {
  var sign = Math.sign(a.charCodeAt(0) - b.charCodeAt(0));
  if (color === _Pgn2.default.symbol.WHITE) {
    if (flip === _Pgn2.default.symbol.WHITE) {
      return -sign;
    } else {
      return sign;
    }
  } else {
    if (flip === _Pgn2.default.symbol.WHITE) {
      return -sign;
    } else {
      return sign;
    }
  }
};

Ascii.yAxisSign = function (a, b, color, flip) {
  var sign = Math.sign(a.charCodeAt(1) - b.charCodeAt(1));
  if (color === _Pgn2.default.symbol.WHITE) {
    if (flip === _Pgn2.default.symbol.WHITE) {
      return sign;
    } else {
      return -sign;
    }
  } else {
    if (flip === _Pgn2.default.symbol.WHITE) {
      return sign;
    } else {
      return -sign;
    }
  }
};

Ascii.longAlgebraicNotation = function (a, b) {
  var diff = Ascii.asciiDiff(a, b);
  var sorted = [];
  if (diff[0].to === ' . ') {
    sorted.push(diff[0].sq);
    sorted.push(diff[1].sq);
  } else {
    sorted.push(diff[1].sq);
    sorted.push(diff[0].sq);
  }

  return sorted;
};

exports.default = Ascii;