'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAutocomplete = exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var searchGamesDialogSlice = (0, _toolkit.createSlice)({
  name: 'searchGamesDialog',
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

var _searchGamesDialogSli = searchGamesDialogSlice.actions,
    open = _searchGamesDialogSli.open,
    close = _searchGamesDialogSli.close,
    setAutocomplete = _searchGamesDialogSli.setAutocomplete;
exports.open = open;
exports.close = close;
exports.setAutocomplete = setAutocomplete;
exports.default = searchGamesDialogSlice.reducer;