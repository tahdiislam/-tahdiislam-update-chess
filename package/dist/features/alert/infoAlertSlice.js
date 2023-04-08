'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = exports.close = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
  info: null,
  open: false
};

var infoAlertSlice = (0, _toolkit.createSlice)({
  name: 'infoAlert',
  initialState: initialState,
  reducers: {
    close: function close() {
      return initialState;
    },
    show: function show(state, action) {
      state.open = true;
      state.info = action.payload.info;
    }
  }
});

var _infoAlertSlice$actio = infoAlertSlice.actions,
    close = _infoAlertSlice$actio.close,
    show = _infoAlertSlice$actio.show;
exports.close = close;
exports.show = show;
exports.default = infoAlertSlice.reducer;