'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStats = exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var openingsStatsDialogSlice = (0, _toolkit.createSlice)({
  name: 'openingsStatsDialog',
  initialState: {
    open: false,
    stats: {
      drawRate: [],
      winRateForWhite: [],
      winRateForBlack: []
    }
  },
  reducers: {
    open: function open(state) {
      state.open = true;
    },
    close: function close(state) {
      state.open = false;
    },
    setStats: function setStats(state, action) {
      state.stats = action.payload;
    }
  }
});

var _openingsStatsDialogS = openingsStatsDialogSlice.actions,
    open = _openingsStatsDialogS.open,
    close = _openingsStatsDialogS.close,
    setStats = _openingsStatsDialogS.setStats;
exports.open = open;
exports.close = close;
exports.setStats = setStats;
exports.default = openingsStatsDialogSlice.reducer;