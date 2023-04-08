'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Chess = require('features/Chess');

var _Chess2 = _interopRequireDefault(_Chess);

var _testUtils = require('react-dom/test-utils');

var _reactHooks = require('@testing-library/react-hooks');

var _enzyme = require('enzyme');

var _createInviteCodeDialogSlice = require('features/dialog/createInviteCodeDialogSlice');

var createInviteCodeDialog = _interopRequireWildcard(_createInviteCodeDialogSlice);

var _loadFenDialogSlice = require('features/dialog/loadFenDialogSlice');

var loadFenDialog = _interopRequireWildcard(_loadFenDialogSlice);

var _loadPgnDialogSlice = require('features/dialog/loadPgnDialogSlice');

var loadPgnDialog = _interopRequireWildcard(_loadPgnDialogSlice);

var _boardSlice = require('features/board/boardSlice');

var _store = require('app/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SyncDispatcher = function SyncDispatcher(action) {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  (0, _react.useEffect)(function () {
    (0, _testUtils.act)(function () {
      dispatch(action);
    });
  }, [dispatch]);

  return { state: state };
};

var wrapper = function wrapper(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    children
  );
};

var props = {
  server: {
    prot: 'wss',
    host: 'pchess.net',
    port: '8443'
  }
};

describe("Chess", function () {
  it("is rendered", function () {
    var chess = (0, _enzyme.mount)(_react2.default.createElement(_Chess2.default, { props: props }));
  });
  it("the first chess board square is a black rook before flipping the chess board", function () {
    var chess = (0, _enzyme.mount)(_react2.default.createElement(_Chess2.default, { props: props }));
    var text = chess.find('.board').at(0).find('.sq').at(0).find('img').at(0).prop('src');
    expect(_store2.default.getState().board.flip).toBe('w');
    expect(text).toEqual('bRook.svg');
  });
  it("the first chess board square is a white rook after flipping the chess board", function () {
    var _renderHook = (0, _reactHooks.renderHook)(function () {
      return SyncDispatcher((0, _boardSlice.flip)());
    }, { wrapper: wrapper }),
        result = _renderHook.result;

    var chess = (0, _enzyme.mount)(_react2.default.createElement(_Chess2.default, { props: props }));
    var text = chess.find('.board').at(0).find('.sq').at(0).find('img').at(0).prop('src');
    expect(result.current.state.board.flip).toBe('b');
    expect(text).toEqual('wRook.svg');
  });
  it("opens the 'Play a Friend' > 'Create Invite Code' dialog", function () {
    var _renderHook2 = (0, _reactHooks.renderHook)(function () {
      return SyncDispatcher(createInviteCodeDialog.open());
    }, { wrapper: wrapper }),
        result = _renderHook2.result;

    expect(result.current.state.createInviteCodeDialog.open).toBe(true);
  });
  it("opens the 'Analysis Board' > 'FEN String' dialog", function () {
    var _renderHook3 = (0, _reactHooks.renderHook)(function () {
      return SyncDispatcher(loadFenDialog.open());
    }, { wrapper: wrapper }),
        result = _renderHook3.result;

    expect(result.current.state.loadFenDialog.open).toBe(true);
  });
  it("opens the 'Analysis Board' > 'PGN Movetext' dialog", function () {
    var _renderHook4 = (0, _reactHooks.renderHook)(function () {
      return SyncDispatcher(loadPgnDialog.open());
    }, { wrapper: wrapper }),
        result = _renderHook4.result;

    expect(result.current.state.loadPgnDialog.open).toBe(true);
  });
});