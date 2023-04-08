'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _material = require('@mui/material');

var _Autocomplete = require('@mui/material/Autocomplete');

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

var _infoAlertSlice = require('../../features/alert/infoAlertSlice');

var infoAlert = _interopRequireWildcard(_infoAlertSlice);

var _searchGamesDialogSlice = require('../../features/dialog/searchGamesDialogSlice');

var searchGamesDialog = _interopRequireWildcard(_searchGamesDialogSlice);

var _progressDialogSlice = require('../../features/dialog/progressDialogSlice');

var progressDialog = _interopRequireWildcard(_progressDialogSlice);

var _DatabaseResultTable = require('../../features/table/DatabaseResultTable.js');

var _DatabaseResultTable2 = _interopRequireDefault(_DatabaseResultTable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var filterOptions = (0, _Autocomplete.createFilterOptions)({
  matchFrom: 'any',
  limit: 25
});

var SearchGamesDialog = function SearchGamesDialog(_ref) {
  var props = _ref.props;

  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _React$useState = _react2.default.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      result = _React$useState2[0],
      setResult = _React$useState2[1];

  var handleSearch = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var _JSON$stringify;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              dispatch(progressDialog.open());
              _context.next = 4;
              return fetch(props.api.prot + '://' + props.api.host + ':' + props.api.port + '/api/search', {
                method: 'POST',
                body: JSON.stringify((_JSON$stringify = {}, _defineProperty(_JSON$stringify, event.target.elements.Event.name, event.target.elements.Event.value), _defineProperty(_JSON$stringify, event.target.elements.Date.name, event.target.elements.Date.value), _defineProperty(_JSON$stringify, event.target.elements.ECO.name, event.target.elements.ECO.value), _defineProperty(_JSON$stringify, event.target.elements.White.name, event.target.elements.White.value), _defineProperty(_JSON$stringify, event.target.elements.Black.name, event.target.elements.Black.value), _defineProperty(_JSON$stringify, event.target.elements.Result.name, event.target.elements.Result.value), _JSON$stringify))
              }).then(function (res) {
                dispatch(progressDialog.close());
                if (res.status === 200) {
                  res.json().then(function (data) {
                    setResult(data);
                  });
                } else if (res.status === 204) {
                  dispatch(searchGamesDialog.close());
                  dispatch(infoAlert.show({ info: 'No results were found, please try again.' }));
                } else {
                  dispatch(searchGamesDialog.close());
                  dispatch(infoAlert.show({ info: 'Whoops! Something went wrong, please try again.' }));
                }
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function handleSearch(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react2.default.createElement(
    _material.Dialog,
    { open: state.searchGamesDialog.open, maxWidth: 'md', fullWidth: true },
    _react2.default.createElement(
      _material.DialogTitle,
      null,
      'Search Games',
      _react2.default.createElement(
        _material.IconButton,
        { onClick: function onClick() {
            return dispatch(searchGamesDialog.close());
          } },
        _react2.default.createElement(_Close2.default, null)
      )
    ),
    _react2.default.createElement(
      _material.DialogContent,
      null,
      _react2.default.createElement(
        _material.Alert,
        {
          style: { marginBottom: 15 },
          className: 'info-alert',
          severity: 'info'
        },
        'Click on the ',
        _react2.default.createElement(
          'b',
          null,
          'Search'
        ),
        ' button, and find up to 25 random games matching the criteria on a database of thousands of games.'
      ),
      _react2.default.createElement(
        'form',
        { onSubmit: handleSearch },
        _react2.default.createElement(
          _material.Grid,
          { container: true, spacing: 2 },
          _react2.default.createElement(
            _material.Grid,
            { item: true, xs: 12, md: 4 },
            _react2.default.createElement(_Autocomplete2.default, {
              id: 'Event',
              options: state.searchGamesDialog.autocomplete.events.map(function (option) {
                return option.Event;
              }),
              filterOptions: filterOptions,
              renderInput: function renderInput(params) {
                return _react2.default.createElement(_material.TextField, _extends({}, params, { label: 'Event', variant: 'filled', name: 'Event' }));
              }
            })
          ),
          _react2.default.createElement(
            _material.Grid,
            { item: true, xs: 12, md: 4 },
            _react2.default.createElement(_material.TextField, {
              fullWidth: true,
              name: 'Date',
              label: 'Year',
              variant: 'filled',
              type: 'number',
              inputProps: { min: "1750", max: "2023", step: "1" }
            })
          ),
          _react2.default.createElement(
            _material.Grid,
            { item: true, xs: 12, md: 4 },
            _react2.default.createElement(_material.TextField, {
              fullWidth: true,
              name: 'ECO',
              label: 'ECO Code',
              variant: 'filled'
            })
          ),
          _react2.default.createElement(
            _material.Grid,
            { item: true, xs: 12, md: 4 },
            _react2.default.createElement(_Autocomplete2.default, {
              id: 'White',
              options: state.searchGamesDialog.autocomplete.players.map(function (option) {
                return option.name;
              }),
              filterOptions: filterOptions,
              renderInput: function renderInput(params) {
                return _react2.default.createElement(_material.TextField, _extends({}, params, { label: 'White', variant: 'filled', name: 'White' }));
              }
            })
          ),
          _react2.default.createElement(
            _material.Grid,
            { item: true, xs: 12, md: 4 },
            _react2.default.createElement(_Autocomplete2.default, {
              id: 'Black',
              options: state.searchGamesDialog.autocomplete.players.map(function (option) {
                return option.name;
              }),
              filterOptions: filterOptions,
              renderInput: function renderInput(params) {
                return _react2.default.createElement(_material.TextField, _extends({}, params, { label: 'Black', variant: 'filled', name: 'Black' }));
              }
            })
          ),
          _react2.default.createElement(
            _material.Grid,
            { item: true, xs: 12, md: 4 },
            _react2.default.createElement(
              _material.TextField,
              {
                fullWidth: true,
                select: true,
                name: 'Result',
                label: 'Result',
                variant: 'filled',
                defaultValue: ''
              },
              _react2.default.createElement(
                _material.MenuItem,
                { value: '', disabled: true },
                'Select an option'
              ),
              _react2.default.createElement(
                _material.MenuItem,
                { key: 0, value: '1-0' },
                '1-0'
              ),
              _react2.default.createElement(
                _material.MenuItem,
                { key: 1, value: '1/2-1/2' },
                '1/2-1/2'
              ),
              _react2.default.createElement(
                _material.MenuItem,
                { key: 2, value: '0-1' },
                '0-1'
              )
            )
          )
        ),
        _react2.default.createElement(
          _material.Button,
          {
            fullWidth: true,
            variant: 'outlined',
            type: 'submit',
            sx: { mt: 2 }
          },
          'Search'
        )
      ),
      _react2.default.createElement(_DatabaseResultTable2.default, { props: { result: result } })
    )
  );
};

exports.default = SearchGamesDialog;