'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accept = exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var settingsDialogSlice = (0, _toolkit.createSlice)({
  name: 'settingsDialog',
  initialState: {
    open: false,
    fields: {
      heuristics: 'off'
    }
  },
  reducers: {
    open: function open(state) {
      state.open = true;
    },
    close: function close(state) {
      state.open = false;
    },
    accept: function accept(state, action) {
      state.fields = action.payload;
    }
  }
});

var _settingsDialogSlice$ = settingsDialogSlice.actions,
    open = _settingsDialogSlice$.open,
    close = _settingsDialogSlice$.close,
    accept = _settingsDialogSlice$.accept;
exports.open = open;
exports.close = close;
exports.accept = accept;
exports.default = settingsDialogSlice.reducer;