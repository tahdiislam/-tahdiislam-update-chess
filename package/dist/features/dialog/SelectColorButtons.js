'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _material = require('@mui/material');

var _wKing = require('../../assets/img/pieces/png/150/wKing.png');

var _wKing2 = _interopRequireDefault(_wKing);

var _wbKing = require('../../assets/img/pieces/png/150/wbKing.png');

var _wbKing2 = _interopRequireDefault(_wbKing);

var _bKing = require('../../assets/img/pieces/png/150/bKing.png');

var _bKing2 = _interopRequireDefault(_bKing);

var _Pgn = require('../../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var styles = {
  avatar: {
    width: 55,
    height: 55
  },
  buttonGroup: {
    mt: 1,
    mb: 1
  },
  selectedAvatar: {
    width: 55,
    height: 55,
    backgroundColor: '#d8d8d8'
  }
};

var SelectColorButtons = function SelectColorButtons(_ref) {
  var props = _ref.props;

  var _React$useState = React.useState('rand'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      color = _React$useState2[0],
      setColor = _React$useState2[1];

  var handleSelectColor = function handleSelectColor(color) {
    setColor(color);
  };

  React.useEffect(function () {
    props.color = color;
  }, [color]);

  return React.createElement(
    _material.ButtonGroup,
    { sx: styles.buttonGroup },
    React.createElement(
      _material.IconButton,
      {
        'aria-label': 'white',
        title: 'White',
        onClick: function onClick() {
          return handleSelectColor(_Pgn2.default.symbol.WHITE);
        }
      },
      React.createElement(_material.Avatar, {
        src: _wKing2.default,
        sx: color === _Pgn2.default.symbol.WHITE ? styles.selectedAvatar : styles.avatar
      })
    ),
    React.createElement(
      _material.IconButton,
      {
        'aria-label': 'random',
        title: 'Random',
        onClick: function onClick() {
          return handleSelectColor('rand');
        }
      },
      React.createElement(_material.Avatar, {
        src: _wbKing2.default,
        sx: color === 'rand' ? styles.selectedAvatar : styles.avatar
      })
    ),
    React.createElement(
      _material.IconButton,
      {
        'aria-label': 'black',
        title: 'Black',
        onClick: function onClick() {
          return handleSelectColor(_Pgn2.default.symbol.BLACK);
        }
      },
      React.createElement(_material.Avatar, {
        src: _bKing2.default,
        sx: color === _Pgn2.default.symbol.BLACK ? styles.selectedAvatar : styles.avatar
      })
    )
  );
};

exports.default = SelectColorButtons;