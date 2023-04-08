'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _material = require('@mui/material');

var _settingsDialogSlice = require('../../features/dialog/settingsDialogSlice');

var settingsDialog = _interopRequireWildcard(_settingsDialogSlice);

var _progressDialogSlice = require('../../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingsDialog = function SettingsDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var handleHeuristicsChange = function handleHeuristicsChange(event) {
    dispatch(settingsDialog.accept({
      heuristics: event.target.value === 'on' ? 'off' : 'on'
    }));
  };

  return _react2.default.createElement(
    _material.Dialog,
    { open: state.settingsDialog.open, maxWidth: 'xs', fullWidth: true },
    _react2.default.createElement(
      _material.DialogTitle,
      null,
      'Settings',
      _react2.default.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            return dispatch(settingsDialog.close());
          } },
        _react2.default.createElement(_Close2.default, null)
      )
    ),
    _react2.default.createElement(
      _material.DialogContent,
      null,
      _react2.default.createElement(
        _material.FormGroup,
        null,
        _react2.default.createElement(_material.FormControlLabel, {
          label: 'Show heuristics while playing',
          control: _react2.default.createElement(_material.Checkbox, {
            name: 'heuristics',
            checked: state.settingsDialog.fields.heuristics === 'on',
            value: state.settingsDialog.fields.heuristics,
            onChange: handleHeuristicsChange
          })
        })
      ),
      _react2.default.createElement(
        _material.Button,
        {
          fullWidth: true,
          type: 'submit',
          variant: 'outlined',
          onClick: function onClick() {
            return dispatch(settingsDialog.close());
          },
          sx: { mt: 2 }
        },
        'Accept'
      )
    )
  );
};

exports.default = SettingsDialog;