'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('../../app/store');

var _store2 = _interopRequireDefault(_store);

var _Wording = require('../../common/Wording.js');

var _Wording2 = _interopRequireDefault(_Wording);

var _boardSlice = require('../../features/board/boardSlice');

var board = _interopRequireWildcard(_boardSlice);

var _progressDialogSlice = require('../../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _WsEvent = require('../../features/ws/WsEvent');

var _WsEvent2 = _interopRequireDefault(_WsEvent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WsEventListener = function WsEventListener() {
  _classCallCheck(this, WsEventListener);
};

WsEventListener.listen = function (props, data) {
  return function (dispatch) {
    var cmd = Object.keys(data)[0];
    switch (true) {
      case '/leave' === cmd:
        if (data['/leave'] === _Wording2.default.verb.ACCEPT.toLowerCase()) {
          dispatch(_WsEvent2.default.onLeaveAccept());
        }
        break;
      case '/takeback' === cmd:
        if (data['/takeback'] === _Wording2.default.verb.PROPOSE.toLowerCase()) {
          dispatch(_WsEvent2.default.onTakebackPropose());
        } else if (data['/takeback'] === _Wording2.default.verb.ACCEPT.toLowerCase()) {
          dispatch(_WsEvent2.default.onTakebackAccept());
        }
        break;
      case '/draw' === cmd:
        if (data['/draw'] === _Wording2.default.verb.PROPOSE.toLowerCase()) {
          dispatch(_WsEvent2.default.onDrawPropose());
        } else if (data['/draw'] === _Wording2.default.verb.ACCEPT.toLowerCase()) {
          dispatch(_WsEvent2.default.onDrawAccept());
        } else if (data['/draw'] === _Wording2.default.verb.DECLINE.toLowerCase()) {
          dispatch(_WsEvent2.default.onDrawDecline());
        }
        break;
      case '/start' === cmd:
        dispatch(_WsEvent2.default.onStart(data));
        break;
      case '/accept' === cmd:
        dispatch(_WsEvent2.default.onAccept(data));
        break;
      case '/online_games' === cmd:
        dispatch(_WsEvent2.default.onOnlineGames(data));
        break;
      case '/play_lan' === cmd:
        if (_store2.default.getState().mode.name === modeConst.PLAY) {
          if (_store2.default.getState().mode.play.color !== data['/play_lan'].turn) {
            dispatch(board.playMove({ fen: data['/play_lan'].fen }));
          }
        }
        dispatch(_WsEvent2.default.onPlayLan(props, data));
        break;
      case '/legal_sqs' === cmd:
        dispatch(_WsEvent2.default.onLegalSqs(data));
        break;
      case '/heuristics' === cmd:
        dispatch(progressDialog.close());
        dispatch(_WsEvent2.default.onHeuristics(data));
        break;
      case '/heuristics_bar' === cmd:
        dispatch(_WsEvent2.default.onHeuristicsBar(data));
        break;
      case '/undo' === cmd:
        dispatch(_WsEvent2.default.onUndo(data));
        break;
      case '/resign' === cmd:
        if (data['/resign'] === _Wording2.default.verb.ACCEPT.toLowerCase()) {
          dispatch(_WsEvent2.default.onResignAccept());
        }
        break;
      case '/rematch' === cmd:
        if (data['/rematch'] === _Wording2.default.verb.PROPOSE.toLowerCase()) {
          dispatch(_WsEvent2.default.onRematchPropose());
        } else if (data['/rematch'] === _Wording2.default.verb.ACCEPT.toLowerCase()) {
          dispatch(_WsEvent2.default.onRematchAccept());
        } else if (data['/rematch'] === _Wording2.default.verb.DECLINE.toLowerCase()) {
          dispatch(_WsEvent2.default.onRematchDecline());
        }
        break;
      case '/restart' === cmd:
        dispatch(_WsEvent2.default.onRestart(data));
        break;
      case '/randomizer' === cmd:
        dispatch(progressDialog.close());
        dispatch(_WsEvent2.default.onRandomCheckmate(data));
        break;
      case '/stockfish' === cmd:
        dispatch(progressDialog.close());
        dispatch(_WsEvent2.default.onStockfish(data));
        break;
      case 'validate' === cmd:
        dispatch(progressDialog.close());
        dispatch(_WsEvent2.default.onValidate(data));
        break;
      default:
        break;
    }
  };
};

exports.default = WsEventListener;