'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Capablanca80Board = require('./Capablanca80Board');

var _Capablanca80Board2 = _interopRequireDefault(_Capablanca80Board);

var _Chess960Board = require('./Chess960Board');

var _Chess960Board2 = _interopRequireDefault(_Chess960Board);

var _ClassicalBoard = require('./ClassicalBoard');

var _ClassicalBoard2 = _interopRequireDefault(_ClassicalBoard);

var _variantConst = require('../variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VariantBoard = function VariantBoard(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  (0, _react.useEffect)(function () {
    dispatch(_WsAction2.default.connect(state, props)).then(function (ws) {
      return _WsAction2.default.startOff(ws);
    });
  }, [dispatch]);

  var variantBoard = function variantBoard() {
    if (state.variant.name === variantConst.CAPABLANCA_80) {
      return _react2.default.createElement(_Capablanca80Board2.default, { props: props });
    } else if (state.variant.name === variantConst.CHESS_960) {
      return _react2.default.createElement(_Chess960Board2.default, { props: props });
    }

    return _react2.default.createElement(_ClassicalBoard2.default, { props: props });
  };

  return variantBoard();
};

exports.default = VariantBoard;