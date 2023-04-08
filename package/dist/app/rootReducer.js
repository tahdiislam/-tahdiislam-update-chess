'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _infoAlertSlice = require('../features/alert/infoAlertSlice');

var _infoAlertSlice2 = _interopRequireDefault(_infoAlertSlice);

var _boardSlice = require('../features/board/boardSlice');

var _boardSlice2 = _interopRequireDefault(_boardSlice);

var _acceptDrawDialogSlice = require('../features/dialog/acceptDrawDialogSlice');

var _acceptDrawDialogSlice2 = _interopRequireDefault(_acceptDrawDialogSlice);

var _acceptRematchDialogSlice = require('../features/dialog/acceptRematchDialogSlice');

var _acceptRematchDialogSlice2 = _interopRequireDefault(_acceptRematchDialogSlice);

var _acceptResignDialogSlice = require('../features/dialog/acceptResignDialogSlice');

var _acceptResignDialogSlice2 = _interopRequireDefault(_acceptResignDialogSlice);

var _acceptTakebackDialogSlice = require('../features/dialog/acceptTakebackDialogSlice');

var _acceptTakebackDialogSlice2 = _interopRequireDefault(_acceptTakebackDialogSlice);

var _checkmateSkillsDialogSlice = require('../features/dialog/checkmateSkillsDialogSlice');

var _checkmateSkillsDialogSlice2 = _interopRequireDefault(_checkmateSkillsDialogSlice);

var _createInviteCodeDialogSlice = require('../features/dialog/createInviteCodeDialogSlice');

var _createInviteCodeDialogSlice2 = _interopRequireDefault(_createInviteCodeDialogSlice);

var _endgameSkillsDialogSlice = require('../features/dialog/endgameSkillsDialogSlice');

var _endgameSkillsDialogSlice2 = _interopRequireDefault(_endgameSkillsDialogSlice);

var _enterInviteCodeDialogSlice = require('../features/dialog/enterInviteCodeDialogSlice');

var _enterInviteCodeDialogSlice2 = _interopRequireDefault(_enterInviteCodeDialogSlice);

var _eventsStatsDialogSlice = require('../features/dialog/eventsStatsDialogSlice');

var _eventsStatsDialogSlice2 = _interopRequireDefault(_eventsStatsDialogSlice);

var _heuristicsDialogSlice = require('../features/dialog/heuristicsDialogSlice');

var _heuristicsDialogSlice2 = _interopRequireDefault(_heuristicsDialogSlice);

var _loadFenDialogSlice = require('../features/dialog/loadFenDialogSlice');

var _loadFenDialogSlice2 = _interopRequireDefault(_loadFenDialogSlice);

var _loadPgnDialogSlice = require('../features/dialog/loadPgnDialogSlice');

var _loadPgnDialogSlice2 = _interopRequireDefault(_loadPgnDialogSlice);

var _offerDrawDialogSlice = require('../features/dialog/offerDrawDialogSlice');

var _offerDrawDialogSlice2 = _interopRequireDefault(_offerDrawDialogSlice);

var _offerRematchDialogSlice = require('../features/dialog/offerRematchDialogSlice');

var _offerRematchDialogSlice2 = _interopRequireDefault(_offerRematchDialogSlice);

var _offerTakebackDialogSlice = require('../features/dialog/offerTakebackDialogSlice');

var _offerTakebackDialogSlice2 = _interopRequireDefault(_offerTakebackDialogSlice);

var _playComputerDialogSlice = require('../features/dialog/playComputerDialogSlice');

var _playComputerDialogSlice2 = _interopRequireDefault(_playComputerDialogSlice);

var _playOnlineDialogSlice = require('../features/dialog/playOnlineDialogSlice');

var _playOnlineDialogSlice2 = _interopRequireDefault(_playOnlineDialogSlice);

var _progressDialogSlice = require('../features/dialog/progressDialogSlice');

var _progressDialogSlice2 = _interopRequireDefault(_progressDialogSlice);

var _openingsStatsDialogSlice = require('../features/dialog/openingsStatsDialogSlice');

var _openingsStatsDialogSlice2 = _interopRequireDefault(_openingsStatsDialogSlice);

var _playersStatsDialogSlice = require('../features/dialog/playersStatsDialogSlice');

var _playersStatsDialogSlice2 = _interopRequireDefault(_playersStatsDialogSlice);

var _searchEcoDialogSlice = require('../features/dialog/searchEcoDialogSlice');

