'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gm = exports.playMove = exports.validMove = exports.undo = exports.legalSqs = exports.flip = exports.castleLong = exports.castleShort = exports.browseHistory = exports.leavePiece = exports.pickPiece = exports.startPgn = exports.startFen = exports.startChess960 = exports.startCapablanca80 = exports.start = undefined;

var _toolkit = require('@reduxjs/toolkit');

var _Ascii = require('../../common/Ascii');

var _Ascii2 = _interopRequireDefault(_Ascii);

var _Pgn = require('../../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  lan: '',
  turn: _Pgn2.default.symbol.WHITE,
  isCheck: false,
  isMate: false,
  picked: null,
  history: [_Ascii2.default.toAscii('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')],
  fen: ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -'],
  movetext: '',
  flip: _Pgn2.default.symbol.WHITE,
  size: {
    files: 8,
    ranks: 8
  }
};

var boardSlice = (0, _toolkit.createSlice)({
  name: 'board',
  initialState: initialState,
  reducers: {
    start: function start() {
      return initialState;
    },
    startCapablanca80: function startCapablanca80(state, action) {
      var fenSplit = action.payload.fen.split(' ');
      state.fen = [action.payload.fen];
      state.turn = fenSplit[1];
      state.history = [_Ascii2.default.toAscii(fenSplit[0])];
      state.size = {
        files: 10,
        ranks: 8
      };
    },
    startChess960: function startChess960(state, action) {
      var fenSplit = action.payload.fen.split(' ');
      state.fen = [action.payload.fen];
      state.turn = fenSplit[1];
      state.history = [_Ascii2.default.toAscii(fenSplit[0])];
    },
    startFen: function startFen(state, action) {
      var fenSplit = action.payload.fen.split(' ');
      state.fen = [action.payload.fen];
      state.turn = fenSplit[1];
      state.history = [_Ascii2.default.toAscii(fenSplit[0])];
    },
    startPgn: function startPgn(state, action) {
      state.fen = action.payload.fen;
      state.turn = action.payload.turn;
      state.history = action.payload.history;
      state.movetext = action.payload.movetext;
    },
    pickPiece: function pickPiece(state, action) {
      state.lan = action.payload.sq;
      state.picked = {
        i: action.payload.i,
        j: action.payload.j,
        sq: action.payload.sq,
        piece: state.history[state.history.length - 1][action.payload.i][action.payload.j]
      };
    },
    leavePiece: function leavePiece(state, action) {
      var newTurn = state.turn === _Pgn2.default.symbol.WHITE ? _Pgn2.default.symbol.BLACK : _Pgn2.default.symbol.WHITE;
      var newAscii = JSON.parse(JSON.stringify(state.history[state.history.length - 1]));
      var newHistory = JSON.parse(JSON.stringify(state.history));
      if (state.picked.piece === ' . ') {
        state.picked = null;
      } else if (state.picked.legal_sqs.includes(action.payload.sq)) {
        newAscii[state.picked.i][state.picked.j] = ' . ';
        newAscii[action.payload.i][action.payload.j] = state.picked.piece;
        if (state.picked.en_passant) {
          if (action.payload.sq.charAt(0) === state.picked.en_passant.charAt(0)) {
            var index = _Ascii2.default.fromAlgebraicToIndex(state.picked.en_passant, state.size);
            newAscii[index[0]][index[1]] = ' . ';
          }
        }
        newHistory.push(newAscii);
        state.lan += action.payload.sq;
        state.turn = newTurn;
        state.isCheck = false;
        state.isMate = false;
        state.picked = null;
        state.history = newHistory;
      }
    },
    browseHistory: function browseHistory(state) {
      state.picked = null;
      state.lan = '';
    },
    castleShort: function castleShort(state, action) {
      var newHistory = JSON.parse(JSON.stringify(state.history));
      var newFen = JSON.parse(JSON.stringify(state.fen));
      newHistory[newHistory.length - 1] = _Ascii2.default.toAscii(action.payload.fen.split(' ')[0]);
      newFen.push(action.payload.fen);
      state.lan = '';
      state.fen = newFen;
      state.isCheck = action.payload.isCheck;
      state.isMate = action.payload.isMate;
      state.picked = null;
      state.history = newHistory;
      state.movetext = action.payload.movetext;
    },
    castleLong: function castleLong(state, action) {
      var newHistory = JSON.parse(JSON.stringify(state.history));
      var newFen = JSON.parse(JSON.stringify(state.fen));
      newHistory[newHistory.length - 1] = _Ascii2.default.toAscii(action.payload.fen.split(' ')[0]);
      newFen.push(action.payload.fen);
      state.lan = '';
      state.fen = newFen;
      state.isCheck = action.payload.isCheck;
      state.isMate = action.payload.isMate;
      state.picked = null;
      state.history = newHistory;
      state.movetext = action.payload.movetext;
    },
    flip: function flip(state) {
      state.flip = state.flip === _Pgn2.default.symbol.WHITE ? _Pgn2.default.symbol.BLACK : _Pgn2.default.symbol.WHITE;
    },
    legalSqs: function legalSqs(state, action) {
      state.picked.legal_sqs = action.payload.sqs;
      state.picked.en_passant = action.payload.en_passant;
    },
    undo: function undo(state, action) {
      var newHistory = JSON.parse(JSON.stringify(state.history));
      var newFen = JSON.parse(JSON.stringify(state.fen));
      newHistory.splice(-1);
      newFen.splice(-1);
      state.lan = '';
      state.fen = newFen;
      state.turn = action.payload.turn;
      state.isCheck = action.payload.isCheck;
      state.isMate = action.payload.isMate;
      state.picked = null;
      state.history = newHistory;
      state.movetext = action.payload.movetext;
    },
    validMove: function validMove(state, action) {
      var newHistory = JSON.parse(JSON.stringify(state.history));
      var newFen = JSON.parse(JSON.stringify(state.fen));
      newHistory[newHistory.length - 1] = _Ascii2.default.toAscii(action.payload.fen.split(' ')[0]);
      newFen.push(action.payload.fen);
      state.lan = '';
      state.fen = newFen;
      state.isCheck = action.payload.isCheck;
      state.isMate = action.payload.isMate;
      state.picked = null;
      state.history = newHistory;
      state.movetext = action.payload.movetext;
    },
    playMove: function playMove(state, action) {
      var newHistory = JSON.parse(JSON.stringify(state.history));
      newHistory.push(_Ascii2.default.toAscii(action.payload.fen.split(' ')[0]));
      state.turn = state.turn === _Pgn2.default.symbol.WHITE ? _Pgn2.default.symbol.BLACK : _Pgn2.default.symbol.WHITE;
      state.history = newHistory;
    },
    gm: function gm(state, action) {
      var newHistory = JSON.parse(JSON.stringify(state.history));
      var newFen = JSON.parse(JSON.stringify(state.fen));
      newHistory.push(_Ascii2.default.toAscii(action.payload.fen.split(' ')[0]));
      newFen.push(action.payload.fen);
      state.lan = '';
      state.fen = newFen;
      state.turn = action.payload.turn;
      state.isCheck = action.payload.isCheck;
      state.isMate = action.payload.isMate;
      state.picked = null;
      state.history = newHistory;
      state.movetext = action.payload.movetext;
    }
  }
});

