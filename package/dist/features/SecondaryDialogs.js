'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeuristicsDialog = require('./dialog/HeuristicsDialog');

var _HeuristicsDialog2 = _interopRequireDefault(_HeuristicsDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecondaryDialogs = function SecondaryDialogs() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_HeuristicsDialog2.default, null)
  );
};

exports.default = SecondaryDialogs;