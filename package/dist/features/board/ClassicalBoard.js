'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _Animation = require('../../common/Animation');

var _Animation2 = _interopRequireDefault(_Animation);

var _Piece = require('../../common/Piece');

var _Piece2 = _interopRequireDefault(_Piece);

var _boardSlice = require('../../features/board/boardSlice');

var boardSlice = _interopRequireWildcard(_boardSlice);

var _Squares = require('../../features/board/Squares');

var _Squares2 = _interopRequireDefault(_Squares);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClassicalBoard = function ClassicalBoard(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var isInitialMount = (0, _react.useRef)(true);
  var maxWidth = {
    '600': (0, _material.useMediaQuery)("(max-width:600px)"),
    '900': (0, _material.useMediaQuery)("(max-width:900px)")
  };
  var sqSize = maxWidth['600'] ? 12 : maxWidth['900'] ? 10 : 4.1;
  var sqsRef = (0, _react.useRef)([]);
  var imgsRef = (0, _react.useRef)([]);

  (0, _react.useEffect)(function () {
    if (isInitialMount.name) {
      isInitialMount.name = false;
    } else {
      if (state.board.movetext) {
        if (state.mode.name === modeConst.STOCKFISH) {
          if (state.mode.computer.color === state.board.turn) {
            new _Animation2.default(sqSize, imgsRef, sqsRef).pieces();
          }
        } else if (state.mode.name === modeConst.PLAY) {
          if (state.mode.play.color === state.board.turn) {
            new _Animation2.default(sqSize, imgsRef, sqsRef).pieces();
          }
        }
      }
    }
  }, [state.board.history.length]);

  var handleMove = function handleMove(payload) {
    if (state.board.turn === _Piece2.default.color(payload.piece)) {
      dispatch(boardSlice.pickPiece(payload));
      _WsAction2.default.legalSqs(state, payload.sq);
    } else if (state.board.picked) {
      dispatch(boardSlice.leavePiece(payload));
    }
  };

  return _react2.default.createElement(_Squares2.default, { props: {
      className: 'classicalBoard',
      imgsRef: imgsRef,
      sqsRef: sqsRef,
      handleMove: handleMove
    } });
};

exports.default = ClassicalBoard;