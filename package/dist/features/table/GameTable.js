'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameTable = function GameTable(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });

  if (state.gameTable.open) {
    return _react2.default.createElement(
      _material.TableContainer,
      { sx: { mt: 1.5 } },
      _react2.default.createElement(
        _material.Table,
        { stickyHeader: true, size: 'small', 'aria-label': 'Chess Openings' },
        _react2.default.createElement(
          _material.TableBody,
          null,
          Object.entries(state.gameTable.game).map(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                key = _ref3[0],
                val = _ref3[1];

            return _react2.default.createElement(
              _material.TableRow,
              { key: key },
              _react2.default.createElement(
                _material.TableCell,
                { align: 'right' },
                key
              ),
              _react2.default.createElement(
                _material.TableCell,
                { align: 'left' },
                val
              )
            );
          })
        )
      )
    );
  }

  return null;
};

exports.default = GameTable;