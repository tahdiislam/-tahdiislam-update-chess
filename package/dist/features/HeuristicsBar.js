'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initData = function initData(dim, balance) {
  var data = [];

  dim.forEach(function (item, i) {
    if (balance[i] !== 0) {
      data.push({ name: item, val: balance[i] });
    }
  });

  data.sort(function (a, b) {
    return b.val - a.val;
  });

  return data;
};

var HeuristicsBar = function HeuristicsBar() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  if (state.settingsDialog.fields.heuristics === 'on' && state.heuristicsBar.heuristics) {
    var data = initData(state.heuristicsBar.heuristics.dimensions, state.heuristicsBar.heuristics.balance);

    var gradientOffset = function gradientOffset() {
      var dataMax = Math.max.apply(Math, _toConsumableArray(data.map(function (i) {
        return i.val;
      })));
      var dataMin = Math.min.apply(Math, _toConsumableArray(data.map(function (i) {
        return i.val;
      })));
      if (dataMax <= 0) {
        return 0;
      }
      if (dataMin >= 0) {
        return 1;
      }

      return dataMax / (dataMax - dataMin);
    };

    var off = gradientOffset();

    return _react2.default.createElement(
      _recharts.ResponsiveContainer,
      { height: '20%', width: '100%' },
      _react2.default.createElement(
        _recharts.AreaChart,
        {
          data: data,
          margin: {
            top: 15,
            bottom: 5
          }
        },
        _react2.default.createElement(_recharts.XAxis, { dataKey: 'name', hide: true }),
        _react2.default.createElement(_recharts.Tooltip, null),
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'linearGradient',
            { id: 'splitColor', x1: '0', y1: '0', x2: '0', y2: '1' },
            _react2.default.createElement('stop', { offset: off, stopColor: '#e8e8e8', stopOpacity: 1 }),
            _react2.default.createElement('stop', { offset: off, stopColor: '#202020', stopOpacity: 1 })
          )
        ),
        _react2.default.createElement(_recharts.Area, {
          type: 'monotone',
          dataKey: 'val',
          stroke: '#8884d8',
          strokeWidth: 2,
          fill: 'url(#splitColor)',
          dot: { stroke: "#8884d8", strokeWidth: 4, r: 2 }
        })
      )
    );
  }

  return null;
};

exports.default = HeuristicsBar;