'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Cached = require('@mui/icons-material/Cached');

var _Cached2 = _interopRequireDefault(_Cached);

var _FastForward = require('@mui/icons-material/FastForward');

var _FastForward2 = _interopRequireDefault(_FastForward);

var _FastRewind = require('@mui/icons-material/FastRewind');

var _FastRewind2 = _interopRequireDefault(_FastRewind);

var _SkipNext = require('@mui/icons-material/SkipNext');

var _SkipNext2 = _interopRequireDefault(_SkipNext);

var _SkipPrevious = require('@mui/icons-material/SkipPrevious');

var _SkipPrevious2 = _interopRequireDefault(_SkipPrevious);

var _material = require('@mui/material');

var _boardSlice = require('../features/board/boardSlice');

var board = _interopRequireWildcard(_boardSlice);

var _historySlice = require('../features/historySlice');

var history = _interopRequireWildcard(_historySlice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var History = function History() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  return _react2.default.createElement(
    _material.ButtonGroup,
    { variant: 'text', 'aria-label': 'History', size: 'medium' },
    _react2.default.createElement(_material.Button, {
      startIcon: _react2.default.createElement(_Cached2.default, null),
      onClick: function onClick() {
        return dispatch(board.flip());
      }
    }),
    _react2.default.createElement(_material.Button, {
      startIcon: _react2.default.createElement(_FastRewind2.default, null),
      disabled: state.board.history.length - 1 - Math.abs(state.history.back) === 0,
      onClick: function onClick() {
        return dispatch(history.goTo({ back: state.board.history.length - 1 }));
      }
    }),
    _react2.default.createElement(_material.Button, {
      startIcon: _react2.default.createElement(_SkipPrevious2.default, null),
      disabled: state.board.history.length - 1 - Math.abs(state.history.back) === 0,
      onClick: function onClick() {
        dispatch(history.goBack());
        dispatch(board.browseHistory());
      }
    }),
    _react2.default.createElement(_material.Button, {
      startIcon: _react2.default.createElement(_SkipNext2.default, null),
      disabled: state.history.back === 0,
      onClick: function onClick() {
        dispatch(history.goForward());
        dispatch(board.browseHistory());
      }
    }),
    _react2.default.createElement(_material.Button, {
      startIcon: _react2.default.createElement(_FastForward2.default, null),
      disabled: state.history.back === 0,
      onClick: function onClick() {
        dispatch(history.goToEnd());
        dispatch(board.browseHistory());
      }
    })
  );
};

exports.default = History;