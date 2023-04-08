'use strict';

var _Opening = require('common/Opening.js');

var _Opening2 = _interopRequireDefault(_Opening);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('byEco()', function () {
  it('is 720 starting with A', function () {
    expect(_Opening2.default.byEco('A').length).toBe(720);
  });
  it('is 722 starting with B', function () {
    expect(_Opening2.default.byEco('B').length).toBe(722);
  });
  it('is 1168 starting with C', function () {
    expect(_Opening2.default.byEco('C').length).toBe(1168);
  });
  it('is 497 starting with D', function () {
    expect(_Opening2.default.byEco('D').length).toBe(497);
  });
  it('is 290 starting with D', function () {
    expect(_Opening2.default.byEco('E').length).toBe(290);
  });
});

describe('byMovetext()', function () {
  it('is 0 including foo', function () {
    expect(_Opening2.default.byMovetext('foo').length).toBe(0);
  });
  it('is 990 including 1.e4 e5', function () {
    expect(_Opening2.default.byMovetext('1.e4 e5').length).toBe(990);
  });
  it('is 651 including 1.e4 e5 2.Nf3', function () {
    expect(_Opening2.default.byMovetext('1.e4 e5 2.Nf3').length).toBe(651);
  });
  it('is 6 including 2.Nf3 e4', function () {
    expect(_Opening2.default.byMovetext('2.Nf3 e4').length).toBe(6);
  });
  it('is 2 including 2.d4 g6', function () {
    expect(_Opening2.default.byMovetext('2.d4 g6').length).toBe(2);
  });
});

describe('byName()', function () {
  it('is 381 including Sicilian', function () {
    expect(_Opening2.default.byName('Sicilian').length).toBe(381);
  });
  it('is 381 including sicilian', function () {
    expect(_Opening2.default.byName('sicilian').length).toBe(381);
  });
});