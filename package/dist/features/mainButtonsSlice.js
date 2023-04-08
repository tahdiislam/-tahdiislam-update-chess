'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDatabase = exports.setOpeningSearch = exports.setTraining = exports.setPlayComputer = exports.setPlayAFriend = exports.setPlayOnline = exports.setAnalysis = undefined;

var _toolkit = require('@reduxjs/toolkit');

var _mainButtonsConst = require('../features/mainButtonsConst');

var mainButtonsConst = _interopRequireWildcard(_mainButtonsConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  name: mainButtonsConst.ANALYSIS
};

var mainButtonsSlice = (0, _toolkit.createSlice)({
  name: 'mainButtons',
  initialState: initialState,
  reducers: {
    setAnalysis: function setAnalysis() {
      return initialState;
    },
    setPlayOnline: function setPlayOnline(state) {
      state.name = mainButtonsConst.PLAY_ONLINE;
    },
    setPlayAFriend: function setPlayAFriend(state) {
      state.name = mainButtonsConst.PLAY_A_FRIEND;
    },
    setPlayComputer: function setPlayComputer(state) {
      state.name = mainButtonsConst.PLAY_COMPUTER;
    },
    setTraining: function setTraining(state) {
      state.name = mainButtonsConst.TRAINING;
    },
    setOpeningSearch: function setOpeningSearch(state) {
      state.name = mainButtonsConst.OPENING_SEARCH;
    },
    setDatabase: function setDatabase(state) {
      state.name = mainButtonsConst.MAIN_BUTTON_DATABASE;
    }
  }
});

var _mainButtonsSlice$act = mainButtonsSlice.actions,
    setAnalysis = _mainButtonsSlice$act.setAnalysis,
    setPlayOnline = _mainButtonsSlice$act.setPlayOnline,
    setPlayAFriend = _mainButtonsSlice$act.setPlayAFriend,
    setPlayComputer = _mainButtonsSlice$act.setPlayComputer,
    setTraining = _mainButtonsSlice$act.setTraining,
    setOpeningSearch = _mainButtonsSlice$act.setOpeningSearch,
    setDatabase = _mainButtonsSlice$act.setDatabase;
exports.setAnalysis = setAnalysis;
exports.setPlayOnline = setPlayOnline;
exports.setPlayAFriend = setPlayAFriend;
exports.setPlayComputer = setPlayComputer;
exports.setTraining = setTraining;
exports.setOpeningSearch = setOpeningSearch;
exports.setDatabase = setDatabase;
exports.default = mainButtonsSlice.reducer;