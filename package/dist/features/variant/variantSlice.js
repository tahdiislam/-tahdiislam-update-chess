'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startChess960 = exports.startCapablanca80 = exports.startClassical = undefined;

var _toolkit = require('@reduxjs/toolkit');

var _variantConst = require('../../features/variant/variantConst');

var variantConst = _interopRequireWildcard(_variantConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  name: variantConst.CLASSICAL
};

var variantSlice = (0, _toolkit.createSlice)({
  name: 'variant',
  initialState: initialState,
  reducers: {
    startClassical: function startClassical() {
      return initialState;
    },
    startCapablanca80: function startCapablanca80(state) {
      state.name = variantConst.CAPABLANCA_80;
    },
    startChess960: function startChess960(state, action) {
      state.name = variantConst.CHESS_960;
      state.startPos = action.payload.startPos;
    }
  }
});

var _variantSlice$actions = variantSlice.actions,
    startClassical = _variantSlice$actions.startClassical,
    startCapablanca80 = _variantSlice$actions.startCapablanca80,
    startChess960 = _variantSlice$actions.startChess960;
exports.startClassical = startClassical;
exports.startCapablanca80 = startCapablanca80;
exports.startChess960 = startChess960;
exports.default = variantSlice.reducer;