var _boardSlice$actions = boardSlice.actions,
    start = _boardSlice$actions.start,
    startCapablanca80 = _boardSlice$actions.startCapablanca80,
    startChess960 = _boardSlice$actions.startChess960,
    startFen = _boardSlice$actions.startFen,
    startPgn = _boardSlice$actions.startPgn,
    pickPiece = _boardSlice$actions.pickPiece,
    leavePiece = _boardSlice$actions.leavePiece,
    browseHistory = _boardSlice$actions.browseHistory,
    castleShort = _boardSlice$actions.castleShort,
    castleLong = _boardSlice$actions.castleLong,
    flip = _boardSlice$actions.flip,
    legalSqs = _boardSlice$actions.legalSqs,
    undo = _boardSlice$actions.undo,
    validMove = _boardSlice$actions.validMove,
    playMove = _boardSlice$actions.playMove,
    gm = _boardSlice$actions.gm;
exports.start = start;
exports.startCapablanca80 = startCapablanca80;
exports.startChess960 = startChess960;
exports.startFen = startFen;
exports.startPgn = startPgn;
exports.pickPiece = pickPiece;
exports.leavePiece = leavePiece;
exports.browseHistory = browseHistory;
exports.castleShort = castleShort;
exports.castleLong = castleLong;
exports.flip = flip;
exports.legalSqs = legalSqs;
exports.undo = undo;
exports.validMove = validMove;
exports.playMove = playMove;
exports.gm = gm;
exports.default = boardSlice.reducer;