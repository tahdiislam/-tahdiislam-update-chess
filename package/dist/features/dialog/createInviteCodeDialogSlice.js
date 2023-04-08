'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var createInviteCodeDialogSlice = (0, _toolkit.createSlice)({
  name: 'createInviteCodeDialog',
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

var _createInviteCodeDial = createInviteCodeDialogSlice.actions,
    open = _createInviteCodeDial.open,
    close = _createInviteCodeDial.close;
exports.open = open;
exports.close = close;
exports.default = createInviteCodeDialogSlice.reducer;