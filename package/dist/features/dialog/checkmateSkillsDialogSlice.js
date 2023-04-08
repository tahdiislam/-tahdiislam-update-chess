'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var checkmateSkillsDialogSlice = (0, _toolkit.createSlice)({
  name: 'checkmateSkillsDialog',
  initialState: {
    open: false
  },
  reducers: {
    open: function open(state) {
      state.open = true;
    },
    close: function close(state) {
      state.open = false;
    }
  }
});

var _checkmateSkillsDialo = checkmateSkillsDialogSlice.actions,
    open = _checkmateSkillsDialo.open,
    close = _checkmateSkillsDialo.close;
exports.open = open;
exports.close = close;
exports.default = checkmateSkillsDialogSlice.reducer;