'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var acceptDrawDialogSlice = (0, _toolkit.createSlice)({
  name: 'acceptDrawDialog',
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

var _acceptDrawDialogSlic = acceptDrawDialogSlice.actions,
    open = _acceptDrawDialogSlic.open,
    close = _acceptDrawDialogSlic.close;
exports.open = open;
exports.close = close;
exports.default = acceptDrawDialogSlice.reducer;