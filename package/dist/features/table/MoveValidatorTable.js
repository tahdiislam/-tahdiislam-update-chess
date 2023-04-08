'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

var _Movetext = require('../../common/Movetext.js');

var _Movetext2 = _interopRequireDefault(_Movetext);

var _historySlice = require('../../features/historySlice');

var history = _interopRequireWildcard(_historySlice);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  table: {
    maxHeight: 190,
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  move: {
    "&:hover": {
      color: "#ffffff",
      background: "#3d8cd9 !important",
      cursor: 'pointer'
    }
  },
  currentMove: {
    color: "#ffffff !important",
    background: "#1976d2 !important",
    fontWeight: 'bold !important'
  }
};

var MoveValidatorTable = function MoveValidatorTable(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  (0, _react.useEffect)(function () {
    if (state.board.lan && !state.board.picked) {
      _WsAction2.default.playLan(state);
    }
  }, [state.board.picked]);

  var highlight = function highlight(n) {
    if (n === state.board.history.length + state.history.back - 1) {
      return styles.currentMove;
    }

    return {};
  };

  var tableRows = function tableRows() {
    return _Movetext2.default.toRows(state.board.movetext).map(function (row, i) {
      return _react2.default.createElement(
        _material.TableRow,
        { key: i },
        _react2.default.createElement(
          _material.TableCell,
          null,
          i + 1
        ),
        _react2.default.createElement(
          _material.TableCell,
          {
            sx: [styles.move, highlight((i + 1) * 2 - 1)],
            onClick: function onClick() {
              return dispatch(history.goTo({
                back: state.board.history.length - 1 - ((i + 1) * 2 - 1) }));
            }
          },
          row.w
        ),
        _react2.default.createElement(
          _material.TableCell,
          {
            sx: [styles.move, highlight((i + 1) * 2)],
            onClick: function onClick() {
              var back = state.board.history.length - 1 - (i + 1) * 2;
              if (back >= 0) {
                dispatch(history.goTo({ back: back }));
              }
            }
          },
          row.b
        )
      );
    });
  };

  return _react2.default.createElement(
    _material.TableContainer,
    { className: 'noTextSelection', sx: styles.table },
    _react2.default.createElement(
      _material.Table,
      { stickyHeader: true, size: 'small', 'aria-label': 'Movetext' },
      _react2.default.createElement(
        _material.TableBody,
        null,
        tableRows()
      )
    )
  );
};

exports.default = MoveValidatorTable;