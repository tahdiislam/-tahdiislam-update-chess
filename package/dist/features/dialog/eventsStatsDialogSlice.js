'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAutocomplete = exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var eventsStatsDialogSlice = (0, _toolkit.createSlice)({
  name: 'eventsStatsDialog',
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

var _eventsStatsDialogSli = eventsStatsDialogSlice.actions,
    open = _eventsStatsDialogSli.open,
    close = _eventsStatsDialogSli.close,
    setAutocomplete = _eventsStatsDialogSli.setAutocomplete;
exports.open = open;
exports.close = close;
exports.setAutocomplete = setAutocomplete;
exports.default = eventsStatsDialogSlice.reducer;