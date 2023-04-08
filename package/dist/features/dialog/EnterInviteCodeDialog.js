'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _material = require('@mui/material');

var _mainButtonsSlice = require('../../features/mainButtonsSlice');

var mainButtons = _interopRequireWildcard(_mainButtonsSlice);

var _enterInviteCodeDialogSlice = require('../../features/dialog/enterInviteCodeDialogSlice');

var enterInviteCodeDialog = _interopRequireWildcard(_enterInviteCodeDialogSlice);

var _modeSlice = require('../../features/mode/modeSlice');

var mode = _interopRequireWildcard(_modeSlice);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EnterInviteCodeDialog = function EnterInviteCodeDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _React$useState = React.useState({
    hash: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fields = _React$useState2[0],
      setFields = _React$useState2[1];

  var handleHashChange = function handleHashChange(event) {
    setFields({
      hash: event.target.value
    });
  };

  var handlePlay = function handlePlay() {
    dispatch(mainButtons.setPlayAFriend());
    dispatch(mode.startAnalysis());
    dispatch(enterInviteCodeDialog.close());
    _WsAction2.default.accept(state, fields.hash);
  };

  return React.createElement(
    _material.Dialog,
    { open: state.enterInviteCodeDialog.open, maxWidth: 'xs', fullWidth: true },
    React.createElement(
      _material.DialogTitle,
      null,
      'Enter Invite Code',
      React.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            return dispatch(enterInviteCodeDialog.close());
          } },
        React.createElement(_Close2.default, null)
      )
    ),
    React.createElement(
      _material.DialogContent,
      null,
      React.createElement(_material.TextField, {
        fullWidth: true,
        required: true,
        name: 'hash',
        label: 'Invite code',
        variant: 'filled',
        margin: 'normal',
        onChange: handleHashChange
      }),
      React.createElement(
        _material.Button,
        {
          fullWidth: true,
          variant: 'outlined',
          onClick: function onClick() {
            return handlePlay();
          },
          sx: { mt: 2 }
        },
        'Play friend'
      )
    )
  );
};

exports.default = EnterInviteCodeDialog;