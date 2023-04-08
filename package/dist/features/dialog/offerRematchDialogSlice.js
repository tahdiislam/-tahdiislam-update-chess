'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var offerRematchDialogSlice = (0, _toolkit.createSlice)({
  name: 'offerRematchDialog',
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

var _offerRematchDialogSl = offerRematchDialogSlice.actions,
    open = _offerRematchDialogSl.open,
    close = _offerRematchDialogSl.close;
exports.open = open;
exports.close = close;
exports.default = offerRematchDialogSlice.reducer;