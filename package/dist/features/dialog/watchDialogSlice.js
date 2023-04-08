'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var watchDialogSlice = (0, _toolkit.createSlice)({
  name: 'watchDialog',
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

var _watchDialogSlice$act = watchDialogSlice.actions,
    open = _watchDialogSlice$act.open,
    close = _watchDialogSlice$act.close;
exports.open = open;
exports.close = close;
exports.default = watchDialogSlice.reducer;