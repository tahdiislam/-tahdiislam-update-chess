'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _toolkit = require('@reduxjs/toolkit');

var endgameSkillsDialogSlice = (0, _toolkit.createSlice)({
  name: 'endgameSkillsDialog',
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

var _endgameSkillsDialogS = endgameSkillsDialogSlice.actions,
    open = _endgameSkillsDialogS.open,
    close = _endgameSkillsDialogS.close;
exports.open = open;
exports.close = close;
exports.default = endgameSkillsDialogSlice.reducer;