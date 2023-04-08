'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = require('../app/store');

var _store2 = _interopRequireDefault(_store);

var _Ascii = require('../common/Ascii');

var _Ascii2 = _interopRequireDefault(_Ascii);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
  function Animation(sqSize, imgsRef, sqsRef) {
    _classCallCheck(this, Animation);

    this.sqSize = sqSize;
    this.imgsRef = imgsRef;
    this.sqsRef = sqsRef;
  }

  _createClass(Animation, [{
    key: 'pieces',
    value: function pieces() {
      var lan = _Ascii2.default.longAlgebraicNotation(_store2.default.getState().board.history[_store2.default.getState().board.history.length - 2], _store2.default.getState().board.history[_store2.default.getState().board.history.length - 1]);

      var sqDiff = _Ascii2.default.sqDiff(lan[0], lan[1]);

      var xAxis = _Ascii2.default.xAxisSign(lan[0], lan[1], _store2.default.getState().board.turn, _store2.default.getState().board.flip) * this.sqSize * sqDiff.files;

      var yAxis = _Ascii2.default.yAxisSign(lan[0], lan[1], _store2.default.getState().board.turn, _store2.default.getState().board.flip) * this.sqSize * sqDiff.ranks;

      var sqFrom = this.sqsRef.current[lan[0]];
      var sqTo = this.sqsRef.current[lan[1]];
      var img = this.imgsRef.current[lan[1]];

      sqFrom.appendChild(img);

      img.animate({
        transform: 'translate(' + xAxis + 'vw, ' + yAxis + 'vw)'
      }, {
        duration: 250
      });

      Promise.all(img.getAnimations().map(function (animation) {
        return animation.finished;
      })).then(function () {
        sqTo.appendChild(img);
      });
    }
  }]);

  return Animation;
}();

exports.default = Animation;