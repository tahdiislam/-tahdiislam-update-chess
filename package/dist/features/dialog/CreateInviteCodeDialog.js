'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _material = require('@mui/material');

var _Pgn = require('../../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

var _mainButtonsSlice = require('../../features/mainButtonsSlice');

var mainButtons = _interopRequireWildcard(_mainButtonsSlice);

var _createInviteCodeDialogSlice = require('../../features/dialog/createInviteCodeDialogSlice');

var createInviteCodeDialog = _interopRequireWildcard(_createInviteCodeDialogSlice);

var _SelectColorButtons = require('../../features/dialog/SelectColorButtons');

var _SelectColorButtons2 = _interopRequireDefault(_SelectColorButtons);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CreateInviteCodeDialog = function CreateInviteCodeDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  return React.createElement(
    _material.Dialog,
    { open: state.createInviteCodeDialog.open, maxWidth: 'xs', fullWidth: true },
    React.createElement(
      _material.DialogTitle,
      null,
      'Play a Friend',
      React.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            return dispatch(createInviteCodeDialog.close());
          } },
        React.createElement(_Close2.default, null)
      )
    ),
    state.mode.play && state.mode.play.hash ? React.createElement(CopyCode, null) : React.createElement(CreateCode, null)
  );
};

var CreateCode = function CreateCode() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _React$useState = React.useState({
    minutes: 5,
    increment: 3,
    color: 'rand',
    variant: variantConst.CLASSICAL,
    fen: '',
    startPos: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fields = _React$useState2[0],
      setFields = _React$useState2[1];

  var handleMinutesChange = function handleMinutesChange(event) {
    setFields(_extends({}, fields, {
      minutes: event.target.value
    }));
  };

  var handleIncrementChange = function handleIncrementChange(event) {
    setFields(_extends({}, fields, {
      increment: event.target.value
    }));
  };

  var handleVariantChange = function handleVariantChange(event) {
    setFields(_extends({}, fields, {
      variant: event.target.value
    }));
  };

  var handleFenChange = function handleFenChange(event) {
    setFields(_extends({}, fields, {
      fen: event.target.value
    }));
  };

  var handleStartPosChange = function handleStartPosChange(event) {
    setFields(_extends({}, fields, {
      startPos: event.target.value
    }));
  };

  var handleCreateCode = function handleCreateCode(event) {
    event.preventDefault();
    dispatch(mainButtons.setPlayAFriend());
    var settings = {
      min: fields.minutes,
      increment: fields.increment,
      color: fields.color === 'rand' ? Math.random() < 0.5 ? _Pgn2.default.symbol.WHITE : _Pgn2.default.symbol.BLACK : fields.color,
      submode: 'friend'
    };
    fields.fen ? settings.fen = fields.fen : null;
    fields.startPos ? settings.startPos = fields.startPos : null;
    _WsAction2.default.start(state, fields.variant, modeConst.PLAY, { settings: JSON.stringify(settings) });
  };

  return React.createElement(
    _material.DialogContent,
    null,
    React.createElement(
      'form',
      { onSubmit: handleCreateCode },
      React.createElement(
        _material.Typography,
        {
          id: 'input-minutes',
          align: 'center',
          gutterBottom: true
        },
        'Minutes per side'
      ),
      React.createElement(_material.Slider, {
        name: 'min',
        'aria-label': 'Minutes',
        defaultValue: 5,
        valueLabelDisplay: 'auto',
        step: 1,
        min: 1,
        max: 60,
        onChange: handleMinutesChange
      }),
      React.createElement(
        _material.Typography,
        {
          id: 'input-increment',
          align: 'center',
          gutterBottom: true
        },
        'Increment in seconds'
      ),
      React.createElement(_material.Slider, {
        name: 'increment',
        'aria-label': 'Increment',
        defaultValue: 3,
        valueLabelDisplay: 'auto',
        step: 1,
        min: 0,
        max: 60,
        onChange: handleIncrementChange
      }),
      React.createElement(
        _material.Grid,
        { container: true, justifyContent: 'center' },
        React.createElement(_SelectColorButtons2.default, { props: fields })
      ),
      React.createElement(
        _material.TextField,
        {
          select: true,
          required: true,
          fullWidth: true,
          name: 'variant',
          label: 'Variant',
          variant: 'filled',
          defaultValue: variantConst.CLASSICAL,
          margin: 'normal',
          onChange: handleVariantChange
        },
        React.createElement(
          _material.MenuItem,
          { key: 0, value: 'classical' },
          'Classical'
        ),
        React.createElement(
          _material.MenuItem,
          { key: 1, value: '960' },
          'Fischer Random 960'
        ),
        React.createElement(
          _material.MenuItem,
          { key: 2, value: 'capablanca80' },
          'Capablanca'
        )
      ),
      fields.variant === variantConst.CHESS_960 ? React.createElement(_material.TextField, {
        fullWidth: true,
        required: true,
        name: 'startPos',
        label: 'Start position',
        variant: 'filled',
        helperText: 'Examples: RNBQKBNR, RBBKRQNN, NRKNBBQR, etc.',
        onChange: handleStartPosChange
      }) : null,
      React.createElement(_material.TextField, {
        fullWidth: true,
        name: 'fen',
        label: 'From FEN position',
        variant: 'filled',
        margin: 'normal',
        onChange: handleFenChange
      }),
      React.createElement(
        _material.Button,
        {
          fullWidth: true,
          type: 'submit',
          variant: 'outlined',
          sx: { mt: 2 }
        },
        'Create Invite Code'
      )
    )
  );
};

var CopyCode = function CopyCode() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  return React.createElement(
    _material.DialogContent,
    null,
    React.createElement(_material.TextField, {
      fullWidth: true,
      type: 'text',
      name: 'sharecode',
      label: 'Share this code with a friend',
      margin: 'normal',
      value: state.mode.play.hash
    }),
    React.createElement(
      _material.Button,
      {
        fullWidth: true,
        variant: 'outlined',
        onClick: function onClick() {
          navigator.clipboard.writeText(state.mode.play.hash);
          dispatch(createInviteCodeDialog.close());
        } },
      'Copy and Play'
    )
  );
};

exports.default = CreateInviteCodeDialog;