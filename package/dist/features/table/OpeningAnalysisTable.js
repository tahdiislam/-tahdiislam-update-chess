'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _mainButtonsConst = require('../../features/mainButtonsConst');

var mainButtonsConst = _interopRequireWildcard(_mainButtonsConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OpeningAnalysisTable = function OpeningAnalysisTable(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });

  if (state.variant.name === variantConst.CLASSICAL && state.openingAnalysisTable.open && state.mainButtons.name !== mainButtonsConst.TRAINING) {
    return _react2.default.createElement(
      _material.TableContainer,
      { sx: { mt: 1.5 } },
      _react2.default.createElement(
        _material.Table,
        { stickyHeader: true, size: 'small', 'aria-label': 'Chess Openings' },
        _react2.default.createElement(
          _material.TableBody,
          null,
          state.openingAnalysisTable.rows.map(function (item, i) {
            return _react2.default.createElement(
              _material.TableRow,
              { key: i },
              _react2.default.createElement(
                _material.TableCell,
                { align: 'left' },
                item.eco
              ),
              _react2.default.createElement(
                _material.TableCell,
                { align: 'left' },
                item.name
              )
            );
          })
        )
      )
    );
  }

  return null;
};

exports.default = OpeningAnalysisTable;