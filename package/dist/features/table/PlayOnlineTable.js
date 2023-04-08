'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _BlurOn = require('@mui/icons-material/BlurOn');

var _BlurOn2 = _interopRequireDefault(_BlurOn);

var _RestartAlt = require('@mui/icons-material/RestartAlt');

var _RestartAlt2 = _interopRequireDefault(_RestartAlt);

var _Shuffle = require('@mui/icons-material/Shuffle');

var _Shuffle2 = _interopRequireDefault(_Shuffle);

var _material = require('@mui/material');

var _wKing = require('../../assets/img/pieces/png/150/wKing.png');

var _wKing2 = _interopRequireDefault(_wKing);

var _bKing = require('../../assets/img/pieces/png/150/bKing.png');

var _bKing2 = _interopRequireDefault(_bKing);

var _Pgn = require('../../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

var _mainButtonsSlice = require('../../features/mainButtonsSlice');

var mainButtons = _interopRequireWildcard(_mainButtonsSlice);

var _playOnlineDialogSlice = require('../../features/dialog/playOnlineDialogSlice');

var playOnlineDialog = _interopRequireWildcard(_playOnlineDialogSlice);

var _modeSlice = require('../../features/mode/modeSlice');

var mode = _interopRequireWildcard(_modeSlice);

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  disabled: {
    cursor: 'default',
    '& td': {
      color: '#737373',
      backgroundColor: '#ececec'
    },
    '& img': {
      opacity: 0.5
    }
  },
  clickable: {
    cursor: 'pointer',
    backgroundColor: '#ececec'
  }
};

var VariantIcon = function VariantIcon(_ref) {
  var props = _ref.props;

  if (props.variant === variantConst.CLASSICAL) {
    return _react2.default.createElement(_RestartAlt2.default, null);
  } else if (props.variant === variantConst.CHESS_960) {
    return _react2.default.createElement(_Shuffle2.default, null);
  } else if (props.variant === variantConst.CAPABLANCA_80) {
    return _react2.default.createElement(_BlurOn2.default, null);
  }

  return null;
};

var PlayOnlineTable = function PlayOnlineTable() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      _WsAction2.default.onlineGames(state);
    }, 5000);

    return function () {
      return clearInterval(interval);
    };
  }, []);

  var handlePlay = function handlePlay(hash) {
    dispatch(mainButtons.setPlayOnline());
    _WsAction2.default.accept(state, hash);
    dispatch(mode.startAnalysis());
    dispatch(playOnlineDialog.close());
  };

  if (state.playOnlineDialog.rows.length > 0) {
    return _react2.default.createElement(
      _material.TableContainer,
      { component: _material.Paper, sx: { mt: 1, mb: 0.5 } },
      _react2.default.createElement(
        _material.Table,
        { 'aria-label': 'simple table' },
        _react2.default.createElement(
          _material.TableBody,
          null,
          state.playOnlineDialog.rows.map(function (row, i) {
            return _react2.default.createElement(
              _material.TableRow,
              {
                key: i,
                selected: true,
                sx: state.mode.play && state.mode.play.hash === row.hash ? styles.disabled : styles.clickable,
                onClick: function onClick() {
                  return state.mode.play && state.mode.play.hash === row.hash ? null : handlePlay(row.hash);
                }
              },
              _react2.default.createElement(
                _material.TableCell,
                { align: 'center' },
                'Anonymous'
              ),
              _react2.default.createElement(
                _material.TableCell,
                { align: 'center' },
                row.min
              ),
              _react2.default.createElement(
                _material.TableCell,
                { align: 'center' },
                '+',
                row.increment
              ),
              _react2.default.createElement(
                _material.TableCell,
                { align: 'center' },
                row.color === _Pgn2.default.symbol.WHITE ? _react2.default.createElement(_material.Avatar, { src: _wKing2.default, sx: { mt: -0.85, width: 25, height: 25 } }) : _react2.default.createElement(_material.Avatar, { src: _bKing2.default, sx: { mt: -0.85, width: 25, height: 25 } })
              ),
              _react2.default.createElement(
                _material.TableCell,
                { align: 'center' },
                _react2.default.createElement(VariantIcon, { props: { variant: row.variant } })
              )
            );
          })
        )
      )
    );
  }

  return null;
};

exports.default = PlayOnlineTable;