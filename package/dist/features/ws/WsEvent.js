'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _store = require('../../app/store');

var _store2 = _interopRequireDefault(_store);

var _Pgn = require('../../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

var _Dispatcher = require('../../common/Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _heuristicsBarSlice = require('../../features/heuristicsBarSlice');

var heuristicsBar = _interopRequireWildcard(_heuristicsBarSlice);

var _infoAlertSlice = require('../../features/alert/infoAlertSlice');

var infoAlert = _interopRequireWildcard(_infoAlertSlice);

var _boardSlice = require('../../features/board/boardSlice');

var board = _interopRequireWildcard(_boardSlice);

var _acceptDrawDialogSlice = require('../../features/dialog/acceptDrawDialogSlice');

var acceptDrawDialog = _interopRequireWildcard(_acceptDrawDialogSlice);

var _acceptRematchDialogSlice = require('../../features/dialog/acceptRematchDialogSlice');

var acceptRematchDialog = _interopRequireWildcard(_acceptRematchDialogSlice);

var _acceptTakebackDialogSlice = require('../../features/dialog/acceptTakebackDialogSlice');

var acceptTakebackDialog = _interopRequireWildcard(_acceptTakebackDialogSlice);

var _createInviteCodeDialogSlice = require('../../features/dialog/createInviteCodeDialogSlice');

var createInviteCodeDialog = _interopRequireWildcard(_createInviteCodeDialogSlice);

var _heuristicsDialogSlice = require('../../features/dialog/heuristicsDialogSlice');

var heuristicsDialog = _interopRequireWildcard(_heuristicsDialogSlice);

var _playOnlineDialogSlice = require('../../features/dialog/playOnlineDialogSlice');

var playOnlineDialog = _interopRequireWildcard(_playOnlineDialogSlice);

var _progressDialogSlice = require('../../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _modeSlice = require('../../features/mode/modeSlice');

var mode = _interopRequireWildcard(_modeSlice);

var _gameTableSlice = require('../../features/table/gameTableSlice');

var gameTable = _interopRequireWildcard(_gameTableSlice);

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _variantSlice = require('../../features/variant/variantSlice');

var variant = _interopRequireWildcard(_variantSlice);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WsEvent = function WsEvent() {
  _classCallCheck(this, WsEvent);
};

WsEvent.onStartAnalysis = function (data) {
  return function (dispatch) {
    dispatch(mode.startAnalysis());
    if (data['/start'].variant === variantConst.CHESS_960) {
      dispatch(board.startChess960({ fen: data['/start'].fen }));
      dispatch(variant.startChess960({
        fen: data['/start'].fen,
        startPos: data['/start'].startPos
      }));
    } else if (data['/start'].variant === variantConst.CAPABLANCA_80) {
      dispatch(board.startCapablanca80({ fen: data['/start'].fen }));
      dispatch(variant.startCapablanca80());
    }
  };
};

WsEvent.onStartGm = function (data) {
  return function (dispatch) {
    dispatch(mode.setGm({
      color: data['/start'].color,
      movetext: null
    }));
  };
};

WsEvent.onStartFen = function (data) {
  return function (dispatch) {
    if (data['/start'].fen) {
      dispatch(mode.setFen({ fen: data['/start'].fen }));
      dispatch(board.startFen({ fen: data['/start'].fen }));
      if (data['/start'].variant === variantConst.CLASSICAL) {
        dispatch(variant.startClassical());
      } else if (data['/start'].variant === variantConst.CHESS_960) {
        dispatch(variant.startChess960({
          fen: data['/start'].fen,
          startPos: data['/start'].startPos
        }));
      } else if (data['/start'].variant === variantConst.CAPABLANCA_80) {
        dispatch(variant.startCapablanca80());
      }
      _WsAction2.default.heuristicsBar(_store2.default.getState(), _store2.default.getState().board.fen[_store2.default.getState().board.fen.length - 1], _store2.default.getState().variant.name);
    } else {
      dispatch(mode.startUndefined());
      dispatch(infoAlert.show({
        info: 'Invalid FEN, please try again with a different one.'
      }));
    }
  };
};

WsEvent.onStartPgn = function (data) {
  return function (dispatch) {
    if (data['/start'].movetext) {
      dispatch(mode.startPgn());
      dispatch(board.startPgn({
        turn: data['/start'].turn,
        movetext: data['/start'].movetext,
        fen: data['/start'].fen,
        history: data['/start'].history
      }));
      if (data['/start'].variant === variantConst.CLASSICAL) {
        dispatch(variant.startClassical());
        _Dispatcher2.default.openingAnalysisBySameMovetext(dispatch, data['/start'].movetext);
      } else if (data['/start'].variant === variantConst.CHESS_960) {
        dispatch(variant.startChess960({
          startPos: data['/start'].startPos
        }));
      } else if (data['/start'].variant === variantConst.CAPABLANCA_80) {
        dispatch(variant.startCapablanca80());
      }
      _WsAction2.default.heuristicsBar(_store2.default.getState(), _store2.default.getState().board.fen[_store2.default.getState().board.fen.length - 1], _store2.default.getState().variant.name);
    } else {
      dispatch(mode.startUndefined());
      dispatch(infoAlert.show({
        info: 'Invalid PGN movetext, please try again with a different one.'
      }));
    }
  };
};

WsEvent.onStartPlay = function (data) {
  return function (dispatch) {
    _Dispatcher2.default.initGui(dispatch);
    if (data['/start'].jwt) {
      var jwtDecoded = (0, _jwtDecode2.default)(data['/start'].jwt);
      if (data['/start'].variant === variantConst.CLASSICAL) {
        dispatch(variant.startClassical());
        dispatch(board.startFen({ fen: data['/start'].fen }));
      } else if (data['/start'].variant === variantConst.CHESS_960) {
        dispatch(variant.startChess960({
          fen: data['/start'].fen,
          startPos: data['/start'].startPos
        }));
        dispatch(board.startChess960({ fen: data['/start'].fen }));
      } else if (data['/start'].variant === variantConst.CAPABLANCA_80) {
        dispatch(variant.startCapablanca80());
        dispatch(board.startCapablanca80({ fen: data['/start'].fen }));
      }
      dispatch(mode.setPlay({
        jwt: data['/start'].jwt,
        jwt_decoded: jwtDecoded,
        hash: data['/start'].hash,
        color: jwtDecoded.color,
        takeback: null,
        draw: null,
        resign: null,
        rematch: null,
        leave: null,
        accepted: false,
        timer: {
          expiry_timestamp: null,
          over: null
        }
      }));
      if (jwtDecoded.color === _Pgn2.default.symbol.BLACK) {
        dispatch(board.flip());
      }
      dispatch(infoAlert.show({ info: 'Waiting for player to join...' }));
    } else {
      dispatch(createInviteCodeDialog.close());
      dispatch(mode.startUndefined());
      dispatch(infoAlert.show({
        info: 'Invalid FEN, please try again with a different one.'
      }));
    }
  };
};

WsEvent.onStartStockfishByColor = function (data) {
  return function (dispatch) {
    if (data['/start'].color === _Pgn2.default.symbol.BLACK) {
      dispatch(board.flip());
      _WsAction2.default.stockfish(_store2.default.getState());
    }
  };
};

WsEvent.onStartStockfishByFen = function (data) {
  return function (dispatch) {
    dispatch(board.startFen({ fen: data['/start'].fen }));
    if (data['/start'].color === _Pgn2.default.symbol.BLACK) {
      dispatch(board.flip());
    }
    _WsAction2.default.heuristicsBar(_store2.default.getState(), _store2.default.getState().board.fen[_store2.default.getState().board.fen.length - 1], _store2.default.getState().variant.name);
  };
};

WsEvent.onStart = function (data) {
  return function (dispatch) {
    dispatch(progressDialog.close());
    if (data['/start'].mode === modeConst.ANALYSIS) {
      dispatch(WsEvent.onStartAnalysis(data));
    } else if (data['/start'].mode === modeConst.GM) {
      dispatch(WsEvent.onStartGm(data));
    } else if (data['/start'].mode === modeConst.FEN) {
      dispatch(WsEvent.onStartFen(data));
    } else if (data['/start'].mode === modeConst.PGN) {
      dispatch(WsEvent.onStartPgn(data));
    } else if (data['/start'].mode === modeConst.PLAY) {
      dispatch(WsEvent.onStartPlay(data));
    } else if (data['/start'].mode === modeConst.STOCKFISH) {
      if (data['/start'].fen) {
        dispatch(WsEvent.onStartStockfishByFen(data));
      } else {
        dispatch(WsEvent.onStartStockfishByColor(data));
      }
    }
  };
};

WsEvent.onAccept = function (data) {
  return function (dispatch) {
    _Dispatcher2.default.initGui(dispatch);
    if (data['/accept'].jwt) {
      var jwtDecoded = (0, _jwtDecode2.default)(data['/accept'].jwt);
      if (jwtDecoded.variant === variantConst.CLASSICAL) {
        dispatch(variant.startClassical());
        dispatch(board.startFen({ fen: jwtDecoded.fen }));
      } else if (jwtDecoded.variant === variantConst.CHESS_960) {
        dispatch(variant.startChess960({
          fen: jwtDecoded.fen,
          startPos: jwtDecoded.startPos
        }));
        dispatch(board.startChess960({ fen: jwtDecoded.fen }));
      } else if (jwtDecoded.variant === variantConst.CAPABLANCA_80) {
        dispatch(variant.startCapablanca80());
        dispatch(board.startCapablanca80({ fen: jwtDecoded.fen }));
      }
      if (!_store2.default.getState().mode.play) {
        dispatch(mode.setPlay({
          jwt: data['/accept'].jwt,
          jwt_decoded: (0, _jwtDecode2.default)(data['/accept'].jwt),
          hash: data['/accept'].hash,
          color: jwtDecoded.color === _Pgn2.default.symbol.WHITE ? _Pgn2.default.symbol.BLACK : _Pgn2.default.symbol.WHITE,
          takeback: null,
          draw: null,
          resign: null,
          rematch: null,
          leave: null,
          accepted: false,
          timer: {
            expiry_timestamp: null,
            over: null
          }
        }));
      }
      if (_store2.default.getState().mode.play.color === _Pgn2.default.symbol.BLACK) {
        dispatch(board.flip());
      }
      dispatch(mode.acceptPlay());
      dispatch(playOnlineDialog.close());
    } else {
      dispatch(mode.startUndefined());
      dispatch(infoAlert.show({
        info: 'Invalid invite code, please try again with a different one.'
      }));
    }
  };
};

WsEvent.onOnlineGames = function (data) {
  return function (dispatch) {
    dispatch(playOnlineDialog.refresh(data['/online_games']));
  };
};

WsEvent.onLegalSqs = function (data) {
  return function (dispatch) {
    dispatch(board.legalSqs({
      piece: data['/legal_sqs'].identity,
      position: data['/legal_sqs'].position,
      sqs: data['/legal_sqs'].sqs,
      en_passant: data['/legal_sqs'].enPassant ? data['/legal_sqs'].enPassant : ''
    }));
  };
};

WsEvent.onPlayLan = function (props, data) {
  return function (dispatch) {
    var payload = {
      isCheck: data['/play_lan'].isCheck,
      isMate: data['/play_lan'].isMate,
      movetext: data['/play_lan'].movetext,
      fen: data['/play_lan'].fen
    };
    if (data['/play_lan'].isLegal) {
      if (data['/play_lan'].pgn === _Pgn2.default.symbol.CASTLING_LONG) {
        dispatch(board.castleLong(payload));
      } else if (data['/play_lan'].pgn === _Pgn2.default.symbol.CASTLING_SHORT) {
        dispatch(board.castleShort(payload));
      } else {
        dispatch(board.validMove(payload));
      }
      if (_store2.default.getState().variant.name === variantConst.CLASSICAL && _store2.default.getState().mode.name === modeConst.ANALYSIS) {
        _Dispatcher2.default.openingAnalysisByMovetext(dispatch, payload.movetext);
      } else if (_store2.default.getState().variant.name === variantConst.CLASSICAL && _store2.default.getState().mode.name === modeConst.GM) {
        dispatch(infoAlert.close());
        dispatch(progressDialog.open());
        fetch(props.api.prot + '://' + props.api.host + ':' + props.api.port + '/api/grandmaster', {
          method: 'POST',
          body: JSON.stringify({
            movetext: data['/play_lan'].movetext
          })
        }).then(function (res) {
          if (res.status === 200) {
            res.json().then(function (data) {
              var game = data[0];
              dispatch(mode.setGm({
                color: _Pgn2.default.symbol.WHITE,
                movetext: game.movetext
              }));
              dispatch(gameTable.show({
                game: {
                  Event: game.Event,
                  Site: game.Site,
                  Date: game.Date,
                  White: game.White,
                  Black: game.Black,
                  'White ELO': game.WhiteElo,
                  'Black ELO': game.BlackElo,
                  Result: game.Result,
                  ECO: game.ECO
                }
              }));
            });
          } else if (res.status === 204) {
            dispatch(gameTable.close());
            dispatch(infoAlert.show({
              info: 'This game was not found in the database, please try again with a different one.'
            }));
          }
        }).catch(function (error) {
          dispatch(infoAlert.show({ info: 'Whoops! Something went wrong, please try again.' }));
        }).finally(function () {
          dispatch(progressDialog.close());
        });
      } else if (_store2.default.getState().variant.name === variantConst.CLASSICAL && _store2.default.getState().mode.name === modeConst.STOCKFISH) {
        dispatch(progressDialog.open());
        _WsAction2.default.stockfish(_store2.default.getState());
      }
      _WsAction2.default.heuristicsBar(_store2.default.getState(), _store2.default.getState().board.fen[_store2.default.getState().board.fen.length - 1], _store2.default.getState().variant.name);
    }
  };
};

WsEvent.onHeuristics = function (data) {
  return function (dispatch) {
    dispatch(heuristicsDialog.open({
      dimensions: data['/heuristics'].dimensions,
      balance: data['/heuristics'].balance
    }));
  };
};

WsEvent.onHeuristicsBar = function (data) {
  return function (dispatch) {
    dispatch(heuristicsBar.updateBar({
      dimensions: data['/heuristics_bar'].dimensions,
      balance: data['/heuristics_bar'].balance
    }));
  };
};

WsEvent.onTakebackPropose = function () {
  return function (dispatch) {
    if (!_store2.default.getState().mode.play.takeback) {
      dispatch(acceptTakebackDialog.open());
    }
  };
};

WsEvent.onTakebackAccept = function () {
  return function (dispatch) {
    dispatch(mode.acceptTakeback());
  };
};

WsEvent.onDrawPropose = function () {
  return function (dispatch) {
    if (!_store2.default.getState().mode.play.draw) {
      dispatch(acceptDrawDialog.open());
    }
  };
};

WsEvent.onDrawAccept = function () {
  return function (dispatch) {
    dispatch(mode.acceptDraw());
    dispatch(infoAlert.show({ info: 'Draw offer accepted.' }));
  };
};

WsEvent.onDrawDecline = function () {
  return function (dispatch) {
    dispatch(mode.declineDraw());
    dispatch(infoAlert.show({ info: 'Draw offer declined.' }));
  };
};

WsEvent.onUndo = function (data) {
  return function (dispatch) {
    dispatch(board.undo(data['/undo']));
    if (data['/undo'].mode === modeConst.PLAY) {
      dispatch(mode.declineTakeback());
    } else if (data['/undo'].mode === modeConst.ANALYSIS) {
      _Dispatcher2.default.openingAnalysisByMovetext(dispatch, data['/undo'].movetext);
      _WsAction2.default.heuristicsBar(_store2.default.getState(), _store2.default.getState().board.fen[_store2.default.getState().board.fen.length - 1], _store2.default.getState().variant.name);
    }
  };
};

WsEvent.onResignAccept = function () {
  return function (dispatch) {
    dispatch(mode.acceptResign());
    dispatch(infoAlert.show({ info: 'Chess game resigned.' }));
  };
};

WsEvent.onRematchPropose = function () {
  return function (dispatch) {
    if (!_store2.default.getState().mode.play.rematch) {
      dispatch(acceptRematchDialog.open());
    }
  };
};

WsEvent.onRematchAccept = function () {
  return function (dispatch) {
    dispatch(mode.acceptRematch());
    dispatch(infoAlert.show({ info: 'Rematch accepted.' }));
  };
};

WsEvent.onRematchDecline = function () {
  return function (dispatch) {
    dispatch(mode.declineRematch());
    dispatch(infoAlert.show({ info: 'Rematch declined.' }));
  };
};

WsEvent.onLeaveAccept = function () {
  return function (dispatch) {
    dispatch(mode.acceptLeave());
    dispatch(infoAlert.show({ info: 'Your opponent left the game.' }));
  };
};

WsEvent.onRestart = function (data) {
  return function (dispatch) {
    var jwtDecoded = (0, _jwtDecode2.default)(data['/restart'].jwt);
    var expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + parseInt(jwtDecoded.min) * 60);
    dispatch(mode.setPlay({
      color: _store2.default.getState().mode.play.color,
      accepted: false
    }));
    dispatch(mode.setPlay({
      jwt: data['/restart'].jwt,
      jwt_decoded: jwtDecoded,
      hash: data['/restart'].hash,
      color: _store2.default.getState().mode.play.color,
      takeback: null,
      draw: null,
      resign: null,
      rematch: null,
      accepted: true,
      timer: {
        expiry_timestamp: expiryTimestamp,
        over: null
      }
    }));
    dispatch(board.start());
    if (_store2.default.getState().mode.play.color === _Pgn2.default.symbol.BLACK) {
      dispatch(board.flip());
    }
  };
};

WsEvent.onRandomCheckmate = function (data) {
  return function (dispatch) {
    if (data['/randomizer'].fen) {
      dispatch(mode.setStockfish({
        color: data['/randomizer'].turn,
        options: {
          "Skill Level": 20
        },
        params: {
          "depth": 12
        }
      }));
      _WsAction2.default.start(_store2.default.getState(), variantConst.CLASSICAL, modeConst.STOCKFISH, { fen: data['/randomizer'].fen });
    } else {
      dispatch(mode.startUndefined());
      dispatch(infoAlert.show({ info: 'Whoops! A random checkmate could not be loaded.' }));
    }
  };
};

WsEvent.onStockfish = function (data) {
  return function (dispatch) {
    if (data['/stockfish']) {
      dispatch(board.gm({
        turn: data['/stockfish'].state.turn,
        isCheck: data['/stockfish'].state.isCheck,
        isMate: data['/stockfish'].state.isMate,
        movetext: data['/stockfish'].state.movetext,
        fen: data['/stockfish'].state.fen
      }));
      _WsAction2.default.heuristicsBar(_store2.default.getState(), _store2.default.getState().board.fen[_store2.default.getState().board.fen.length - 1], _store2.default.getState().variant.name);
      _Dispatcher2.default.openingAnalysisByMovetext(dispatch, data['/stockfish'].state.movetext);
    }
  };
};

WsEvent.onValidate = function (data) {
  return function (dispatch) {
    _Dispatcher2.default.initGui(dispatch);
    if (data['validate']) {
      dispatch(mode.startUndefined());
      dispatch(infoAlert.show({
        info: 'Whoops! Something went wrong, please try again with different data.'
      }));
    }
  };
};

exports.default = WsEvent;