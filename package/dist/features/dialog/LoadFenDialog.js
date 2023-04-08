'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _material = require('@mui/material');

var _Dispatcher = require('../../common/Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _mainButtonsSlice = require('../../features/mainButtonsSlice');

var mainButtons = _interopRequireWildcard(_mainButtonsSlice);

var _loadFenDialogSlice = require('../../features/dialog/loadFenDialogSlice');

var loadFenDialog = _interopRequireWildcard(_loadFenDialogSlice);

var _progressDialogSlice = require('../../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadFenDialog = function LoadFenDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useState = (0, _react.useState)(variantConst.CLASSICAL),
      _useState2 = _slicedToArray(_useState, 2),
      variant = _useState2[0],
      setVariant = _useState2[1];

  var handleVariantChange = function handleVariantChange(event) {
    setVariant(event.target.value);
  };

  var handleLoad = function handleLoad(event) {
    event.preventDefault();
    dispatch(mainButtons.setAnalysis());
    dispatch(loadFenDialog.close());
    dispatch(progressDialog.open());
    _Dispatcher2.default.initGui(dispatch);
    var add = {
      fen: event.target.elements.fen.value
    };
    if (variant === variantConst.CHESS_960) {
      add.startPos = event.target.elements.startPos.value;
    }
    _WsAction2.default.start(state, event.target.elements.variant.value, modeConst.FEN, add);
  };

  return _react2.default.createElement(
    _material.Dialog,
    { open: state.loadFenDialog.open, maxWidth: 'xs', fullWidth: true },
    _react2.default.createElement(
      _material.DialogTitle,
      null,
      'FEN String',
      _react2.default.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            return dispatch(loadFenDialog.close());
          } },
        _react2.default.createElement(_Close2.default, null)
      )
    ),
    _react2.default.createElement(
      _material.DialogContent,
      null,
      _react2.default.createElement(
        'form',
        { onSubmit: handleLoad },
        _react2.default.createElement(
          _material.TextField,
          {
            select: true,
            required: true,
            fullWidth: true,
            name: 'variant',
            label: 'Variant',
            variant: 'filled',
            value: variant,
            margin: 'normal',
            onChange: handleVariantChange
          },
          _react2.default.createElement(
            _material.MenuItem,
            { key: 0, value: 'classical' },
            'Classical'
          ),
          _react2.default.createElement(
            _material.MenuItem,
            { key: 1, value: '960' },
            'Fischer Random 960'
          ),
          _react2.default.createElement(
            _material.MenuItem,
            { key: 2, value: 'capablanca80' },
            'Capablanca'
          )
        ),
        variant === variantConst.CHESS_960 ? _react2.default.createElement(_material.TextField, {
          fullWidth: true,
          required: true,
          name: 'startPos',
          label: 'Start position',
          variant: 'filled',
          helperText: 'Examples: RNBQKBNR, RBBKRQNN, NRKNBBQR, etc.'
        }) : null,
        _react2.default.createElement(_material.TextField, {
          fullWidth: true,
          required: true,
          name: 'fen',
          label: 'From FEN position',
          variant: 'filled',
          margin: 'normal'
        }),
        _react2.default.createElement(
          _material.Button,
          {
            fullWidth: true,
            type: 'submit',
            variant: 'outlined',
            sx: { mt: 2 }
          },
          'Load'
        )
      )
    )
  );
};

exports.default = LoadFenDialog;