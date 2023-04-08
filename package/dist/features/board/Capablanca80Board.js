'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

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

var Capablanca80Board = function Capablanca80Board(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var maxWidth = {
    '600': (0, _material.useMediaQuery)("(max-width:600px)"),
    '900': (0, _material.useMediaQuery)("(max-width:900px)")
  };
  var sqSize = maxWidth['600'] ? 12 : maxWidth['900'] ? 10 : 4.1;
  var sqsRef = (0, _react.useRef)([]);
  var imgsRef = (0, _react.useRef)([]);

  var handleMove = function handleMove(payload) {
    if (state.board.turn === _Piece2.default.color(payload.piece)) {
      dispatch(boardSlice.pickPiece(payload));
      _WsAction2.default.legalSqs(state, payload.sq);
    } else if (state.board.picked) {
      dispatch(boardSlice.leavePiece(payload));
    }
  };

  return _react2.default.createElement(_Squares2.default, { props: {
      className: 'capablanca80Board',
      imgsRef: imgsRef,
      sqsRef: sqsRef,
      handleMove: handleMove
    } });
};

exports.default = Capablanca80Board;