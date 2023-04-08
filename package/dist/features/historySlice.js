'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goToEnd = exports.goForward = exports.goBack = exports.goTo = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
  back: 0
};

var historySlice = (0, _toolkit.createSlice)({
  name: 'history',
  initialState: initialState,
  reducers: {
    goTo: function goTo(state, action) {
      state.back = 0 - action.payload.back;
    },
    goBack: function goBack(state) {
      state.back = state.back - 1;
    },
    goForward: function goForward(state) {
      state.back = state.back + 1;
    },
    goToEnd: function goToEnd(state) {
      state.back = 0;
    }
  }
});

var _historySlice$actions = historySlice.actions,
    goTo = _historySlice$actions.goTo,
    goBack = _historySlice$actions.goBack,
    goForward = _historySlice$actions.goForward,
    goToEnd = _historySlice$actions.goToEnd;
exports.goTo = goTo;
exports.goBack = goBack;
exports.goForward = goForward;
exports.goToEnd = goToEnd;
exports.default = historySlice.reducer;