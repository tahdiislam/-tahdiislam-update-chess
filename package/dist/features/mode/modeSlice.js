'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptLeave = exports.proposeRematch = exports.declineRematch = exports.acceptRematch = exports.timeOver = exports.acceptResign = exports.proposeDraw = exports.declineDraw = exports.acceptDraw = exports.proposeTakeback = exports.declineTakeback = exports.acceptTakeback = exports.acceptPlay = exports.gmMovetext = exports.setStockfish = exports.setPlay = exports.setGm = exports.setFen = exports.startUndefined = exports.startPgn = exports.startAnalysis = undefined;

var _toolkit = require('@reduxjs/toolkit');

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _Wording = require('../../common/Wording.js');

var _Wording2 = _interopRequireDefault(_Wording);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  name: modeConst.ANALYSIS
};

var modeSlice = (0, _toolkit.createSlice)({
  name: 'mode',
  initialState: initialState,
  reducers: {
    startAnalysis: function startAnalysis() {
      return initialState;
    },
    startPgn: function startPgn(state) {
      state.name = modeConst.PGN;
    },
    startUndefined: function startUndefined(state) {
      state.name = modeConst.UNDEFINED;
    },
    setFen: function setFen(state, action) {
      state.name = modeConst.FEN;
      state.fen = action.payload.fen;
    },
    setGm: function setGm(state, action) {
      state.name = modeConst.GM;
      state.gm = action.payload;
    },
    setPlay: function setPlay(state, action) {
      state.name = modeConst.PLAY;
      state.play = action.payload;
    },
    setStockfish: function setStockfish(state, action) {
      state.name = modeConst.STOCKFISH;
      state.computer = action.payload;
    },
    gmMovetext: function gmMovetext(state, action) {
      state.gm.movetext = action.payload.movetext;
    },
    acceptPlay: function acceptPlay(state) {
      var expiryTimestamp = new Date();
      expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + parseInt(state.play.jwt_decoded.min) * 60);
      state.play.accepted = true;
      state.play.timer = {
        expiry_timestamp: expiryTimestamp,
        over: null
      };
    },
    acceptTakeback: function acceptTakeback(state) {
      state.play.takeback = _Wording2.default.verb.ACCEPT.toLowerCase();
    },
    declineTakeback: function declineTakeback(state) {
      state.play.takeback = null;
    },
    proposeTakeback: function proposeTakeback(state) {
      state.play.takeback = _Wording2.default.verb.PROPOSE.toLowerCase();
    },
    acceptDraw: function acceptDraw(state) {
      state.play.draw = _Wording2.default.verb.ACCEPT.toLowerCase();
    },
    declineDraw: function declineDraw(state) {
      state.play.draw = null;
    },
    proposeDraw: function proposeDraw(state) {
      state.play.draw = _Wording2.default.verb.PROPOSE.toLowerCase();
    },
    acceptResign: function acceptResign(state) {
      state.play.resign = _Wording2.default.verb.ACCEPT.toLowerCase();
    },
    timeOver: function timeOver(state, action) {
      state.play.timer.over = action.payload.color;
    },
    acceptRematch: function acceptRematch(state) {
      state.play.rematch = _Wording2.default.verb.ACCEPT.toLowerCase();
    },
    declineRematch: function declineRematch(state) {
      state.play.rematch = null;
    },
    proposeRematch: function proposeRematch(state) {
      state.play.rematch = _Wording2.default.verb.PROPOSE.toLowerCase();
    },
    acceptLeave: function acceptLeave(state) {
      state.play.leave = _Wording2.default.verb.ACCEPT.toLowerCase();
    }
  }
});

var _modeSlice$actions = modeSlice.actions,
    startAnalysis = _modeSlice$actions.startAnalysis,
    startPgn = _modeSlice$actions.startPgn,
    startUndefined = _modeSlice$actions.startUndefined,
    setFen = _modeSlice$actions.setFen,
    setGm = _modeSlice$actions.setGm,
    setPlay = _modeSlice$actions.setPlay,
    setStockfish = _modeSlice$actions.setStockfish,
    gmMovetext = _modeSlice$actions.gmMovetext,
    acceptPlay = _modeSlice$actions.acceptPlay,
    acceptTakeback = _modeSlice$actions.acceptTakeback,
    declineTakeback = _modeSlice$actions.declineTakeback,
    proposeTakeback = _modeSlice$actions.proposeTakeback,
    acceptDraw = _modeSlice$actions.acceptDraw,
    declineDraw = _modeSlice$actions.declineDraw,
    proposeDraw = _modeSlice$actions.proposeDraw,
    acceptResign = _modeSlice$actions.acceptResign,
    timeOver = _modeSlice$actions.timeOver,
    acceptRematch = _modeSlice$actions.acceptRematch,
    declineRematch = _modeSlice$actions.declineRematch,
    proposeRematch = _modeSlice$actions.proposeRematch,
    acceptLeave = _modeSlice$actions.acceptLeave;
exports.startAnalysis = startAnalysis;
exports.startPgn = startPgn;
exports.startUndefined = startUndefined;
exports.setFen = setFen;
exports.setGm = setGm;
exports.setPlay = setPlay;
exports.setStockfish = setStockfish;
exports.gmMovetext = gmMovetext;
exports.acceptPlay = acceptPlay;
exports.acceptTakeback = acceptTakeback;
exports.declineTakeback = declineTakeback;
exports.proposeTakeback = proposeTakeback;
exports.acceptDraw = acceptDraw;
exports.declineDraw = declineDraw;
exports.proposeDraw = proposeDraw;
exports.acceptResign = acceptResign;
exports.timeOver = timeOver;
exports.acceptRematch = acceptRematch;
exports.declineRematch = declineRematch;
exports.proposeRematch = proposeRematch;
exports.acceptLeave = acceptLeave;
exports.default = modeSlice.reducer;