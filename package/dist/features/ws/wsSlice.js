'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connEstablished = exports.connError = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
  ws: null
};

var wsSlice = (0, _toolkit.createSlice)({
  name: 'ws',
  initialState: initialState,
  reducers: {
    connError: function connError() {
      return initialState;
    },
    connEstablished: function connEstablished(state, action) {
      state.ws = action.payload.ws;
    }
  }
});

var _wsSlice$actions = wsSlice.actions,
    connError = _wsSlice$actions.connError,
    connEstablished = _wsSlice$actions.connEstablished;
exports.connError = connError;
exports.connEstablished = connEstablished;
exports.default = wsSlice.reducer;