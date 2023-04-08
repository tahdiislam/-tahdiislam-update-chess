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

var _Dispatcher = require('../../common/Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _mainButtonsSlice = require('../../features/mainButtonsSlice');

var mainButtons = _interopRequireWildcard(_mainButtonsSlice);

var _playComputerDialogSlice = require('../../features/dialog/playComputerDialogSlice');

var playComputerDialog = _interopRequireWildcard(_playComputerDialogSlice);

var _SelectColorButtons = require('../../features/dialog/SelectColorButtons');

var _SelectColorButtons2 = _interopRequireDefault(_SelectColorButtons);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _modeSlice = require('../../features/mode/modeSlice');

var mode = _interopRequireWildcard(_modeSlice);

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PlayComputerDialog = function PlayComputerDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _React$useState = React.useState({
    position: 'start',
    level: 1,
    color: 'rand',
    fen: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fields = _React$useState2[0],
      setFields = _React$useState2[1];

  var handleCreateGame = function handleCreateGame(event) {
    event.preventDefault();
    var payload = void 0;
    if (fields.position === 'fen') {
      payload = configure(_Pgn2.default.symbol.WHITE); // arbitrary color
      _WsAction2.default.start(state, variantConst.CLASSICAL, modeConst.STOCKFISH, {
        fen: fields.fen
      });
    } else {
      var color = fields.color === 'rand' ? Math.random() < 0.5 ? _Pgn2.default.symbol.WHITE : _Pgn2.default.symbol.BLACK : fields.color;
      payload = configure(color);
      _WsAction2.default.start(state, variantConst.CLASSICAL, modeConst.STOCKFISH, {
        color: color
      });
    }
    dispatch(mode.setStockfish(payload));
    dispatch(mainButtons.setPlayComputer());
    dispatch(playComputerDialog.close());
    _Dispatcher2.default.initGui(dispatch);
  };

  var handlePositionChange = function handlePositionChange(event) {
    setFields(_extends({}, fields, {
      position: event.target.value
    }));
  };

  var handleLevelChange = function handleLevelChange(event) {
    setFields(_extends({}, fields, {
      level: event.target.value
    }));
  };

  var handleFenChange = function handleFenChange(event) {
    setFields(_extends({}, fields, {
      fen: event.target.value
    }));
  };

  var configure = function configure(color) {
    var settings = {
      color: color,
      options: {
        "Skill Level": 11
      },
      params: {
        "depth": 4
      }
    };
    if (fields.level === 0) {
      settings.options["Skill Level"] = 6;
      settings.params["depth"] = 2;
    } else if (fields.level === 2) {
      settings.options["Skill Level"] = 17;
      settings.params["depth"] = 8;
    } else if (fields.level === 3) {
      settings.options["Skill Level"] = 20;
      settings.params["depth"] = 12;
    }

    return settings;
  };

  return React.createElement(
    _material.Dialog,
    { open: state.playComputerDialog.open, maxWidth: 'xs', fullWidth: true },
    React.createElement(
      _material.DialogTitle,
      null,
      'Play Computer',
      React.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            return dispatch(playComputerDialog.close());
          } },
        React.createElement(_Close2.default, null)
      )
    ),
    React.createElement(
      _material.DialogContent,
      null,
      React.createElement(
        'form',
        { onSubmit: handleCreateGame },
        React.createElement(
          _material.Typography,
          {
            id: 'level',
            gutterBottom: true,
            align: 'center'
          },
          'Difficulty level'
        ),
        React.createElement(_material.Slider, {
          name: 'level',
          'aria-label': 'Level',
          defaultValue: 1,
          valueLabelDisplay: 'auto',
          step: 1,
          min: 0,
          max: 3,
          marks: true,
          onChange: handleLevelChange
        }),
        fields.position === 'start' ? React.createElement(
          _material.Grid,
          { container: true, justifyContent: 'center' },
          React.createElement(_SelectColorButtons2.default, { props: fields })
        ) : null,
        React.createElement(
          _material.TextField,
          {
            select: true,
            required: true,
            fullWidth: true,
            name: 'position',
            label: 'From position',
            variant: 'filled',
            defaultValue: 'start',
            value: fields.position,
            margin: 'normal',
            onChange: handlePositionChange
          },
          React.createElement(
            _material.MenuItem,
            { key: 0, value: 'start' },
            'Start'
          ),
          React.createElement(
            _material.MenuItem,
            { key: 1, value: 'fen' },
            'FEN'
          )
        ),
        fields.position === 'fen' ? React.createElement(_material.TextField, {
          fullWidth: true,
          required: true,
          name: 'fen',
          label: 'Enter a FEN position',
          variant: 'filled',
          margin: 'normal',
          onChange: handleFenChange
        }) : null,
        React.createElement(
          _material.Button,
          {
            fullWidth: true,
            type: 'submit',
            variant: 'outlined',
            sx: { mt: 2 }
          },
          'Create Game'
        )
      )
    )
  );
};

exports.default = PlayComputerDialog;