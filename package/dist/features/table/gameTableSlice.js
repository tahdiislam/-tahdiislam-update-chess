'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = exports.close = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
  game: {},
  open: false
};

var gameTableSlice = (0, _toolkit.createSlice)({
  name: 'gameTable',
  initialState: initialState,
  reducers: {
    close: function close() {
      return initialState;
    },
    show: function show(state, action) {
      state.open = true, state.game = action.payload.game;
    }
  }
});

var _gameTableSlice$actio = gameTableSlice.actions,
    close = _gameTableSlice$actio.close,
    show = _gameTableSlice$actio.show;
exports.close = close;
exports.show = show;
exports.default = gameTableSlice.reducer;