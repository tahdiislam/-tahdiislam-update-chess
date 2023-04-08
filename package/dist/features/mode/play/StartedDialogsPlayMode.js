'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AcceptDrawDialog = require('../../../features/dialog/AcceptDrawDialog');

var _AcceptDrawDialog2 = _interopRequireDefault(_AcceptDrawDialog);

var _OfferDrawDialog = require('../../../features/dialog/OfferDrawDialog');

var _OfferDrawDialog2 = _interopRequireDefault(_OfferDrawDialog);

var _AcceptResignDialog = require('../../../features/dialog/AcceptResignDialog');

var _AcceptResignDialog2 = _interopRequireDefault(_AcceptResignDialog);

var _AcceptTakebackDialog = require('../../../features/dialog/AcceptTakebackDialog');

var _AcceptTakebackDialog2 = _interopRequireDefault(_AcceptTakebackDialog);

var _OfferTakebackDialog = require('../../../features/dialog/OfferTakebackDialog');

var _OfferTakebackDialog2 = _interopRequireDefault(_OfferTakebackDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartedDialogsPlayMode = function StartedDialogsPlayMode() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AcceptDrawDialog2.default, null),
    _react2.default.createElement(_OfferDrawDialog2.default, null),
    _react2.default.createElement(_AcceptResignDialog2.default, null),
    _react2.default.createElement(_AcceptTakebackDialog2.default, null),
    _react2.default.createElement(_OfferTakebackDialog2.default, null)
  );
};

exports.default = StartedDialogsPlayMode;