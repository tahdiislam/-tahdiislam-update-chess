'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var searchNameDialogSlice = (0, _toolkit.createSlice)({
  name: 'searchNameDialog',
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

var _searchNameDialogSlic = searchNameDialogSlice.actions,
    open = _searchNameDialogSlic.open,
    close = _searchNameDialogSlic.close;
exports.open = open;
exports.close = close;
exports.default = searchNameDialogSlice.reducer;