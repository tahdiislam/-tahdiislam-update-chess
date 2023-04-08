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

var _offerDrawDialogSlice = require('../../../features/dialog/offerDrawDialogSlice');

var offerDrawDialog = _interopRequireWildcard(_offerDrawDialogSlice);

var _acceptResignDialogSlice = require('../../../features/dialog/acceptResignDialogSlice');

var acceptResignDialog = _interopRequireWildcard(_acceptResignDialogSlice);

var _offerTakebackDialogSlice = require('../../../features/dialog/offerTakebackDialogSlice');

var offerTakebackDialog = _interopRequireWildcard(_offerTakebackDialogSlice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartedButtonsPlayMode = function StartedButtonsPlayMode() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  if (state.mode.name === modeConst.PLAY) {
    if (state.mode.play.accepted) {
      if (!state.board.isMate && !state.mode.play.draw && !state.mode.play.resign && !state.mode.play.leave && !state.mode.play.timer.over) {
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
            {
              disabled: !state.board.movetext,
              onClick: function onClick() {
                return dispatch(offerTakebackDialog.open());
              }
            },
            'Propose a takeback'
          ),
          _react2.default.createElement(
            _material.Button,
            { onClick: function onClick() {
                return dispatch(offerDrawDialog.open());
              } },
            'Offer draw'
          ),
          _react2.default.createElement(
            _material.Button,
            { onClick: function onClick() {
                return dispatch(acceptResignDialog.open());
              } },
            'Resign'
          )
        );
      }
    }
  }

  return null;
};

exports.default = StartedButtonsPlayMode;