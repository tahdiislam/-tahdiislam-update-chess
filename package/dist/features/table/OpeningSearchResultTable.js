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

var _progressDialogSlice = require('../../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

var _searchEcoDialogSlice = require('../../features/dialog/searchEcoDialogSlice');

var searchEcoDialog = _interopRequireWildcard(_searchEcoDialogSlice);

var _searchMovetextDialogSlice = require('../../features/dialog/searchMovetextDialogSlice');

var searchMovetextDialog = _interopRequireWildcard(_searchMovetextDialogSlice);

var _searchNameDialogSlice = require('../../features/dialog/searchNameDialogSlice');

var searchNameDialog = _interopRequireWildcard(_searchNameDialogSlice);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsAction = require('../../features/ws/WsAction');

var _WsAction2 = _interopRequireDefault(_WsAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  clickable: {
    cursor: 'pointer',
    backgroundColor: '#ececec'
  }
};

var OpeningSearchResultTable = function OpeningSearchResultTable(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var handleLoad = function handleLoad(movetext) {
    dispatch(searchEcoDialog.close());
    dispatch(searchMovetextDialog.close());
    dispatch(searchNameDialog.close());
    dispatch(progressDialog.open());
    dispatch(mainButtons.setOpeningSearch());
    _Dispatcher2.default.initGui(dispatch);
    _WsAction2.default.start(state, variantConst.CLASSICAL, modeConst.PGN, {
      movetext: movetext
    });
  };

  return _react2.default.createElement(
    _material.TableContainer,
    { sx: { mt: 1.5 }, component: _material.Paper },
    _react2.default.createElement(
      _material.Table,
      { stickyHeader: true, 'aria-label': 'simple table' },
      _react2.default.createElement(
        _material.TableBody,
        null,
        props.openings.map(function (item, i) {
          return _react2.default.createElement(
            _material.TableRow,
            {
              key: i,
              hover: true,
              sx: styles.clickable,
              onClick: function onClick() {
                return handleLoad(item.movetext);
              }
            },
            _react2.default.createElement(
              _material.TableCell,
              { align: 'right' },
              item.eco
            ),
            _react2.default.createElement(
              _material.TableCell,
              { align: 'right' },
              item.name
            ),
            _react2.default.createElement(
              _material.TableCell,
              { align: 'right' },
              item.movetext
            )
          );
        })
      )
    )
  );
};

exports.default = OpeningSearchResultTable;