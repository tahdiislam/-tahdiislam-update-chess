'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _recharts = require('recharts');

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _material = require('@mui/material');

var _infoAlertSlice = require('../../features/alert/infoAlertSlice');

var infoAlert = _interopRequireWildcard(_infoAlertSlice);

var _openingsStatsDialogSlice = require('../../features/dialog/openingsStatsDialogSlice');

var openingsStatsDialog = _interopRequireWildcard(_openingsStatsDialogSlice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OpeningsStatsDialog = function OpeningsStatsDialog(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _React$useState = _react2.default.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      result = _React$useState2[0],
      setResult = _React$useState2[1];

  return _react2.default.createElement(
    _material.Dialog,
    { open: state.openingsStatsDialog.open, maxWidth: 'md', fullWidth: true },
    _react2.default.createElement(
      _material.DialogTitle,
      null,
      'Top 50 Openings',
      _react2.default.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            return dispatch(openingsStatsDialog.close());
          } },
        _react2.default.createElement(_Close2.default, null)
      )
    ),
    _react2.default.createElement(
      _material.DialogContent,
      null,
      _react2.default.createElement(
        _recharts.ResponsiveContainer,
        { width: '100%', aspect: 4.0 / 2.0 },
        _react2.default.createElement(
          _recharts.BarChart,
          {
            width: 500,
            height: 300,
            data: state.openingsStatsDialog.stats.winRateForWhite,
            margin: {
              right: 30,
              left: 20
            }
          },
          _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
          _react2.default.createElement(_recharts.XAxis, { dataKey: 'ECO' }),
          _react2.default.createElement(_recharts.YAxis, null),
          _react2.default.createElement(_recharts.Tooltip, null),
          _react2.default.createElement(_recharts.Bar, { dataKey: 'total', fill: '#6082b6' })
        )
      ),
      _react2.default.createElement(
        _material.Typography,
        {
          gutterBottom: true,
          align: 'center'
        },
        'Win Rate for White'
      ),
      _react2.default.createElement(
        _recharts.ResponsiveContainer,
        { width: '100%', aspect: 4.0 / 2.0 },
        _react2.default.createElement(
          _recharts.BarChart,
          {
            width: 500,
            height: 300,
            data: state.openingsStatsDialog.stats.winRateForBlack,
            margin: {
              top: 30,
              right: 30,
              left: 20
            }
          },
          _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
          _react2.default.createElement(_recharts.XAxis, { dataKey: 'ECO' }),
          _react2.default.createElement(_recharts.YAxis, null),
          _react2.default.createElement(_recharts.Tooltip, null),
          _react2.default.createElement(_recharts.Bar, { dataKey: 'total', fill: '#6082b6' })
        )
      ),
      _react2.default.createElement(
        _material.Typography,
        {
          gutterBottom: true,
          align: 'center'
        },
        'Win Rate for Black'
      ),
      _react2.default.createElement(
        _recharts.ResponsiveContainer,
        { width: '100%', aspect: 4.0 / 2.0 },
        _react2.default.createElement(
          _recharts.BarChart,
          {
            width: 500,
            height: 300,
            data: state.openingsStatsDialog.stats.drawRate,
            margin: {
              top: 30,
              right: 30,
              left: 20
            }
          },
          _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
          _react2.default.createElement(_recharts.XAxis, { dataKey: 'ECO' }),
          _react2.default.createElement(_recharts.YAxis, null),
          _react2.default.createElement(_recharts.Tooltip, null),
          _react2.default.createElement(_recharts.Bar, { dataKey: 'total', fill: '#6082b6' })
        )
      ),
      _react2.default.createElement(
        _material.Typography,
        {
          gutterBottom: true,
          align: 'center'
        },
        'Draw Rate'
      )
    )
  );
};

exports.default = OpeningsStatsDialog;