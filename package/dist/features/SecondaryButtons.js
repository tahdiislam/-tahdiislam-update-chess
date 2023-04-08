'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _BarChart = require('@mui/icons-material/BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

var _Cached = require('@mui/icons-material/Cached');

var _Cached2 = _interopRequireDefault(_Cached);

var _InsertPhoto = require('@mui/icons-material/InsertPhoto');

var _InsertPhoto2 = _interopRequireDefault(_InsertPhoto);

var _MoveDown = require('@mui/icons-material/MoveDown');

var _MoveDown2 = _interopRequireDefault(_MoveDown);

var _VideoCameraBack = require('@mui/icons-material/VideoCameraBack');

var _VideoCameraBack2 = _interopRequireDefault(_VideoCameraBack);

var _Widgets = require('@mui/icons-material/Widgets');

var _Widgets2 = _interopRequireDefault(_Widgets);

var _material = require('@mui/material');

var _Movetext = require('../common/Movetext');

var _Movetext2 = _interopRequireDefault(_Movetext);

var _modeConst = require('../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _variantConst = require('../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _progressDialogSlice = require('../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

var _WsAction = require('../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SecondaryButtons = function SecondaryButtons(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var handleDownloadImage = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var body;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = {
                fen: state.board.fen[state.board.fen.length - 1 + state.history.back],
                variant: state.variant.name,
                flip: state.board.flip
              };
              _context.next = 3;
              return fetch(props.api.prot + '://' + props.api.host + ':' + props.api.port + '/api/download/image', {
                method: 'POST',
                body: JSON.stringify(body)
              }).then(function (res) {
                return res.blob();
              }).then(function (blob) {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = "chessboard.png";
                document.body.appendChild(a);
                a.click();
                a.remove();
              });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function handleDownloadImage() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDownloadMp4 = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var body;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(progressDialog.open());
              body = {
                variant: state.variant.name,
                movetext: _Movetext2.default.substring(state.board.movetext, state.history.back),
                flip: state.board.flip
              };

              if (state.variant.name === variantConst.CHESS_960) {
                body.startPos = state.variant.startPos;
              }
              if (state.mode.name === modeConst.FEN) {
                body.fen = state.mode.fen;
              }
              _context2.next = 6;
              return fetch(props.api.prot + '://' + props.api.host + ':' + props.api.port + '/api/download/mp4', {
                method: 'POST',
                body: JSON.stringify(body)
              }).then(function (res) {
                return res.blob();
              }).then(function (blob) {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = "chessgame.mp4";
                document.body.appendChild(a);
                a.click();
                a.remove();
              }).finally(function () {
                return dispatch(progressDialog.close());
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function handleDownloadMp4() {
      return _ref3.apply(this, arguments);
    };
  }();

  var disabled = !(state.mode.name === modeConst.FEN || state.mode.name === modeConst.PGN) && !state.board.movetext;

  return _react2.default.createElement(
    _material.Stack,
    { direction: 'row', spacing: 1 },
    _react2.default.createElement(
      _material.IconButton,
      {
        disabled: disabled,
        color: 'primary',
        size: 'medium',
        title: 'Copy PGN movetext',
        'aria-label': 'copy',
        onClick: function onClick() {
          return navigator.clipboard.writeText(_Movetext2.default.substring(state.board.movetext, state.history.back));
        }
      },
      _react2.default.createElement(_MoveDown2.default, { fontSize: 'inherit' })
    ),
    _react2.default.createElement(
      _material.IconButton,
      {
        disabled: disabled,
        color: 'primary',
        size: 'medium',
        title: 'Copy FEN string',
        'aria-label': 'fen',
        onClick: function onClick() {
          return navigator.clipboard.writeText(state.board.fen[state.board.fen.length - 1 + state.history.back]);
        }
      },
      _react2.default.createElement(_Widgets2.default, { fontSize: 'inherit' })
    ),
    _react2.default.createElement(
      _material.IconButton,
      {
        disabled: disabled,
        color: 'primary',
        size: 'medium',
        title: 'Heuristics',
        'aria-label': 'heuristics',
        onClick: function onClick() {
          dispatch(progressDialog.open());
          _WsAction2.default.heuristics(state, _Movetext2.default.substring(state.board.movetext, state.history.back));
        }
      },
      _react2.default.createElement(_BarChart2.default, { fontSize: 'inherit' })
    ),
    _react2.default.createElement(
      _material.IconButton,
      {
        disabled: disabled,
        color: 'primary',
        size: 'medium',
        title: 'Download Image',
        'aria-label': 'flip',
        onClick: function onClick() {
          return handleDownloadImage();
        }
      },
      _react2.default.createElement(_InsertPhoto2.default, { fontSize: 'inherit' })
    ),
    _react2.default.createElement(
      _material.IconButton,
      {
        disabled: disabled,
        color: 'primary',
        size: 'medium',
        title: 'Download Video',
        'aria-label': 'flip',
        onClick: function onClick() {
          return handleDownloadMp4();
        }
      },
      _react2.default.createElement(_VideoCameraBack2.default, { fontSize: 'inherit' })
    )
  );
};

exports.default = SecondaryButtons;