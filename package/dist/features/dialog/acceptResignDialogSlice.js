'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var acceptResignDialogSlice = (0, _toolkit.createSlice)({
  name: 'acceptResignDialog',
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

var _acceptResignDialogSl = acceptResignDialogSlice.actions,
    open = _acceptResignDialogSl.open,
    close = _acceptResignDialogSl.close;
exports.open = open;
exports.close = close;
exports.default = acceptResignDialogSlice.reducer;