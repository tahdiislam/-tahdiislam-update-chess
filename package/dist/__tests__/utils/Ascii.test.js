'use strict';

var _Ascii = require('common/Ascii.js');

var _Ascii2 = _interopRequireDefault(_Ascii);

var _Pgn = require('common/Pgn.js');

var _Pgn2 = _interopRequireDefault(_Pgn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('toFen()', function () {
  it('is a classical starting position', function () {
    var board = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    expect(_Ascii2.default.toFen(board)).toBe('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  });
  it('is a capablanca80 starting position', function () {
    var board = [[' r ', ' n ', ' a ', ' b ', ' q ', ' k ', ' b ', ' c ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' R ', ' N ', ' A ', ' B ', ' Q ', ' K ', ' B ', ' C ', ' N ', ' R ']];
    expect(_Ascii2.default.toFen(board)).toBe('rnabqkbcnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNABQKBCNR');
  });
  it('is a capablanca100 starting position', function () {
    var board = [[' r ', ' n ', ' a ', ' b ', ' q ', ' k ', ' b ', ' c ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' R ', ' N ', ' A ', ' B ', ' Q ', ' K ', ' B ', ' C ', ' N ', ' R ']];
    expect(_Ascii2.default.toFen(board)).toBe('rnabqkbcnr/pppppppppp/10/10/10/10/10/10/PPPPPPPPPP/RNABQKBCNR');
  });
  it('is pseudo-castling short', function () {
    var board = [[' r ', ' . ', ' b ', ' q ', ' k ', ' . ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' b ', ' p ', ' p ', ' p '], [' . ', ' . ', ' n ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' B ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' . ', ' . ', ' K ', ' R ']];
    expect(_Ascii2.default.toFen(board)).toBe('r1bqk1nr/ppppbppp/2n5/4p3/4P3/5N2/PPPPBPPP/RNBQ2KR');
  });
  it('is castling short', function () {
    var board = [[' r ', ' . ', ' b ', ' q ', ' k ', ' . ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' b ', ' p ', ' p ', ' p '], [' . ', ' . ', ' n ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' B ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' . ', ' R ', ' K ', ' . ']];
    expect(_Ascii2.default.toFen(board)).toBe('r1bqk1nr/ppppbppp/2n5/4p3/4P3/5N2/PPPPBPPP/RNBQ1RK1');
  });
  it('is r1bqkbnR/pppp1p2/2n5/4p1p1/2B1P3/5N2/PPPP1PP1/RNBQK3', function () {
    var board = [[' r ', ' . ', ' b ', ' q ', ' k ', ' b ', ' n ', ' R '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' . ', ' . '], [' . ', ' . ', ' n ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' p ', ' . '], [' . ', ' . ', ' B ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' . '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' . ', ' . ', ' . ']];
    expect(_Ascii2.default.toFen(board)).toBe('r1bqkbnR/pppp1p2/2n5/4p1p1/2B1P3/5N2/PPPP1PP1/RNBQK3');
  });
});

describe('flip()', function () {
  it('is a starting position for White', function () {
    var board = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var expected = board;
    expect(_Ascii2.default.flip(_Pgn2.default.symbol.WHITE, board)).toEqual(expected);
  });
  it('is a capablanca80 starting position for White', function () {
    var board = [[' r ', ' n ', ' a ', ' b ', ' q ', ' k ', ' b ', ' c ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' R ', ' N ', ' A ', ' B ', ' Q ', ' K ', ' B ', ' C ', ' N ', ' R ']];
    var expected = board;
    expect(_Ascii2.default.flip(_Pgn2.default.symbol.WHITE, board)).toEqual(expected);
  });
  it('is a starting position for Black', function () {
    var board = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var expected = [[' R ', ' N ', ' B ', ' K ', ' Q ', ' B ', ' N ', ' R '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' r ', ' n ', ' b ', ' k ', ' q ', ' b ', ' n ', ' r ']];
    expect(_Ascii2.default.flip(_Pgn2.default.symbol.BLACK, board)).toEqual(expected);
  });
  it('is a capablanca80 starting position for Black', function () {
    var board = [[' r ', ' n ', ' a ', ' b ', ' q ', ' k ', ' b ', ' c ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' R ', ' N ', ' A ', ' B ', ' Q ', ' K ', ' B ', ' C ', ' N ', ' R ']];
    var expected = [[' R ', ' N ', ' C ', ' B ', ' K ', ' Q ', ' B ', ' A ', ' N ', ' R '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' r ', ' n ', ' c ', ' b ', ' k ', ' q ', ' b ', ' a ', ' n ', ' r ']];
    expect(_Ascii2.default.flip(_Pgn2.default.symbol.BLACK, board)).toEqual(expected);
  });
  it('is the Sicilian Defense for White', function () {
    var board = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' . ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' p ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var expected = board;
    expect(_Ascii2.default.flip(_Pgn2.default.symbol.WHITE, board)).toEqual(expected);
  });
  it('is the Sicilian Defense for Black', function () {
    var board = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' . ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' p ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var expected = [[' R ', ' N ', ' B ', ' K ', ' Q ', ' B ', ' N ', ' R '], [' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P ', ' P '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' p ', ' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p '], [' r ', ' n ', ' b ', ' k ', ' q ', ' b ', ' n ', ' r ']];
    expect(_Ascii2.default.flip(_Pgn2.default.symbol.BLACK, board)).toEqual(expected);
  });
});

describe('toAscii()', function () {
  it('is a starting position', function () {
    var fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
    var expected = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    expect(_Ascii2.default.toAscii(fen)).toEqual(expected);
  });
  it('is 1.e4 e5', function () {
    var fen = 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR';
    var expected = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    expect(_Ascii2.default.toAscii(fen)).toEqual(expected);
  });
  it('is the Benko Gambit', function () {
    var fen = 'rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N3P1/PP3P1P/R1BQ1KNR';
    var expected = [[' r ', ' n ', ' . ', ' q ', ' k ', ' b ', ' . ', ' r '], [' . ', ' . ', ' . ', ' . ', ' p ', ' p ', ' . ', ' p '], [' . ', ' . ', ' . ', ' p ', ' . ', ' n ', ' p ', ' . '], [' . ', ' . ', ' p ', ' P ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' N ', ' . ', ' . ', ' . ', ' P ', ' . '], [' P ', ' P ', ' . ', ' . ', ' . ', ' P ', ' . ', ' P '], [' R ', ' . ', ' B ', ' Q ', ' . ', ' K ', ' N ', ' R ']];
    expect(_Ascii2.default.toAscii(fen)).toEqual(expected);
  });
  it('is the Closed Sicilian', function () {
    var fen = 'r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR';
    var expected = [[' r ', ' . ', ' b ', ' q ', ' k ', ' . ', ' n ', ' r '], [' p ', ' p ', ' . ', ' . ', ' p ', ' p ', ' b ', ' p '], [' . ', ' . ', ' n ', ' p ', ' . ', ' . ', ' p ', ' . '], [' . ', ' . ', ' p ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' N ', ' P ', ' . ', ' . ', ' P ', ' . '], [' P ', ' P ', ' P ', ' . ', ' . ', ' P ', ' B ', ' P '], [' R ', ' . ', ' B ', ' Q ', ' K ', ' . ', ' N ', ' R ']];
    expect(_Ascii2.default.toAscii(fen)).toEqual(expected);
  });
});

describe('fromIndexToAlgebraic()', function () {
  var size = {
    files: 8,
    ranks: 8
  };
  it('is a8', function () {
    expect(_Ascii2.default.fromIndexToAlgebraic(0, 0, size)).toEqual('a8');
  });
  it('is a7', function () {
    expect(_Ascii2.default.fromIndexToAlgebraic(1, 0, size)).toEqual('a7');
  });
  it('is h2', function () {
    expect(_Ascii2.default.fromIndexToAlgebraic(6, 7, size)).toEqual('h2');
  });
  it('is h1', function () {
    expect(_Ascii2.default.fromIndexToAlgebraic(7, 7, size)).toEqual('h1');
  });
});

describe('fromAlgebraicToIndex()', function () {
  var size = {
    files: 8,
    ranks: 8
  };
  it('is 0, 0', function () {
    expect(_Ascii2.default.fromAlgebraicToIndex('a8', size)).toEqual([0, 0]);
  });
  it('is 1, 0', function () {
    expect(_Ascii2.default.fromAlgebraicToIndex('a7', size)).toEqual([1, 0]);
  });
  it('is 6, 7', function () {
    expect(_Ascii2.default.fromAlgebraicToIndex('h2', size)).toEqual([6, 7]);
  });
  it('is 7, 7', function () {
    expect(_Ascii2.default.fromAlgebraicToIndex('h1', size)).toEqual([7, 7]);
  });
});

describe('promote()', function () {
  it('a8', function () {
    var board = [[' P ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' . ', ' p ', ' p ', ' p ', ' p ', ' p ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' P ', ' P ', ' P ', ' P ', ' P ', ' p ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var expected = [[' Q ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' . ', ' p ', ' p ', ' p ', ' p ', ' p ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' P ', ' P ', ' P ', ' P ', ' P ', ' p ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    expect(_Ascii2.default.promote(board)).toEqual(expected);
  });
});

describe('asciiDiff()', function () {
  var size = {
    files: 8,
    ranks: 8
  };
  it('is e5', function () {
    var a = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var b = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var expected = [{
      from: ' p ',
      to: ' . ',
      sq: 'e7'
    }, {
      from: ' . ',
      to: ' p ',
      sq: 'e5'
    }];
    expect(_Ascii2.default.asciiDiff(a, b, size)).toEqual(expected);
  });
  it('is Nf3', function () {
    var a = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var b = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var expected = [{
      from: ' . ',
      to: ' N ',
      sq: 'f3'
    }, {
      from: ' N ',
      to: ' . ',
      sq: 'g1'
    }];
    expect(_Ascii2.default.asciiDiff(a, b, size)).toEqual(expected);
  });
  it('is d5', function () {
    var a = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var b = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' . ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' p ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var expected = [{
      from: ' p ',
      to: ' . ',
      sq: 'd7'
    }, {
      from: ' . ',
      to: ' p ',
      sq: 'd5'
    }];
    expect(_Ascii2.default.asciiDiff(a, b, size)).toEqual(expected);
  });
  it('is exd5', function () {
    var a = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' . ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' p ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var b = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' . ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' P ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var expected = [{
      from: ' p ',
      to: ' P ',
      sq: 'd5'
    }, {
      from: ' P ',
      to: ' . ',
      sq: 'e4'
    }];
    expect(_Ascii2.default.asciiDiff(a, b, size)).toEqual(expected);
  });
});

describe('sqDiff()', function () {
  it('is files: 0, ranks: 0', function () {
    var a = 'a1';
    var b = 'a1';
    var expected = {
      files: 0,
      ranks: 0
    };
    expect(_Ascii2.default.sqDiff(a, b)).toEqual(expected);
  });
  it('is files: 0, ranks: 1', function () {
    var a = 'a4';
    var b = 'a3';
    var expected = {
      files: 0,
      ranks: 1
    };
    expect(_Ascii2.default.sqDiff(a, b)).toEqual(expected);
  });
  it('is files: 0, ranks: 1', function () {
    var a = 'a4';
    var b = 'a5';
    var expected = {
      files: 0,
      ranks: 1
    };
    expect(_Ascii2.default.sqDiff(a, b)).toEqual(expected);
  });
  it('is files: 2, ranks: 2', function () {
    var a = 'c1';
    var b = 'h5';
    var expected = {
      files: 5,
      ranks: 4
    };
    expect(_Ascii2.default.sqDiff(a, b)).toEqual(expected);
  });
});

describe('longAlgebraicNotation()', function () {
  var size = {
    files: 8,
    ranks: 8
  };
  it('is e7e5', function () {
    var a = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var b = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var expected = ['e7', 'e5'];
    expect(_Ascii2.default.longAlgebraicNotation(a, b, size)).toEqual(expected);
  });
  it('is g1f3', function () {
    var a = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ']];
    var b = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var expected = ['g1', 'f3'];
    expect(_Ascii2.default.longAlgebraicNotation(a, b, size)).toEqual(expected);
  });
  it('is d7d5', function () {
    var a = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var b = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' . ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' p ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var expected = ['d7', 'd5'];
    expect(_Ascii2.default.longAlgebraicNotation(a, b, size)).toEqual(expected);
  });
  it('is e4d5', function () {
    var a = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' . ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' p ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var b = [[' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r '], [' p ', ' p ', ' p ', ' . ', ' . ', ' p ', ' p ', ' p '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' P ', ' p ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '], [' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . '], [' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P '], [' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' . ', ' R ']];
    var expected = ['e4', 'd5'];
    expect(_Ascii2.default.longAlgebraicNotation(a, b, size)).toEqual(expected);
  });
});