'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _recharts = require('recharts');

var _material = require('@mui/material/');

var _html2canvas = require('html2canvas');

var _html2canvas2 = _interopRequireDefault(_html2canvas);

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _heuristicsDialogSlice = require('../../features/dialog/heuristicsDialogSlice');

var heuristicsDialog = _interopRequireWildcard(_heuristicsDialogSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var handleDownloadImage = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var heuristics, canvas, a;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            heuristics = document.getElementsByClassName('heuristic-picture')[0];
            _context.next = 3;
            return (0, _html2canvas2.default)(heuristics, {
              logging: false,
              width: heuristics.clientWidth,
              height: heuristics.clientHeight
            });

          case 3:
            canvas = _context.sent;
            a = document.createElement('a');

            a.href = canvas.toDataURL('image/png', 1);
            a.download = "heuristics.png";
            a.click();
            a.remove();

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function handleDownloadImage() {
    return _ref.apply(this, arguments);
  };
}();

var initData = function initData(dim) {
  var data = {};
  dim.forEach(function (item) {
    return data[item] = [];
  });
  return data;
};

var charts = function charts(data) {
  return Object.keys(data).map(function (key) {
    return React.createElement(
      _material.Grid,
      { key: key, item: true, xs: 12, sm: 6, md: 3 },
      React.createElement(
        _recharts.ResponsiveContainer,
        { width: '100%', aspect: 4.0 / 3.0 },
        React.createElement(
          _recharts.LineChart,
          { data: data[key] },
          React.createElement(_recharts.YAxis, { domain: [-1, 1] }),
          React.createElement(_recharts.Legend, null),
          React.createElement(_recharts.Line, { type: 'monotone', dataKey: key, stroke: '#007a99', dot: false, strokeWidth: 2 })
        )
      )
    );
  });
};

var Heuristics = function Heuristics() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  if (state.heuristicsDialog.heuristics) {
    var data = initData(state.heuristicsDialog.heuristics.dimensions);
    state.heuristicsDialog.heuristics.balance.forEach(function (item, i) {
      state.heuristicsDialog.heuristics.dimensions.forEach(function (dimension, j) {
        data[dimension].push(_defineProperty({}, dimension, item[j]));
      });
    });
    return React.createElement(
      _material.Grid,
      {
        className: 'heuristic-picture',
        container: true,
        spacing: 3
      },
      charts(data)
    );
  }

  return null;
};

var Transition = React.forwardRef(function Transition(props, ref) {
  return React.createElement(_material.Slide, _extends({ direction: 'up', ref: ref }, props));
});

var HeuristicsDialog = function HeuristicsDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  return React.createElement(
    _material.Dialog,
    {
      fullScreen: true,
      open: state.heuristicsDialog.open,
      onClose: function onClose() {
        return dispatch(heuristicsDialog.close());
      },
      TransitionComponent: Transition
    },
    React.createElement(
      _material.AppBar,
      { sx: { position: 'relative' } },
      React.createElement(
        _material.Toolbar,
        null,
        React.createElement(
          _material.IconButton,
          {
            edge: 'start',
            color: 'inherit',
            onClick: function onClick() {
              return dispatch(heuristicsDialog.close());
            },
            'aria-label': 'close'
          },
          React.createElement(_Close2.default, null)
        ),
        React.createElement(
          _material.Typography,
          { sx: { ml: 2, flex: 1 }, variant: 'h6', component: 'div' },
          'Heuristics'
        ),
        React.createElement(
          _material.Button,
          { color: 'inherit', onClick: function onClick() {
              return handleDownloadImage();
            } },
          'Download'
        ),
        React.createElement(
          _material.Button,
          { autoFocus: true, color: 'inherit', onClick: function onClick() {
              return dispatch(heuristicsDialog.close());
            } },
          'Close'
        )
      )
    ),
    React.createElement(
      _material.Alert,
      {
        className: 'info-alert',
        severity: 'info',
        style: { margin: 15 }
      },
      'A chess game can be plotted in terms of balance. +1 is the best possible evaluation for White and -1 the best possible evaluation for Black. Both forces being set to 0 means they\'re balanced.'
    ),
    React.createElement(Heuristics, null)
  );
};

exports.default = HeuristicsDialog;