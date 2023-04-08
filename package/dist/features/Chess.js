"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _material = require("@mui/material");

var _styles = require("@mui/material/styles");

require("../index.css");

require("../assets/css/fonts.css");

var _store = require("../app/store");

var _store2 = _interopRequireDefault(_store);

var _theme = require("../styles/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _VariantBoard = require("./board/VariantBoard");

var _VariantBoard2 = _interopRequireDefault(_VariantBoard);

var _InfoAlert = require("./alert/InfoAlert.js");

var _InfoAlert2 = _interopRequireDefault(_InfoAlert);

var _CheckmateSkillsDialog = require("./dialog/CheckmateSkillsDialog");

var _CheckmateSkillsDialog2 = _interopRequireDefault(_CheckmateSkillsDialog);

var _EndgameSkillsDialog = require("./dialog/EndgameSkillsDialog");

var _EndgameSkillsDialog2 = _interopRequireDefault(_EndgameSkillsDialog);

var _EventsStatsDialog = require("./dialog/EventsStatsDialog");

var _EventsStatsDialog2 = _interopRequireDefault(_EventsStatsDialog);

var _LoadFenDialog = require("./dialog/LoadFenDialog");

var _LoadFenDialog2 = _interopRequireDefault(_LoadFenDialog);

var _LoadPgnDialog = require("./dialog/LoadPgnDialog");

var _LoadPgnDialog2 = _interopRequireDefault(_LoadPgnDialog);

var _OpeningsStatsDialog = require("./dialog/OpeningsStatsDialog");

var _OpeningsStatsDialog2 = _interopRequireDefault(_OpeningsStatsDialog);

var _PlayersStatsDialog = require("./dialog/PlayersStatsDialog");

var _PlayersStatsDialog2 = _interopRequireDefault(_PlayersStatsDialog);

var _ProgressDialog = require("./dialog/ProgressDialog");

var _ProgressDialog2 = _interopRequireDefault(_ProgressDialog);

var _StartedButtonsAnalysisMode = require("./mode/analysis/StartedButtonsAnalysisMode");

var _StartedButtonsAnalysisMode2 = _interopRequireDefault(
  _StartedButtonsAnalysisMode
);

var _StartedButtonsGmMode = require("./mode/gm//StartedButtonsGmMode");

var _StartedButtonsGmMode2 = _interopRequireDefault(_StartedButtonsGmMode);

var _GameTable = require("./table/GameTable");

var _GameTable2 = _interopRequireDefault(_GameTable);

var _Game = require("./Game");

var _Game2 = _interopRequireDefault(_Game);

var _HeuristicsBar = require("./HeuristicsBar");

var _HeuristicsBar2 = _interopRequireDefault(_HeuristicsBar);

var _PlayButtons = require("./PlayButtons");

var _PlayButtons2 = _interopRequireDefault(_PlayButtons);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Chess = function Chess(_ref) {
  var props = _ref.props;

  return _react2.default.createElement(
    _styles.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _store2.default },
      _react2.default.createElement(
        _material.Grid,
        { container: true, spacing: 1 },
        _react2.default.createElement(
          _material.Grid,
          { item: true, xs: 12, md: 4 },
          _react2.default.createElement(_VariantBoard2.default, {
            props: props,
          }),
          _react2.default.createElement(_HeuristicsBar2.default, null)
        ),
        _react2.default.createElement(
          _material.Grid,
          { item: true, xs: 12, md: 3 },
          _react2.default.createElement(_Game2.default, { props: props }),
          _react2.default.createElement(_GameTable2.default, null),
          _react2.default.createElement(
            _StartedButtonsAnalysisMode2.default,
            null
          ),
          _react2.default.createElement(_StartedButtonsGmMode2.default, null),
          _react2.default.createElement(_InfoAlert2.default, null)
        ),
        _react2.default.createElement(
          _material.Grid,
          { item: true, xs: 12, md: 2 },
          _react2.default.createElement(_PlayButtons2.default, {
            props: props,
          })
        )
      ),
      _react2.default.createElement(_CheckmateSkillsDialog2.default, null),
      _react2.default.createElement(_EndgameSkillsDialog2.default, null),
      _react2.default.createElement(_LoadFenDialog2.default, null),
      _react2.default.createElement(_LoadPgnDialog2.default, null),
      _react2.default.createElement(_OpeningsStatsDialog2.default, null),
      _react2.default.createElement(_PlayersStatsDialog2.default, {
        props: props,
      }),
      _react2.default.createElement(_EventsStatsDialog2.default, {
        props: props,
      }),
      /* _react2.default.createElement(_ProgressDialog2.default, null) */
    )
  );
};

exports.default = Chess;
