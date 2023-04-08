'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Opening = require('../common/Opening.js');

var _Opening2 = _interopRequireDefault(_Opening);

var _heuristicsBarSlice = require('../features/heuristicsBarSlice');

var heuristicsBar = _interopRequireWildcard(_heuristicsBarSlice);

var _historySlice = require('../features/historySlice');

var history = _interopRequireWildcard(_historySlice);

var _boardSlice = require('../features/board/boardSlice');

var board = _interopRequireWildcard(_boardSlice);

var _infoAlertSlice = require('../features/alert/infoAlertSlice');

var infoAlert = _interopRequireWildcard(_infoAlertSlice);

var _gameTableSlice = require('../features/table/gameTableSlice');

var gameTable = _interopRequireWildcard(_gameTableSlice);

var _openingAnalysisTableSlice = require('../features/table/openingAnalysisTableSlice');

var openingAnalysisTable = _interopRequireWildcard(_openingAnalysisTableSlice);

var _variantSlice = require('../features/variant/variantSlice');

var variant = _interopRequireWildcard(_variantSlice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dispatcher = function Dispatcher() {
  _classCallCheck(this, Dispatcher);
};

Dispatcher.initGui = function (dispatch) {
  dispatch(heuristicsBar.resetBar());
  dispatch(openingAnalysisTable.close());
  dispatch(gameTable.close());
  dispatch(infoAlert.close());
  dispatch(history.goTo({ back: 0 }));
  dispatch(board.start());
  dispatch(variant.startClassical());
};

Dispatcher.openingAnalysisByMovetext = function (dispatch, movetext) {
  var rows = _Opening2.default.byMovetext(movetext);
  if (rows) {
    dispatch(openingAnalysisTable.show({ rows: rows }));
  } else {
    dispatch(openingAnalysisTable.close());
  }
};

Dispatcher.openingAnalysisBySameMovetext = function (dispatch, movetext) {
  var rows = _Opening2.default.bySameMovetext(movetext);
  if (rows) {
    dispatch(openingAnalysisTable.show({ rows: rows }));
  } else {
    dispatch(openingAnalysisTable.close());
  }
};

exports.default = Dispatcher;