'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var enterInviteCodeDialogSlice = (0, _toolkit.createSlice)({
  name: 'enterInviteCodeDialog',
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

var _enterInviteCodeDialo = enterInviteCodeDialogSlice.actions,
    open = _enterInviteCodeDialo.open,
    close = _enterInviteCodeDialo.close;
exports.open = open;
exports.close = close;
exports.default = enterInviteCodeDialogSlice.reducer;