'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pgn = require('../../common/Pgn');

var _Pgn2 = _interopRequireDefault(_Pgn);

var _modeConst = require('../../features/mode/modeConst');

var modeConst = _interopRequireWildcard(_modeConst);

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

var _WsEventListener = require('../../features/ws/WsEventListener');

var _WsEventListener2 = _interopRequireDefault(_WsEventListener);

var _wsSlice = require('../../features/ws/wsSlice');

var wsSlice = _interopRequireWildcard(_wsSlice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WsAction = function WsAction() {
  _classCallCheck(this, WsAction);
};

WsAction.connect = function (state, props) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var ws = new WebSocket(props.server.prot + '://' + props.server.host + ':' + props.server.port);
      ws.onmessage = function (res) {
        dispatch(_WsEventListener2.default.listen(props, JSON.parse(res.data)));
        resolve(res.data);
      };
      ws.onerror = function (err) {
        dispatch(wsSlice.connError());
        reject(err);
      };
      ws.onopen = function () {
        dispatch(wsSlice.connEstablished({ ws: ws }));
        resolve(ws);
      };
    });
  };
};

WsAction.startOff = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ws) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ws.send('/start classical analysis');

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

WsAction.start = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(state, variant, mode) {
    var add = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var mssg;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mssg = '/start ' + variant + ' ' + mode;

            if (Object.keys(add).length > 0) {
              if (mode === modeConst.GM) {
                mssg += ' "' + add.color + '"';
              } else if (mode === modeConst.FEN && variant === variantConst.CLASSICAL) {
                mssg += ' "' + add.fen + '"';
              } else if (mode === modeConst.FEN && variant === variantConst.CAPABLANCA_80) {
                mssg += ' "' + add.fen + '"';
              } else if (mode === modeConst.FEN && variant === variantConst.CHESS_960) {
                mssg += ' "' + add.fen + '" ' + add.startPos;
              } else if (mode === modeConst.PGN && variant === variantConst.CLASSICAL) {
                mssg += ' "' + add.movetext + '"';
              } else if (mode === modeConst.PGN && variant === variantConst.CAPABLANCA_80) {
                mssg += ' "' + add.movetext + '"';
              } else if (mode === modeConst.PGN && variant === variantConst.CHESS_960) {
                mssg += ' "' + add.movetext + '" ' + add.startPos;
              } else if (mode === modeConst.PLAY) {
                mssg += ' ' + JSON.stringify(add.settings);
              } else if (mode === modeConst.STOCKFISH) {
                if (add.hasOwnProperty('color')) {
                  mssg += ' ' + add.color;
                } else if (add.hasOwnProperty('fen')) {
                  mssg += ' "' + add.fen + '"';
                }
              }
            }

            _context2.next = 4;
            return state.server.ws.send(mssg);

          case 4:
            return _context2.abrupt('return', _context2.sent);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

WsAction.onlineGames = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(state) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return state.server.ws.send('/online_games');

          case 2:
            return _context3.abrupt('return', _context3.sent);

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x6) {
    return _ref3.apply(this, arguments);
  };
}();

WsAction.playLan = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(state) {
    var color;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            color = state.board.turn === _Pgn2.default.symbol.WHITE ? _Pgn2.default.symbol.BLACK : _Pgn2.default.symbol.WHITE;
            _context4.next = 3;
            return state.server.ws.send('/play_lan ' + color + ' ' + state.board.lan);

          case 3:
            return _context4.abrupt('return', _context4.sent);

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x7) {
    return _ref4.apply(this, arguments);
  };
}();

WsAction.accept = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(state, hash) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return state.server.ws.send('/accept ' + hash);

          case 2:
            return _context5.abrupt('return', _context5.sent);

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function (_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

WsAction.legalSqs = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(state, sq) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return state.server.ws.send('/legal_sqs ' + sq);

          case 2:
            return _context6.abrupt('return', _context6.sent);

          case 3:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function (_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

WsAction.heuristics = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(state, movetext) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return state.server.ws.send('/heuristics "' + movetext + '"');

          case 2:
            return _context7.abrupt('return', _context7.sent);

          case 3:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function (_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

WsAction.heuristicsBar = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(state, fen, variant) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!(state.settingsDialog.fields.heuristics === 'on')) {
              _context8.next = 4;
              break;
            }

            _context8.next = 3;
            return state.server.ws.send('/heuristics_bar "' + fen + '" ' + variant);

          case 3:
            return _context8.abrupt('return', _context8.sent);

          case 4:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined);
  }));

  return function (_x14, _x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

WsAction.takeback = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(state, action) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return state.server.ws.send('/takeback ' + action);

          case 2:
            return _context9.abrupt('return', _context9.sent);

          case 3:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

WsAction.draw = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(state, action) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return state.server.ws.send('/draw ' + action);

          case 2:
            return _context10.abrupt('return', _context10.sent);

          case 3:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

WsAction.undo = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(state) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return state.server.ws.send('/undo');

          case 2:
            return _context11.abrupt('return', _context11.sent);

          case 3:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, undefined);
  }));

  return function (_x21) {
    return _ref11.apply(this, arguments);
  };
}();

WsAction.resign = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(state, action) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return state.server.ws.send('/resign ' + action);

          case 2:
            return _context12.abrupt('return', _context12.sent);

          case 3:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, undefined);
  }));

  return function (_x22, _x23) {
    return _ref12.apply(this, arguments);
  };
}();

WsAction.rematch = function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(state, action) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return state.server.ws.send('/rematch ' + action);

          case 2:
            return _context13.abrupt('return', _context13.sent);

          case 3:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, undefined);
  }));

  return function (_x24, _x25) {
    return _ref13.apply(this, arguments);
  };
}();

WsAction.restart = function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(state) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return state.server.ws.send('/restart ' + state.mode.play.hash);

          case 2:
            return _context14.abrupt('return', _context14.sent);

          case 3:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, undefined);
  }));

  return function (_x26) {
    return _ref14.apply(this, arguments);
  };
}();

WsAction.randomizer = function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(state, color, items) {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            items = JSON.stringify(items).replace(/"/g, '\\"');
            _context15.next = 3;
            return state.server.ws.send('/randomizer ' + color + ' "' + items + '"');

          case 3:
            return _context15.abrupt('return', _context15.sent);

          case 4:
          case 'end':
            return _context15.stop();
        }
      }
    }, _callee15, undefined);
  }));

  return function (_x27, _x28, _x29) {
    return _ref15.apply(this, arguments);
  };
}();

WsAction.stockfish = function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(state) {
    var options, params;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            options = JSON.stringify(state.mode.computer.options).replace(/"/g, '\\"');
            params = JSON.stringify(state.mode.computer.params).replace(/"/g, '\\"');
            _context16.next = 4;
            return state.server.ws.send('/stockfish "' + options + '" "' + params + '"');

          case 4:
            return _context16.abrupt('return', _context16.sent);

          case 5:
          case 'end':
            return _context16.stop();
        }
      }
    }, _callee16, undefined);
  }));

  return function (_x30) {
    return _ref16.apply(this, arguments);
  };
}();

exports.default = WsAction;