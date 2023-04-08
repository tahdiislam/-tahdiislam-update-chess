'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoAlert = function InfoAlert() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });

  if (state.infoAlert.open) {
    return _react2.default.createElement(
      _material.Alert,
      { sx: { mt: 1.5 }, severity: 'info' },
      state.infoAlert.info
    );
  }

  return null;
};

exports.default = InfoAlert;