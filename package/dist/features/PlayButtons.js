'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Language = require('@mui/icons-material/Language');

var _Language2 = _interopRequireDefault(_Language);

var _material = require('@mui/material');

var _mainButtonsConst = require('../features/mainButtonsConst');

var mainButtonsConst = _interopRequireWildcard(_mainButtonsConst);

var _modeConst = require('../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _Wording = require('../common/Wording');

var _Wording2 = _interopRequireDefault(_Wording);

var _PlayOnlineDialog = require('./dialog/PlayOnlineDialog');

var _PlayOnlineDialog2 = _interopRequireDefault(_PlayOnlineDialog);

var _playOnlineDialogSlice = require('../features/dialog/playOnlineDialogSlice');

var playOnlineDialog = _interopRequireWildcard(_playOnlineDialogSlice);

var _WsAction = require('../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayButtons = function PlayButtons() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var disabled = state.mode.name === modeConst.PLAY && state.mode.play.accepted && (!state.mode.play.draw || state.mode.play.draw === _Wording2.default.verb.PROPOSE.toLowerCase()) && !state.mode.play.resign && !state.mode.play.resign && !state.mode.play.leave && !state.mode.play.timer.over && !state.board.isMate;

  return _react2.default.createElement(
    _material.Grid,
    null,
    _react2.default.createElement(
      _material.Stack,
      { spacing: 2 },
      _react2.default.createElement(
        _material.ButtonGroup,
        {
          size: 'large',
          orientation: 'vertical',
          'aria-label': 'Play Online',
          fullWidth: true,
          disabled: disabled
        },
        _react2.default.createElement(
          _material.Button,
          {
            startIcon: _react2.default.createElement(_Language2.default, null),
            variant: state.mainButtons.name === mainButtonsConst.PLAY_ONLINE ? "contained" : "outlined",
            onload: function onload() {
              dispatch(playOnlineDialog.open());
              _WsAction2.default.onlineGames(state);
            }
          },
          'Play Online'
        )
      ),
    ),
    _react2.default.createElement(_PlayOnlineDialog2.default, null),
  );
};

exports.default = PlayButtons;