'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

var _BlackTimer = require('./BlackTimer');

var _BlackTimer2 = _interopRequireDefault(_BlackTimer);

var _WhiteTimer = require('./WhiteTimer');

var _WhiteTimer2 = _interopRequireDefault(_WhiteTimer);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timer = function Timer() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });

  if (state.mode.name === modeConst.PLAY) {
    if (state.mode.play.accepted) {
      return _react2.default.createElement(
        _material.Box,
        { sx: { mt: 1.5 } },
        _react2.default.createElement(_WhiteTimer2.default, null),
        _react2.default.createElement(_BlackTimer2.default, null)
      );
    }
  }

  return null;
};

exports.default = Timer;