'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pgn = require('./Pgn.js');

var _Pgn2 = _interopRequireDefault(_Pgn);

var _bArchbishop = require('../assets/img/pieces/default/bArchbishop.svg');

var _bArchbishop2 = _interopRequireDefault(_bArchbishop);

var _bBishop = require('../assets/img/pieces/default/bBishop.svg');

var _bBishop2 = _interopRequireDefault(_bBishop);

var _bChancellor = require('../assets/img/pieces/default/bChancellor.svg');

var _bChancellor2 = _interopRequireDefault(_bChancellor);

var _bKing = require('../assets/img/pieces/default/bKing.svg');

var _bKing2 = _interopRequireDefault(_bKing);

var _bKnight = require('../assets/img/pieces/default/bKnight.svg');

var _bKnight2 = _interopRequireDefault(_bKnight);

var _bPawn = require('../assets/img/pieces/default/bPawn.svg');

var _bPawn2 = _interopRequireDefault(_bPawn);

var _bQueen = require('../assets/img/pieces/default/bQueen.svg');

var _bQueen2 = _interopRequireDefault(_bQueen);

var _bRook = require('../assets/img/pieces/default/bRook.svg');

var _bRook2 = _interopRequireDefault(_bRook);

var _wArchbishop = require('../assets/img/pieces/default/wArchbishop.svg');

var _wArchbishop2 = _interopRequireDefault(_wArchbishop);

var _wBishop = require('../assets/img/pieces/default/wBishop.svg');

var _wBishop2 = _interopRequireDefault(_wBishop);

var _wChancellor = require('../assets/img/pieces/default/wChancellor.svg');

var _wChancellor2 = _interopRequireDefault(_wChancellor);

var _wKing = require('../assets/img/pieces/default/wKing.svg');

var _wKing2 = _interopRequireDefault(_wKing);

var _wKnight = require('../assets/img/pieces/default/wKnight.svg');

var _wKnight2 = _interopRequireDefault(_wKnight);

var _wPawn = require('../assets/img/pieces/default/wPawn.svg');

var _wPawn2 = _interopRequireDefault(_wPawn);

var _wQueen = require('../assets/img/pieces/default/wQueen.svg');

var _wQueen2 = _interopRequireDefault(_wQueen);

var _wRook = require('../assets/img/pieces/default/wRook.svg');

var _wRook2 = _interopRequireDefault(_wRook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function Piece() {
  _classCallCheck(this, Piece);
};

Piece.unicode = {
  ' . ': {
    char: ''
  },
  ' a ': {
    char: _bArchbishop2.default
  },
  ' b ': {
    char: _bBishop2.default
  },
  ' c ': {
    char: _bChancellor2.default
  },
  ' k ': {
    char: _bKing2.default
  },
  ' n ': {
    char: _bKnight2.default
  },
  ' p ': {
    char: _bPawn2.default
  },
  ' q ': {
    char: _bQueen2.default
  },
  ' r ': {
    char: _bRook2.default
  },
  ' A ': {
    char: _wArchbishop2.default
  },
  ' B ': {
    char: _wBishop2.default
  },
  ' C ': {
    char: _wChancellor2.default
  },
  ' K ': {
    char: _wKing2.default
  },
  ' N ': {
    char: _wKnight2.default
  },
  ' P ': {
    char: _wPawn2.default
  },
  ' Q ': {
    char: _wQueen2.default
  },
  ' R ': {
    char: _wRook2.default
  }
};

Piece.color = function (piece) {
  var pieces = {
    'w': [' A ', ' B ', ' C ', ' K ', ' N ', ' P ', ' Q ', ' R '],
    'b': [' a ', ' b ', ' c ', ' k ', ' n ', ' p ', ' q ', ' r ']
  };
  if (pieces[_Pgn2.default.symbol.WHITE].includes(piece)) {
    return _Pgn2.default.symbol.WHITE;
  } else if (pieces[_Pgn2.default.symbol.BLACK].includes(piece)) {
    return _Pgn2.default.symbol.BLACK;
  }

  return null;
};

exports.default = Piece;