'use strict';

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('@cfaester/enzyme-adapter-react-18');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });