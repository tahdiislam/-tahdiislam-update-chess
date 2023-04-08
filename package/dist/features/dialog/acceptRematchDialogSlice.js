'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var acceptRematchDialogSlice = (0, _toolkit.createSlice)({
  name: 'acceptRematchDialog',
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

var _acceptRematchDialogS = acceptRematchDialogSlice.actions,
    open = _acceptRematchDialogS.open,
    close = _acceptRematchDialogS.close;
exports.open = open;
exports.close = close;
exports.default = acceptRematchDialogSlice.reducer;