var _searchEcoDialogSlice2 = _interopRequireDefault(_searchEcoDialogSlice);

var _searchGamesDialogSlice = require('../features/dialog/searchGamesDialogSlice');

var _searchGamesDialogSlice2 = _interopRequireDefault(_searchGamesDialogSlice);

var _searchMovetextDialogSlice = require('../features/dialog/searchMovetextDialogSlice');

var _searchMovetextDialogSlice2 = _interopRequireDefault(_searchMovetextDialogSlice);

var _searchNameDialogSlice = require('../features/dialog/searchNameDialogSlice');

var _searchNameDialogSlice2 = _interopRequireDefault(_searchNameDialogSlice);

var _settingsDialogSlice = require('../features/dialog/settingsDialogSlice');

var _settingsDialogSlice2 = _interopRequireDefault(_settingsDialogSlice);

var _watchDialogSlice = require('../features/dialog/watchDialogSlice');

var _watchDialogSlice2 = _interopRequireDefault(_watchDialogSlice);

var _modeSlice = require('../features/mode/modeSlice');

var _modeSlice2 = _interopRequireDefault(_modeSlice);

var _gameTableSlice = require('../features/table/gameTableSlice');

var _gameTableSlice2 = _interopRequireDefault(_gameTableSlice);

var _openingAnalysisTableSlice = require('../features/table/openingAnalysisTableSlice');

var _openingAnalysisTableSlice2 = _interopRequireDefault(_openingAnalysisTableSlice);

var _variantSlice = require('../features/variant/variantSlice');

var _variantSlice2 = _interopRequireDefault(_variantSlice);

var _wsSlice = require('../features/ws/wsSlice');

var _wsSlice2 = _interopRequireDefault(_wsSlice);

var _heuristicsBarSlice = require('../features/heuristicsBarSlice');

var _heuristicsBarSlice2 = _interopRequireDefault(_heuristicsBarSlice);

var _historySlice = require('../features/historySlice');

var _historySlice2 = _interopRequireDefault(_historySlice);

var _mainButtonsSlice = require('../features/mainButtonsSlice');

var _mainButtonsSlice2 = _interopRequireDefault(_mainButtonsSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = {
  infoAlert: _infoAlertSlice2.default,
  board: _boardSlice2.default,
  acceptDrawDialog: _acceptDrawDialogSlice2.default,
  acceptRematchDialog: _acceptRematchDialogSlice2.default,
  acceptResignDialog: _acceptResignDialogSlice2.default,
  acceptTakebackDialog: _acceptTakebackDialogSlice2.default,
  checkmateSkillsDialog: _checkmateSkillsDialogSlice2.default,
  endgameSkillsDialog: _endgameSkillsDialogSlice2.default,
  createInviteCodeDialog: _createInviteCodeDialogSlice2.default,
  enterInviteCodeDialog: _enterInviteCodeDialogSlice2.default,
  eventsStatsDialog: _eventsStatsDialogSlice2.default,
  heuristicsDialog: _heuristicsDialogSlice2.default,
  loadFenDialog: _loadFenDialogSlice2.default,
  loadPgnDialog: _loadPgnDialogSlice2.default,
  offerDrawDialog: _offerDrawDialogSlice2.default,
  offerRematchDialog: _offerRematchDialogSlice2.default,
  offerTakebackDialog: _offerTakebackDialogSlice2.default,
  playComputerDialog: _playComputerDialogSlice2.default,
  playOnlineDialog: _playOnlineDialogSlice2.default,
  progressDialog: _progressDialogSlice2.default,
  openingsStatsDialog: _openingsStatsDialogSlice2.default,
  playersStatsDialog: _playersStatsDialogSlice2.default,
  searchEcoDialog: _searchEcoDialogSlice2.default,
  searchGamesDialog: _searchGamesDialogSlice2.default,
  searchMovetextDialog: _searchMovetextDialogSlice2.default,
  searchNameDialog: _searchNameDialogSlice2.default,
  settingsDialog: _settingsDialogSlice2.default,
  watchDialog: _watchDialogSlice2.default,
  gameTable: _gameTableSlice2.default,
  openingAnalysisTable: _openingAnalysisTableSlice2.default,
  heuristicsBar: _heuristicsBarSlice2.default,
  history: _historySlice2.default,
  mainButtons: _mainButtonsSlice2.default,
  mode: _modeSlice2.default,
  variant: _variantSlice2.default,
  server: _wsSlice2.default
};

exports.default = rootReducer;