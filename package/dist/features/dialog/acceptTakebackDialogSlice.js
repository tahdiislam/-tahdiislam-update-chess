'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var acceptTakebackDialogSlice = (0, _toolkit.createSlice)({
  name: 'acceptTakebackDialog',
  initialState: {
    open: false
  },
  reducers: {
    open: function open(state) {
      state.open = true;
    },
    close: function close(state) {
      state.open = false;
    }
  }
});

var _acceptTakebackDialog = acceptTakebackDialogSlice.actions,
    open = _acceptTakebackDialog.open,
    close = _acceptTakebackDialog.close;
exports.open = open;
exports.close = close;
exports.default = acceptTakebackDialogSlice.reducer;