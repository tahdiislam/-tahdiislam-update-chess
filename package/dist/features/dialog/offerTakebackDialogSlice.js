'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var offerTakebackDialogSlice = (0, _toolkit.createSlice)({
  name: 'offerTakebackDialog',
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

var _offerTakebackDialogS = offerTakebackDialogSlice.actions,
    open = _offerTakebackDialogS.open,
    close = _offerTakebackDialogS.close;
exports.open = open;
exports.close = close;
exports.default = offerTakebackDialogSlice.reducer;