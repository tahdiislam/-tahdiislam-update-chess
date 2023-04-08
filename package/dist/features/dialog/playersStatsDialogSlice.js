'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAutocomplete = exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var playersStatsDialogSlice = (0, _toolkit.createSlice)({
  name: 'playersStatsDialog',
  initialState: {
    open: false,
    autocomplete: {
      events: [],
      players: []
    }
  },
  reducers: {
    open: function open(state) {
      state.open = true;
    },
    close: function close(state) {
      state.open = false;
    },
    setAutocomplete: function setAutocomplete(state, action) {
      state.autocomplete = action.payload;
    }
  }
});

var _playersStatsDialogSl = playersStatsDialogSlice.actions,
    open = _playersStatsDialogSl.open,
    close = _playersStatsDialogSl.close,
    setAutocomplete = _playersStatsDialogSl.setAutocomplete;
exports.open = open;
exports.close = close;
exports.setAutocomplete = setAutocomplete;
exports.default = playersStatsDialogSlice.reducer;