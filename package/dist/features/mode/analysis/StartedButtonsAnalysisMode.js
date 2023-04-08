'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material/');

var _modeConst = require('../../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _WsAction = require('../../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartedButtonsAnalysisMode = function StartedButtonsAnalysisMode() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });

  if (state.mode.name === modeConst.ANALYSIS) {
    if (state.board.movetext) {
      return _react2.default.createElement(
        _material.ButtonGroup,
        {
          sx: { mt: 1.5 },
          size: 'small',
          'aria-label': 'Game Buttons',
          orientation: 'vertical',
          fullWidth: true
        },
        _react2.default.createElement(
          _material.Button,
          { onClick: function onClick() {
              return _WsAction2.default.undo(state);
            } },
          'Undo move'
        )
      );
    }
  }

  return null;
};

exports.default = StartedButtonsAnalysisMode;