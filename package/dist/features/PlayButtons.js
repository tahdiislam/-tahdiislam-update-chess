"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _material = require("@mui/material");

var _PlayOnlineDialog = require("./dialog/PlayOnlineDialog");

var _PlayOnlineDialog2 = _interopRequireDefault(_PlayOnlineDialog);

var _playOnlineDialogSlice = require("../features/dialog/playOnlineDialogSlice");

var playOnlineDialog = _interopRequireWildcard(_playOnlineDialogSlice);

var _PlayComputerDialog = require("./dialog/PlayComputerDialog");

var _PlayComputerDialog2 = _interopRequireDefault(_PlayComputerDialog);

var _playComputerDialogSlice = require("../features/dialog/playComputerDialogSlice");

var playComputerDialog = _interopRequireWildcard(_playComputerDialogSlice);

var _CreateInviteCodeDialog = require("./dialog/CreateInviteCodeDialog");

var _CreateInviteCodeDialog2 = _interopRequireDefault(_CreateInviteCodeDialog);

var _EnterInviteCodeDialog = require("./dialog/EnterInviteCodeDialog");

var _EnterInviteCodeDialog2 = _interopRequireDefault(_EnterInviteCodeDialog);

var _createInviteCodeDialogSlice = require("../features/dialog/createInviteCodeDialogSlice");

var createInviteCodeDialog = _interopRequireWildcard(
  _createInviteCodeDialogSlice
);

var _enterInviteCodeDialogSlice = require("../features/dialog/enterInviteCodeDialogSlice");

var enterInviteCodeDialog = _interopRequireWildcard(
  _enterInviteCodeDialogSlice
);

var _modeSlice = require("../features/mode/modeSlice");

var mode = _interopRequireWildcard(_modeSlice);

var _WsAction = require("../features/ws/WsAction");

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PlayButtons = function PlayButtons(_ref) {
  var props = _ref.props;
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  _react.useEffect(() => {
    if (
      props?.playMethod?.online &&
      !props?.playMethod?.computer &&
      !props?.playMethod?.enterCode &&
      !props?.playMethod?.playFriend
    ) {
      dispatch(playOnlineDialog.open());
      _WsAction2.default.onlineGames(state);
    } else if (
      props?.playMethod?.computer &&
      !props?.playMethod?.online &&
      !props?.playMethod?.enterCode &&
      !props?.playMethod?.playFriend
    ) {
      dispatch(playComputerDialog.open());
    } else if (
      props?.playMethod?.playFriend &&
      !props?.playMethod?.online &&
      !props?.playMethod?.computer &&
      !props?.playMethod?.enterCode
    ) {
      dispatch(createInviteCodeDialog.open());
      dispatch(mode.startAnalysis());
    } else if (
      props?.playMethod?.enterCode &&
      !props?.playMethod?.playFriend &&
      !props?.playMethod?.online &&
      !props?.playMethod?.computer
    ) {
      dispatch(enterInviteCodeDialog.open());
    }
  }, [props?.playMethod]);

  return _react2.default.createElement(
    _material.Grid,
    null,
    _react2.default.createElement(_CreateInviteCodeDialog2.default, null),
    _react2.default.createElement(_EnterInviteCodeDialog2.default, null),
    _react2.default.createElement(_PlayOnlineDialog2.default, null),
    _react2.default.createElement(_PlayComputerDialog2.default, null)
  );
};

exports.default = PlayButtons;
