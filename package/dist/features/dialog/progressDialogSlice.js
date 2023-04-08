'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var progressDialogSlice = (0, _toolkit.createSlice)({
  name: 'progressDialog',
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

var _progressDialogSlice$ = progressDialogSlice.actions,
    open = _progressDialogSlice$.open,
    close = _progressDialogSlice$.close;
exports.open = open;
exports.close = close;
exports.default = progressDialogSlice.reducer;