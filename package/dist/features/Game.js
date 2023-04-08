'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _material = require('@mui/material');

var _Timer = require('./timer/Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _FinishedButtonsPlayMode = require('./mode/play/FinishedButtonsPlayMode');

var _FinishedButtonsPlayMode2 = _interopRequireDefault(_FinishedButtonsPlayMode);

var _FinishedDialogsPlayMode = require('./mode/play/FinishedDialogsPlayMode');

var _FinishedDialogsPlayMode2 = _interopRequireDefault(_FinishedDialogsPlayMode);

var _StartedButtonsPlayMode = require('./mode/play/StartedButtonsPlayMode');

var _StartedButtonsPlayMode2 = _interopRequireDefault(_StartedButtonsPlayMode);

var _StartedDialogsPlayMode = require('./mode/play/StartedDialogsPlayMode');

var _StartedDialogsPlayMode2 = _interopRequireDefault(_StartedDialogsPlayMode);

var _MoveValidatorTable = require('./table/MoveValidatorTable');

var _MoveValidatorTable2 = _interopRequireDefault(_MoveValidatorTable);

var _SecondaryButtons = require('./SecondaryButtons');

var _SecondaryButtons2 = _interopRequireDefault(_SecondaryButtons);

var _SecondaryDialogs = require('./SecondaryDialogs');

var _SecondaryDialogs2 = _interopRequireDefault(_SecondaryDialogs);

var _History = require('./History');

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  gameBox: {
    background: '#f6f6f6'
  },
  pgn: {
    height: 225
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    background: '#f0f0f0'
  },
  timer: {
    display: 'flex',
    justifyContent: 'center'
  }
};

var Game = function Game(_ref) {
  var props = _ref.props;

  return _react2.default.createElement(
    _material.Grid,
    { container: true },
    _react2.default.createElement(
      _material.Grid,
      { item: true, xs: 12, sx: styles.gameBox },
      _react2.default.createElement(
        _material.Grid,
        { item: true, xs: 12, sx: styles.pgn },
        _react2.default.createElement(
          _material.Grid,
          { item: true, xs: 12, sx: styles.buttons },
          _react2.default.createElement(_History2.default, null)
        ),
        _react2.default.createElement(
          _material.Grid,
          { item: true, xs: 12 },
          _react2.default.createElement(_MoveValidatorTable2.default, null)
        )
      ),
      _react2.default.createElement(
        _material.Grid,
        { item: true, xs: 12, sx: styles.buttons },
        _react2.default.createElement(_SecondaryButtons2.default, { props: props })
      )
    ),
    _react2.default.createElement(
      _material.Grid,
      { item: true, xs: 12, sx: styles.timer },
      _react2.default.createElement(_Timer2.default, null)
    ),
    _react2.default.createElement(
      _material.Grid,
      { item: true, xs: 12 },
      _react2.default.createElement(_StartedButtonsPlayMode2.default, null),
      _react2.default.createElement(_FinishedButtonsPlayMode2.default, null)
    ),
    _react2.default.createElement(_SecondaryDialogs2.default, null),
    _react2.default.createElement(_StartedDialogsPlayMode2.default, null),
    _react2.default.createElement(_FinishedDialogsPlayMode2.default, null)
  );
};

exports.default = Game;