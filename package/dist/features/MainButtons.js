'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _AutoGraph = require('@mui/icons-material/AutoGraph');

var _AutoGraph2 = _interopRequireDefault(_AutoGraph);

var _BlurOn = require('@mui/icons-material/BlurOn');

var _BlurOn2 = _interopRequireDefault(_BlurOn);

var _Book = require('@mui/icons-material/Book');

var _Book2 = _interopRequireDefault(_Book);

var _CheckBox = require('@mui/icons-material/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Extension = require('@mui/icons-material/Extension');

var _Extension2 = _interopRequireDefault(_Extension);

var _OndemandVideo = require('@mui/icons-material/OndemandVideo');

var _OndemandVideo2 = _interopRequireDefault(_OndemandVideo);

var _Psychology = require('@mui/icons-material/Psychology');

var _Psychology2 = _interopRequireDefault(_Psychology);

var _QueryStats = require('@mui/icons-material/QueryStats');

var _QueryStats2 = _interopRequireDefault(_QueryStats);

var _Quiz = require('@mui/icons-material/Quiz');

var _Quiz2 = _interopRequireDefault(_Quiz);

var _RestartAlt = require('@mui/icons-material/RestartAlt');

var _RestartAlt2 = _interopRequireDefault(_RestartAlt);

var _Search = require('@mui/icons-material/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Settings = require('@mui/icons-material/Settings');

var _Settings2 = _interopRequireDefault(_Settings);

var _Shuffle = require('@mui/icons-material/Shuffle');

var _Shuffle2 = _interopRequireDefault(_Shuffle);

var _Spellcheck = require('@mui/icons-material/Spellcheck');

var _Spellcheck2 = _interopRequireDefault(_Spellcheck);

var _Storage = require('@mui/icons-material/Storage');

var _Storage2 = _interopRequireDefault(_Storage);

var _TravelExplore = require('@mui/icons-material/TravelExplore');

var _TravelExplore2 = _interopRequireDefault(_TravelExplore);

var _Troubleshoot = require('@mui/icons-material/Troubleshoot');

var _Troubleshoot2 = _interopRequireDefault(_Troubleshoot);

var _Tune = require('@mui/icons-material/Tune');

var _Tune2 = _interopRequireDefault(_Tune);

var _MoveDown = require('@mui/icons-material/MoveDown');

var _MoveDown2 = _interopRequireDefault(_MoveDown);

var _Widgets = require('@mui/icons-material/Widgets');

var _Widgets2 = _interopRequireDefault(_Widgets);

var _material = require('@mui/material');

var _Dispatcher = require('../common/Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Pgn = require('../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

var _Wording = require('../common/Wording');

var _Wording2 = _interopRequireDefault(_Wording);

var _mainButtonsConst = require('../features/mainButtonsConst');

var mainButtonsConst = _interopRequireWildcard(_mainButtonsConst);

var _mainButtonsSlice = require('../features/mainButtonsSlice');

var mainButtons = _interopRequireWildcard(_mainButtonsSlice);

var _loadFenDialogSlice = require('../features/dialog/loadFenDialogSlice');

var loadFenDialog = _interopRequireWildcard(_loadFenDialogSlice);

var _loadPgnDialogSlice = require('../features/dialog/loadPgnDialogSlice');

var loadPgnDialog = _interopRequireWildcard(_loadPgnDialogSlice);

var _eventsStatsDialogSlice = require('../features/dialog/eventsStatsDialogSlice');

var eventsStatsDialog = _interopRequireWildcard(_eventsStatsDialogSlice);

var _openingsStatsDialogSlice = require('../features/dialog/openingsStatsDialogSlice');

var openingsStatsDialog = _interopRequireWildcard(_openingsStatsDialogSlice);

var _playersStatsDialogSlice = require('../features/dialog/playersStatsDialogSlice');

var playersStatsDialog = _interopRequireWildcard(_playersStatsDialogSlice);

var _searchGamesDialogSlice = require('../features/dialog/searchGamesDialogSlice');

var searchGamesDialog = _interopRequireWildcard(_searchGamesDialogSlice);

var _searchEcoDialogSlice = require('../features/dialog/searchEcoDialogSlice');

var searchEcoDialog = _interopRequireWildcard(_searchEcoDialogSlice);

var _progressDialogSlice = require('../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

var _searchMovetextDialogSlice = require('../features/dialog/searchMovetextDialogSlice');

var searchMovetextDialog = _interopRequireWildcard(_searchMovetextDialogSlice);

var _searchNameDialogSlice = require('../features/dialog/searchNameDialogSlice');

var searchNameDialog = _interopRequireWildcard(_searchNameDialogSlice);

var _checkmateSkillsDialogSlice = require('../features/dialog/checkmateSkillsDialogSlice');

var checkmateSkillsDialog = _interopRequireWildcard(_checkmateSkillsDialogSlice);

var _endgameSkillsDialogSlice = require('../features/dialog/endgameSkillsDialogSlice');

var endgameSkillsDialog = _interopRequireWildcard(_endgameSkillsDialogSlice);

var _settingsDialogSlice = require('../features/dialog/settingsDialogSlice');

var settingsDialog = _interopRequireWildcard(_settingsDialogSlice);

var _watchDialogSlice = require('../features/dialog/watchDialogSlice');

var watchDialog = _interopRequireWildcard(_watchDialogSlice);

var _modeConst = require('../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _modeSlice = require('../features/mode/modeSlice');

var mode = _interopRequireWildcard(_modeSlice);

var _variantConst = require('../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsAction = require('../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainButtons = function MainButtons(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorElAnalysis = _useState2[0],
      setAnchorElAnalysis = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorElDatabase = _useState4[0],
      setAnchorElDatabase = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      anchorElTraining = _useState6[0],
      setAnchorElTraining = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      anchorElOpeningSearch = _useState8[0],
      setAnchorElOpeningSearch = _useState8[1];

  var matches = (0, _material.useMediaQuery)("(min-width:900px)");

  var handleCloseAnalysis = function handleCloseAnalysis() {
    setAnchorElAnalysis(null);
  };

  var handleCloseDatabase = function handleCloseDatabase() {
    setAnchorElDatabase(null);
  };

  var handleCloseTraining = function handleCloseTraining() {
    setAnchorElTraining(null);
  };

  var handleCloseOpeningSearch = function handleCloseOpeningSearch() {
    setAnchorElOpeningSearch(null);
  };

  var handleClickAnalysis = function handleClickAnalysis(event) {
    setAnchorElAnalysis(event.currentTarget);
  };

  var handleClickDatabase = function handleClickDatabase(event) {
    setAnchorElDatabase(event.currentTarget);
  };

  var handleClickTraining = function handleClickTraining(event) {
    setAnchorElTraining(event.currentTarget);
  };

  var handleClickOpeningSearch = function handleClickOpeningSearch(event) {
    setAnchorElOpeningSearch(event.currentTarget);
  };

  var disabled = state.mode.name === modeConst.PLAY && state.mode.play.accepted && (!state.mode.play.draw || state.mode.play.draw === _Wording2.default.verb.PROPOSE.toLowerCase()) && !state.mode.play.resign && !state.mode.play.leave && !state.mode.play.timer.over && !state.board.isMate;

  return _react2.default.createElement(
    _material.ButtonGroup,
    {
      orientation: 'vertical',
      variant: 'text',
      'aria-label': 'Main Menu',
      fullWidth: matches ? false : true,
      disabled: disabled
    },
    _react2.default.createElement(
      _material.Button,
      {
        sx: { borderRadius: 0 },
        variant: state.mainButtons.name === mainButtonsConst.ANALYSIS ? "contained" : "text",
        startIcon: _react2.default.createElement(_Tune2.default, null),
        onClick: handleClickAnalysis
      },
      'Analysis Board'
    ),
    _react2.default.createElement(
      _material.Menu,
      {
        anchorEl: anchorElAnalysis,
        open: Boolean(anchorElAnalysis),
        onClose: handleCloseAnalysis
      },
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(mainButtons.setAnalysis());
            _Dispatcher2.default.initGui(dispatch);
            _WsAction2.default.start(state, variantConst.CLASSICAL, modeConst.ANALYSIS);
            handleCloseAnalysis();
          } },
        _react2.default.createElement(_RestartAlt2.default, { size: 'small' }),
        '\xA0Start Classical'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(mainButtons.setAnalysis());
            _Dispatcher2.default.initGui(dispatch);
            _WsAction2.default.start(state, variantConst.CHESS_960, modeConst.ANALYSIS);
            handleCloseAnalysis();
          } },
        _react2.default.createElement(_Shuffle2.default, { size: 'small' }),
        '\xA0Start Fischer Random 960'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(mainButtons.setAnalysis());
            _Dispatcher2.default.initGui(dispatch);
            _WsAction2.default.start(state, variantConst.CAPABLANCA_80, modeConst.ANALYSIS);
            handleCloseAnalysis();
          } },
        _react2.default.createElement(_BlurOn2.default, { size: 'small' }),
        '\xA0Start Capablanca'
      ),
      _react2.default.createElement(_material.Divider, null),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(loadPgnDialog.open());
            handleCloseAnalysis();
          } },
        _react2.default.createElement(_MoveDown2.default, { size: 'small' }),
        '\xA0PGN Movetext'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(loadFenDialog.open());
            handleCloseAnalysis();
          } },
        _react2.default.createElement(_Widgets2.default, { size: 'small' }),
        '\xA0FEN String'
      )
    ),
    _react2.default.createElement(
      _material.Button,
      {
        variant: state.mainButtons.name === mainButtonsConst.OPENING_SEARCH ? "contained" : "text",
        startIcon: _react2.default.createElement(_Search2.default, null),
        onClick: handleClickOpeningSearch
      },
      'Opening Search'
    ),
    _react2.default.createElement(
      _material.Button,
      {
        variant: state.mainButtons.name === mainButtonsConst.MAIN_BUTTON_OPENING_DATABASE ? "contained" : "text",
        startIcon: _react2.default.createElement(_Storage2.default, null),
        onClick: handleClickDatabase
      },
      'Database'
    ),
    _react2.default.createElement(
      _material.Menu,
      {
        anchorEl: anchorElDatabase,
        open: Boolean(anchorElDatabase),
        onClose: handleCloseDatabase
      },
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(progressDialog.open());
            fetch(props.api.prot + '://' + props.api.host + ':' + props.api.port + '/api/autocomplete').then(function (res) {
              if (res.status === 200) {
                res.json().then(function (data) {
                  dispatch(searchGamesDialog.setAutocomplete(data));
                });
              } else {
                dispatch(infoAlert.show({ info: 'Whoops! Something went wrong, please try again.' }));
              }
            }).finally(function () {
              dispatch(progressDialog.close());
              dispatch(searchGamesDialog.open());
              handleCloseDatabase();
            });
          } },
        _react2.default.createElement(_TravelExplore2.default, { size: 'small' }),
        '\xA0Search Games'
      ),
      _react2.default.createElement(_material.Divider, null),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(progressDialog.open());
            fetch(props.api.prot + '://' + props.api.host + ':' + props.api.port + '/api/stats/opening').then(function (res) {
              if (res.status === 200) {
                res.json().then(function (data) {
                  dispatch(openingsStatsDialog.setStats(data));
                });
              } else {
                dispatch(infoAlert.show({ info: 'Whoops! Something went wrong, please try again.' }));
              }
            }).finally(function () {
              dispatch(progressDialog.close());
              dispatch(openingsStatsDialog.open());
              handleCloseDatabase();
            });
          } },
        _react2.default.createElement(_AutoGraph2.default, { size: 'small' }),
        '\xA0Top 50 Openings'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(progressDialog.open());
            fetch(props.api.prot + '://' + props.api.host + ':' + props.api.port + '/api/autocomplete').then(function (res) {
              if (res.status === 200) {
                res.json().then(function (data) {
                  dispatch(playersStatsDialog.setAutocomplete(data));
                });
              } else {
                dispatch(infoAlert.show({ info: 'Whoops! Something went wrong, please try again.' }));
              }
            }).finally(function () {
              dispatch(progressDialog.close());
              dispatch(playersStatsDialog.open());
              handleCloseDatabase();
            });
          } },
        _react2.default.createElement(_QueryStats2.default, { size: 'small' }),
        '\xA0Players Stats'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(progressDialog.open());
            fetch(props.api.prot + '://' + props.api.host + ':' + props.api.port + '/api/autocomplete').then(function (res) {
              if (res.status === 200) {
                res.json().then(function (data) {
                  dispatch(eventsStatsDialog.setAutocomplete(data));
                });
              } else {
                dispatch(infoAlert.show({ info: 'Whoops! Something went wrong, please try again.' }));
              }
            }).finally(function () {
              dispatch(progressDialog.close());
              dispatch(eventsStatsDialog.open());
              handleCloseDatabase();
            });
          } },
        _react2.default.createElement(_Troubleshoot2.default, { size: 'small' }),
        '\xA0Events Stats'
      )
    ),
    _react2.default.createElement(
      _material.Button,
      {
        variant: state.mainButtons.name === mainButtonsConst.TRAINING ? "contained" : "text",
        startIcon: _react2.default.createElement(_Psychology2.default, null),
        onClick: handleClickTraining
      },
      'Training'
    ),
    _react2.default.createElement(
      _material.Menu,
      {
        anchorEl: anchorElTraining,
        open: Boolean(anchorElTraining),
        onClose: handleCloseTraining
      },
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(mainButtons.setTraining());
            _Dispatcher2.default.initGui(dispatch);
            _WsAction2.default.start(state, variantConst.CLASSICAL, modeConst.GM, {
              color: _Pgn2.default.symbol.WHITE
            });
            handleCloseTraining();
          } },
        _react2.default.createElement(_Quiz2.default, { size: 'small' }),
        '\xA0Guess the Move'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(endgameSkillsDialog.open());
            handleCloseTraining();
          } },
        _react2.default.createElement(_Extension2.default, { size: 'small' }),
        '\xA0Endgame Skills'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(checkmateSkillsDialog.open());
            handleCloseTraining();
          } },
        _react2.default.createElement(_CheckBox2.default, { size: 'small' }),
        '\xA0Checkmate Skills'
      )
    ),
    _react2.default.createElement(
      _material.Menu,
      {
        anchorEl: anchorElOpeningSearch,
        open: Boolean(anchorElOpeningSearch),
        onClose: handleCloseOpeningSearch
      },
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(searchEcoDialog.open());
            handleCloseOpeningSearch();
          } },
        _react2.default.createElement(_Book2.default, { size: 'small' }),
        '\xA0ECO Code'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(searchMovetextDialog.open());
            handleCloseOpeningSearch();
          } },
        _react2.default.createElement(_MoveDown2.default, { size: 'small' }),
        '\xA0PGN Movetext'
      ),
      _react2.default.createElement(
        _material.MenuItem,
        { onClick: function onClick() {
            dispatch(searchNameDialog.open());
            handleCloseOpeningSearch();
          } },
        _react2.default.createElement(_Spellcheck2.default, { size: 'small' }),
        '\xA0Name'
      )
    ),
    _react2.default.createElement(
      _material.Button,
      {
        startIcon: _react2.default.createElement(_OndemandVideo2.default, null),
        onClick: function onClick() {
          return dispatch(watchDialog.open());
        }
      },
      'Watch'
    ),
    _react2.default.createElement(
      _material.Button,
      {
        sx: { borderRadius: 0 },
        startIcon: _react2.default.createElement(_Settings2.default, null),
        onClick: function onClick() {
          return dispatch(settingsDialog.open());
        }
      },
      'Settings'
    )
  );
};

exports.default = MainButtons;