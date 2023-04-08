'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var playComputerDialogSlice = (0, _toolkit.createSlice)({
  name: 'playComputerDialog',
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

var _playComputerDialogSl = playComputerDialogSlice.actions,
    open = _playComputerDialogSl.open,
    close = _playComputerDialogSl.close;
exports.open = open;
exports.close = close;
exports.default = playComputerDialogSlice.reducer;