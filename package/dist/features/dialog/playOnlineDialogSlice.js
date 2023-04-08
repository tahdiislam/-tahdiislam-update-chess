'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refresh = exports.open = exports.close = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
  rows: [],
  open: false
};

var playOnlineDialogSlice = (0, _toolkit.createSlice)({
  name: 'playOnlineDialog',
  initialState: initialState,
  reducers: {
    close: function close() {
      return initialState;
    },
    open: function open(state) {
      state.open = true;
    },
    refresh: function refresh(state, action) {
      state.rows = action.payload;
    }
  }
});

var _playOnlineDialogSlic = playOnlineDialogSlice.actions,
    close = _playOnlineDialogSlic.close,
    open = _playOnlineDialogSlic.open,
    refresh = _playOnlineDialogSlic.refresh;
exports.close = close;
exports.open = open;
exports.refresh = refresh;
exports.default = playOnlineDialogSlice.reducer;