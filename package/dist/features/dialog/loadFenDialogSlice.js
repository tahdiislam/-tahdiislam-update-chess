'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var loadFenDialogSlice = (0, _toolkit.createSlice)({
  name: 'loadFenDialog',
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

var _loadFenDialogSlice$a = loadFenDialogSlice.actions,
    open = _loadFenDialogSlice$a.open,
    close = _loadFenDialogSlice$a.close;
exports.open = open;
exports.close = close;
exports.default = loadFenDialogSlice.reducer;