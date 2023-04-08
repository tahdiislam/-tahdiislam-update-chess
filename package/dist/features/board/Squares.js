'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Ascii = require('../../common/Ascii');

var _Ascii2 = _interopRequireDefault(_Ascii);

var _Pgn = require('../../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

var _Piece = require('../../common/Piece');

var _Piece2 = _interopRequireDefault(_Piece);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Squares = function Squares(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var filterMove = function filterMove() {
    if (state.mode.name === modeConst.PLAY) {
      if (!state.mode.play.accepted || state.board.isMate || state.mode.play.draw || state.mode.play.resign || state.mode.play.leave || state.mode.play.timer.over || state.history.back !== 0) {
        return false;
      }
      if (state.mode.play.accepted) {
        if (state.board.turn !== state.mode.play.color) {
          return false;
        }
      }
    } else if (state.mode.name !== modeConst.UNDEFINED) {
      if (state.board.isMate || state.history.back !== 0) {
        return false;
      }
    }

    return true;
  };

  var sqs = function sqs() {
    return _Ascii2.default.flip(state.board.flip, state.board.history[state.board.history.length - 1 + state.history.back]).map(function (rank, i) {
      return rank.map(function (piece, j) {
        var payload = { piece: piece };
        var isLegal = void 0,
            isSelected = void 0,
            isCheck = '';
        var color = (i + j) % 2 !== 0 ? _Pgn2.default.symbol.BLACK : _Pgn2.default.symbol.WHITE;
        state.board.flip === _Pgn2.default.symbol.WHITE ? payload = _extends({}, payload, {
          i: i,
          j: j,
          sq: _Ascii2.default.fromIndexToAlgebraic(i, j, state.board.size)
        }) : payload = _extends({}, payload, {
          i: state.board.size.ranks - 1 - i,
          j: state.board.size.files - 1 - j,
          sq: _Ascii2.default.fromIndexToAlgebraic(state.board.size.ranks - 1 - i, state.board.size.files - 1 - j, state.board.size)
        });
        if (state.board.picked) {
          if (state.board.picked.sq === payload.sq) {
            isSelected = 'isSelected';
          }
          if (state.board.picked.legal_sqs) {
            if (state.board.picked.legal_sqs.includes(payload.sq)) {
              isLegal = 'isLegal';
            }
          }
        } else if (state.board.isCheck) {
          if (state.board.turn === _Pgn2.default.symbol.WHITE) {
            if (piece === ' K ') {
              isCheck = 'isCheck';
            }
          } else if (state.board.turn === _Pgn2.default.symbol.BLACK) {
            if (piece === ' k ') {
              isCheck = 'isCheck';
            }
          }
        }

        return _react2.default.createElement(
          'div',
          {
            key: payload.sq,
            ref: function ref(el) {
              return props.sqsRef.current[payload.sq] = el;
            },
            className: ['sq', color, payload.sq, isLegal, isSelected, isCheck].join(' '),
            onClick: function onClick() {
              filterMove() ? props.handleMove(payload) : null;
            },
            onDrop: function onDrop(ev) {
              ev.preventDefault();
              filterMove() ? props.handleMove(payload) : null;
            },
            onDragOver: function onDragOver(ev) {
              ev.preventDefault();
            } },
          _Piece2.default.unicode[piece].char ? _react2.default.createElement('img', {
            ref: function ref(el) {
              return props.imgsRef.current[payload.sq] = el;
            },
            src: _Piece2.default.unicode[piece].char,
            draggable: _Piece2.default.color(piece) === state.board.turn ? true : false,
            onDragStart: function onDragStart() {
              filterMove() ? props.handleMove(payload) : null;
            }
          }) : null
        );
      });
    });
  };

  return _react2.default.createElement(
    'div',
    { className: [props.className, state.history.back !== 0 ? 'past' : 'present'].join(' ') },
    sqs()
  );
};

exports.default = Squares;