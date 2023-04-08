'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var offerDrawDialogSlice = (0, _toolkit.createSlice)({
  name: 'offerDrawDialog',
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

var _offerDrawDialogSlice = offerDrawDialogSlice.actions,
    open = _offerDrawDialogSlice.open,
    close = _offerDrawDialogSlice.close;
exports.open = open;
exports.close = close;
exports.default = offerDrawDialogSlice.reducer;