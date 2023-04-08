'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressDialog = function ProgressDialog(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });

  return _react2.default.createElement(
    _material.Dialog,
    { open: state.progressDialog.open, maxWidth: 'xs', fullWidth: true },
    _react2.default.createElement(
      _material.Box,
      { sx: { width: '100%' } },
      _react2.default.createElement(_material.LinearProgress, null)
    )
  );
};

exports.default = ProgressDialog;