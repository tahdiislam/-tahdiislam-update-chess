'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toolkit = require('@reduxjs/toolkit');

var _rootReducer = require('./rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: _rootReducer2.default,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

exports.default = store;