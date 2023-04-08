'use strict';

var _Piece = require('common/Piece.js');

var _Piece2 = _interopRequireDefault(_Piece);

var _Pgn = require('common/Pgn.js');

var _Pgn2 = _interopRequireDefault(_Pgn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('color()', function () {
  it('r is b', function () {
    expect(_Piece2.default.color(' r ')).toBe(_Pgn2.default.symbol.BLACK);
  });
  it('n is b', function () {
    expect(_Piece2.default.color(' n ')).toBe(_Pgn2.default.symbol.BLACK);
  });
  it('R is w', function () {
    expect(_Piece2.default.color(' R ')).toBe(_Pgn2.default.symbol.WHITE);
  });
  it('N is w', function () {
    expect(_Piece2.default.color(' N ')).toBe(_Pgn2.default.symbol.WHITE);
  });
});