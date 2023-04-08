'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _endgameSkillsDialogSlice = require('../../features/dialog/endgameSkillsDialogSlice');

var endgameSkillsDialog = _interopRequireWildcard(_endgameSkillsDialogSlice);

var _SelectColorButtons = require('../../features/dialog/SelectColorButtons');

var _SelectColorButtons2 = _interopRequireDefault(_SelectColorButtons);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EndgameSkillsDialog = function EndgameSkillsDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var endgameTypes = ['P'];

  var _React$useState = React.useState({
    color: 'rand',
    items: 'rand'
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fields = _React$useState2[0],
      setFields = _React$useState2[1];

  var handleCreateGame = function handleCreateGame() {
    var _items;

    var color = fields.color === 'rand' ? Math.random() < 0.5 ? _Pgn2.default.symbol.WHITE : _Pgn2.default.symbol.BLACK : fields.color;
    var items = fields.items === 'rand' ? endgameTypes[Math.floor(Math.random() * endgameTypes.length)] : fields.items;
    var split = items.split(',');
    split.length === 2 ? items = (_items = {}, _defineProperty(_items, color, split[0]), _defineProperty(_items, color === _Pgn2.default.symbol.WHITE ? _Pgn2.default.symbol.BLACK : _Pgn2.default.symbol.WHITE, split[1]), _items) : items = _defineProperty({}, color, split[0]);
    dispatch(mainButtons.setTraining());
    dispatch(endgameSkillsDialog.close());
    _Dispatcher2.default.initGui(dispatch);
    _WsAction2.default.randomizer(state, color, items);
  };

  var handleTypeChange = function handleTypeChange(event) {
    setFields({
      color: fields.color,
      items: event.target.value
    });
  };

  return React.createElement(
    _material.Dialog,
    { open: state.endgameSkillsDialog.open, maxWidth: 'xs', fullWidth: true },
    React.createElement(
      _material.DialogTitle,
      null,
      'Endgame skills',
      React.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            return dispatch(endgameSkillsDialog.close());
          } },
        React.createElement(_Close2.default, null)
      )
    ),
    React.createElement(
      _material.DialogContent,
      null,
      React.createElement(
        _material.TextField,
        {
          select: true,
          required: true,
          fullWidth: true,
          name: 'items',
          label: 'Endgame',
          variant: 'filled',
          defaultValue: 'rand',
          margin: 'normal',
          onChange: handleTypeChange
        },
        React.createElement(
          _material.MenuItem,
          { key: 0, value: 'rand' },
          'Random'
        ),
        React.createElement(
          _material.MenuItem,
          { key: 1, value: 'P' },
          'Pawn endgame'
        )
      ),
      React.createElement(
        _material.Grid,
        { container: true, justifyContent: 'center' },
        React.createElement(_SelectColorButtons2.default, { props: fields })
      ),
      React.createElement(
        _material.Button,
        {
          fullWidth: true,
          variant: 'outlined',
          onClick: function onClick() {
            return handleCreateGame();
          },
          sx: { mt: 2 }
        },
        'Create Game'
      )
    )
  );
};

exports.default = EndgameSkillsDialog;