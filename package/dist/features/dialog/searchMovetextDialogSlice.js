'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var searchMovetextDialogSlice = (0, _toolkit.createSlice)({
  name: 'searchMovetextDialog',
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

var _searchMovetextDialog = searchMovetextDialogSlice.actions,
    open = _searchMovetextDialog.open,
    close = _searchMovetextDialog.close;
exports.open = open;
exports.close = close;
exports.default = searchMovetextDialogSlice.reducer;