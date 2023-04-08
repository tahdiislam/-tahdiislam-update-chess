'use strict';

var _Movetext = require('common/Movetext.js');

var _Movetext2 = _interopRequireDefault(_Movetext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('toRows()', function () {
  it('is 1.e4', function () {
    var string = '1.e4';
    var expected = [{
      w: 'e4',
      b: ''
    }];
    expect(_Movetext2.default.toRows(string)).toEqual(expected);
  });
  it('is 1.e4 e5', function () {
    var string = '1.e4 e5';
    var expected = [{
      w: 'e4',
      b: 'e5'
    }];
    expect(_Movetext2.default.toRows(string)).toEqual(expected);
  });
  it('is 1.e4 e5 2.Nf3', function () {
    var string = '1.e4 e5 2.Nf3';
    var expected = [{
      w: 'e4',
      b: 'e5'
    }, {
      w: 'Nf3',
      b: ''
    }];
    expect(_Movetext2.default.toRows(string)).toEqual(expected);
  });
  it('is 1.e4 e5 2.Nf3 Nc6', function () {
    var string = '1.e4 e5 2.Nf3 Nc6';
    var expected = [{
      w: 'e4',
      b: 'e5'
    }, {
      w: 'Nf3',
      b: 'Nc6'
    }];
    expect(_Movetext2.default.toRows(string)).toEqual(expected);
  });
});

describe('substring()', function () {
  it('is 1.e4', function () {
    var string = '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 e5 5.dxe5 Nc6 6.Nf3 Bb4 7.Bd2';
    var expected = '1.e4';
    expect(_Movetext2.default.substring(string, -12)).toEqual(expected);
  });
  it('is 1.e4 d5', function () {
    var string = '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 e5 5.dxe5 Nc6 6.Nf3 Bb4 7.Bd2';
    var expected = '1.e4 d5';
    expect(_Movetext2.default.substring(string, -11)).toEqual(expected);
  });
  it('is 1.e4 d5 2.exd5', function () {
    var string = '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 e5 5.dxe5 Nc6 6.Nf3 Bb4 7.Bd2';
    var expected = '1.e4 d5 2.exd5';
    expect(_Movetext2.default.substring(string, -10)).toEqual(expected);
  });
});