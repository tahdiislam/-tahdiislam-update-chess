'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactTimerHook = require('react-timer-hook');

var _material = require('@mui/material');

var _Pgn = require('../../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

var _infoAlertSlice = require('../../features/alert/infoAlertSlice');

var infoAlert = _interopRequireWildcard(_infoAlertSlice);

var _modeSlice = require('../../features/mode/modeSlice');

var mode = _interopRequireWildcard(_modeSlice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlackTimer = function BlackTimer() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var expiryTimestamp = state.mode.play.timer.expiry_timestamp;
  var timer = (0, _reactTimerHook.useTimer)({
    expiryTimestamp: expiryTimestamp,
    onExpire: function onExpire() {
      dispatch(mode.timeOver({ color: _Pgn2.default.symbol.BLACK }));
      dispatch(infoAlert.show({ info: 'White wins.' }));
    }
  });
  var isInitialMount = (0, _react.useRef)(true);

  (0, _react.useEffect)(function () {
    if (isInitialMount.name) {
      timer.pause();
      isInitialMount.name = false;
    } else {
      if (state.board.isMate || state.mode.play.draw || state.mode.play.resign || state.mode.play.leave || state.mode.play.timer.over) {
        timer.pause();
      } else if (state.board.turn === _Pgn2.default.symbol.BLACK) {
        timer.resume();
      } else {
        var now = new Date();
        var elapsedSeconds = timer.minutes * 60 + timer.seconds;
        now.setSeconds(now.getSeconds() + elapsedSeconds + parseInt(state.mode.play.jwt_decoded.increment));
        timer.restart(now);
        timer.pause();
      }
    }
  }, [state.board.turn, state.board.isMate, state.mode.play.draw, state.mode.play.resign, state.mode.play.leave, state.mode.play.timer.over]);

  return _react2.default.createElement(
    _material.Box,
    { component: 'span' },
    timer.minutes,
    ':',
    timer.seconds
  );
};

exports.default = BlackTimer;