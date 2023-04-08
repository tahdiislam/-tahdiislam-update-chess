'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = exports.close = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
  heuristics: null,
  open: false
};

var heuristicsDialogSlice = (0, _toolkit.createSlice)({
  name: 'heuristicsDialog',
  initialState: initialState,
  reducers: {
    close: function close() {
      return initialState;
    },
    open: function open(state, action) {
      state.open = true, state.heuristics = action.payload;
    }
  }
});

var _heuristicsDialogSlic = heuristicsDialogSlice.actions,
    close = _heuristicsDialogSlic.close,
    open = _heuristicsDialogSlic.open;
exports.close = close;
exports.open = open;
exports.default = heuristicsDialogSlice.reducer;