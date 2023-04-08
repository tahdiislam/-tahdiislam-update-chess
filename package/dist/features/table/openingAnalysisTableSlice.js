'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = exports.close = undefined;

var _toolkit = require('@reduxjs/toolkit');

var initialState = {
  rows: [],
  open: false
};

var openingAnalysisTableSlice = (0, _toolkit.createSlice)({
  name: 'openingAnalysisTable',
  initialState: initialState,
  reducers: {
    close: function close() {
      return initialState;
    },
    show: function show(state, action) {
      state.open = true, state.rows = action.payload.rows;
    }
  }
});

var _openingAnalysisTable = openingAnalysisTableSlice.actions,
    close = _openingAnalysisTable.close,
    show = _openingAnalysisTable.show;
exports.close = close;
exports.show = show;
exports.default = openingAnalysisTableSlice.reducer;