'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _material = require('@mui/material');

var _searchEcoDialogSlice = require('./searchEcoDialogSlice');

var searchEcoDialog = _interopRequireWildcard(_searchEcoDialogSlice);

var _Opening = require('../../common/Opening.js');

var _Opening2 = _interopRequireDefault(_Opening);

var _OpeningSearchResultTable = require('../../features/table/OpeningSearchResultTable.js');

var _OpeningSearchResultTable2 = _interopRequireDefault(_OpeningSearchResultTable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchEcoDialog = function SearchEcoDialog(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      openings = _useState2[0],
      setOpenings = _useState2[1];

  var dispatch = (0, _reactRedux.useDispatch)();

  var handleChange = function handleChange(event) {
    event.preventDefault();
    setOpenings([]);
    setOpenings(_Opening2.default.byEco(event.target.value));
  };

  return _react2.default.createElement(
    _material.Dialog,
    { open: state.searchEcoDialog.open, maxWidth: 'sm', fullWidth: true },
    _react2.default.createElement(
      _material.DialogTitle,
      null,
      'ECO Code',
      _react2.default.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            setOpenings([]);
            dispatch(searchEcoDialog.close());
          } },
        _react2.default.createElement(_Close2.default, null)
      )
    ),
    _react2.default.createElement(
      _material.DialogContent,
      null,
      _react2.default.createElement(
        _material.TextField,
        {
          select: true,
          fullWidth: true,
          required: true,
          name: 'code',
          label: 'Select an option',
          variant: 'filled',
          defaultValue: '',
          margin: 'normal',
          onChange: handleChange
        },
        _react2.default.createElement(
          _material.MenuItem,
          { value: '', disabled: true },
          'Select an option'
        ),
        _react2.default.createElement(
          _material.MenuItem,
          { key: 0, value: 'A' },
          'A: Flank Openings'
        ),
        _react2.default.createElement(
          _material.MenuItem,
          { key: 1, value: 'B' },
          'B: Semi-Open Games other than the French Defense'
        ),
        _react2.default.createElement(
          _material.MenuItem,
          { key: 2, value: 'C' },
          'C: Open Games and the French Defense'
        ),
        _react2.default.createElement(
          _material.MenuItem,
          { key: 3, value: 'D' },
          'D: Closed Games and Semi-Closed Games'
        ),
        _react2.default.createElement(
          _material.MenuItem,
          { key: 4, value: 'E' },
          'E: Indian Defenses'
        )
      ),
      _react2.default.createElement(_OpeningSearchResultTable2.default, { props: { openings: openings } })
    )
  );
};

exports.default = SearchEcoDialog;