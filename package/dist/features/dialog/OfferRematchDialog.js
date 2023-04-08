"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _material = require("@mui/material");

var _Wording = require("../../common/Wording.js");

var _Wording2 = _interopRequireDefault(_Wording);

var _offerRematchDialogSlice = require("../../features/dialog/offerRematchDialogSlice");

var offerRematchDialog = _interopRequireWildcard(_offerRematchDialogSlice);

var _modeSlice = require("../../features/mode/modeSlice");

var mode = _interopRequireWildcard(_modeSlice);

var _WsAction = require("../../features/ws/WsAction");

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfferRematchDialog = function OfferRematchDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var handleRematchOffer = function handleRematchOffer(event) {
    event.preventDefault();
    _WsAction2.default.rematch(state, _Wording2.default.verb.PROPOSE.toLowerCase());
    dispatch(mode.proposeRematch());
    dispatch(offerRematchDialog.close());
  };

  return _react2.default.createElement(
    _material.Dialog,
    { open: state.offerRematchDialog.open, maxWidth: "xs", fullWidth: true },
    _react2.default.createElement(
      _material.DialogTitle,
      null,
      "Offer rematch"
    ),
    _react2.default.createElement(
      _material.DialogContent,
      null,
      _react2.default.createElement(
        "form",
        { onSubmit: handleRematchOffer },
        _react2.default.createElement(
          _material.DialogActions,
          null,
          _react2.default.createElement(
            _material.Button,
            { type: "submit" },
            "Accept"
          ),
          _react2.default.createElement(
            _material.Button,
            { onClick: function onClick() {
                return dispatch(offerRematchDialog.close());
              } },
            "Cancel"
          )
        )
      )
    )
  );
};

exports.default = OfferRematchDialog;