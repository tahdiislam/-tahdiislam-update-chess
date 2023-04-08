'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var loadPgnDialogSlice = (0, _toolkit.createSlice)({
  name: 'loadPgnDialog',
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

var _loadPgnDialogSlice$a = loadPgnDialogSlice.actions,
    open = _loadPgnDialogSlice$a.open,
    close = _loadPgnDialogSlice$a.close;
exports.open = open;
exports.close = close;
exports.default = loadPgnDialogSlice.reducer;