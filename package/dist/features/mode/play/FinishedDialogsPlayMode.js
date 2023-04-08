'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AcceptRematchDialog = require('../../../features/dialog/AcceptRematchDialog');

var _AcceptRematchDialog2 = _interopRequireDefault(_AcceptRematchDialog);

var _OfferRematchDialog = require('../../../features/dialog/OfferRematchDialog');

var _OfferRematchDialog2 = _interopRequireDefault(_OfferRematchDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FinishedDialogsPlayMode = function FinishedDialogsPlayMode() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AcceptRematchDialog2.default, null),
    _react2.default.createElement(_OfferRematchDialog2.default, null)
  );
};

exports.default = FinishedDialogsPlayMode;