'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var searchEcoDialogSlice = (0, _toolkit.createSlice)({
  name: 'searchEcoDialog',
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

var _searchEcoDialogSlice = searchEcoDialogSlice.actions,
    open = _searchEcoDialogSlice.open,
    close = _searchEcoDialogSlice.close;
exports.open = open;
exports.close = close;
exports.default = searchEcoDialogSlice.reducer;