'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBar = exports.resetBar = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
  heuristics: null
};

var heuristicsBarSlice = (0, _toolkit.createSlice)({
  name: 'heuristicsBar',
  initialState: initialState,
  reducers: {
    resetBar: function resetBar() {
      return initialState;
    },
    updateBar: function updateBar(state, action) {
      state.heuristics = action.payload;
    }
  }
});

var _heuristicsBarSlice$a = heuristicsBarSlice.actions,
    resetBar = _heuristicsBarSlice$a.resetBar,
    updateBar = _heuristicsBarSlice$a.updateBar;
exports.resetBar = resetBar;
exports.updateBar = updateBar;
exports.default = heuristicsBarSlice.reducer;