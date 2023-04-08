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

var _Wording = require('../../../common/Wording.js');

var _Wording2 = _interopRequireDefault(_Wording);

var _offerRematchDialogSlice = require('../../../features/dialog/offerRematchDialogSlice');

var offerRematchDialog = _interopRequireWildcard(_offerRematchDialogSlice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FinishedButtonsPlayMode = function FinishedButtonsPlayMode() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  if (state.mode.name === modeConst.PLAY) {
    if (state.mode.play.accepted) {
      if (state.board.isMate || state.mode.play.draw === _Wording2.default.verb.ACCEPT.toLowerCase() || state.mode.play.resign === _Wording2.default.verb.ACCEPT.toLowerCase() || state.mode.play.timer.over) {
        return _react2.default.createElement(
          _material.ButtonGroup,
          {
            sx: { mt: 1.5 },
            orientation: 'vertical',
            size: 'small',
            'aria-label': 'Game Over',
            fullWidth: true
          },
          _react2.default.createElement(
            _material.Button,
            { onClick: function onClick() {
                return dispatch(offerRematchDialog.open());
              } },
            'Offer Rematch'
          )
        );
      }
    }
  }

  return null;
};

exports.default = FinishedButtonsPlayMode;