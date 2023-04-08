'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

var _Dispatcher = require('../../common/Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _mainButtonsSlice = require('../../features/mainButtonsSlice');

var mainButtons = _interopRequireWildcard(_mainButtonsSlice);

var _searchGamesDialogSlice = require('../../features/dialog/searchGamesDialogSlice');

var searchGamesDialog = _interopRequireWildcard(_searchGamesDialogSlice);

var _progressDialogSlice = require('../../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _gameTableSlice = require('../../features/table/gameTableSlice');

var gameTable = _interopRequireWildcard(_gameTableSlice);

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  tableContainer: {
    mt: 1
  },
  eventCell: {
    width: '20%'
  },
  yearCell: {
    width: '5%'
  },
  ecoCell: {
    width: '5%'
  },
  whiteCell: {
    width: '20%'
  },
  blackCell: {
    width: '20%'
  },
  eloCell: {
    width: '5%'
  },
  resultCell: {
    width: '10%'
  },
  actionCell: {
    width: '10%'
  },
  clickable: {
    cursor: 'pointer',
    backgroundColor: '#ececec'
  }
};

var DatabaseResultTable = function DatabaseResultTable(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var handleLoad = function handleLoad(item) {
    dispatch(searchGamesDialog.close());
    dispatch(progressDialog.open());
    dispatch(mainButtons.setDatabase());
    _Dispatcher2.default.initGui(dispatch);
    _WsAction2.default.start(state, variantConst.CLASSICAL, modeConst.PGN, {
      movetext: item.movetext
    });
    dispatch(gameTable.show({
      game: {
        Event: item.Event,
        Site: item.Site,
        Date: item.Date,
        White: item.White,
        Black: item.Black,
        'White ELO': item.WhiteElo,
        'Black ELO': item.BlackElo,
        Result: item.Result,
        ECO: item.ECO
      }
    }));
  };

  return _react2.default.createElement(
    _material.TableContainer,
    {
      sx: styles.tableContainer,
      component: _material.Paper
    },
    _react2.default.createElement(
      _material.Table,
      { stickyHeader: true, 'aria-label': 'simple table' },
      props.result.length > 0 ? _react2.default.createElement(
        _material.TableHead,
        null,
        _react2.default.createElement(
          _material.TableRow,
          null,
          _react2.default.createElement(
            _material.TableCell,
            { sx: styles.eventCell, align: 'left' },
            'Event'
          ),
          _react2.default.createElement(
            _material.TableCell,
            { sx: styles.yearCell, align: 'left' },
            'Year'
          ),
          _react2.default.createElement(
            _material.TableCell,
            { sx: styles.ecoCell, align: 'left' },
            'ECO'
          ),
          _react2.default.createElement(
            _material.TableCell,
            { sx: styles.whiteCell, align: 'left' },
            'White'
          ),
          _react2.default.createElement(
            _material.TableCell,
            { sx: styles.eloCell, align: 'left' },
            'ELO'
          ),
          _react2.default.createElement(
            _material.TableCell,
            { sx: styles.blackCell, align: 'left' },
            'Black'
          ),
          _react2.default.createElement(
            _material.TableCell,
            { sx: styles.eloCell, align: 'left' },
            'ELO'
          ),
          _react2.default.createElement(
            _material.TableCell,
            { sx: styles.resultCell, align: 'left' },
            'Result'
          )
        )
      ) : null,
      _react2.default.createElement(
        _material.TableBody,
        null,
        props.result.map(function (item, i) {
          return _react2.default.createElement(
            _material.TableRow,
            {
              key: i,
              hover: true,
              sx: styles.clickable,
              onClick: function onClick() {
                return handleLoad(item);
              }
            },
            _react2.default.createElement(
              _material.TableCell,
              { sx: styles.eventCell, align: 'left' },
              item.Event
            ),
            _react2.default.createElement(
              _material.TableCell,
              { sx: styles.yearCell, align: 'left' },
              parseInt(item.Date)
            ),
            _react2.default.createElement(
              _material.TableCell,
              { sx: styles.ecoCell, align: 'left' },
              item.ECO
            ),
            _react2.default.createElement(
              _material.TableCell,
              { sx: styles.whiteCell, align: 'left' },
              item.White
            ),
            _react2.default.createElement(
              _material.TableCell,
              { sx: styles.eloCell, align: 'left' },
              item.WhiteElo
            ),
            _react2.default.createElement(
              _material.TableCell,
              { sx: styles.blackCell, align: 'left' },
              item.Black
            ),
            _react2.default.createElement(
              _material.TableCell,
              { sx: styles.eloCell, align: 'left' },
              item.BlackElo
            ),
            _react2.default.createElement(
              _material.TableCell,
              { sx: styles.resultCell, align: 'left' },
              item.Result
            )
          );
        })
      )
    )
  );
};

exports.default = DatabaseResultTable;