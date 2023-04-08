'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wording = function Wording() {
  _classCallCheck(this, Wording);
};

Wording.verb = {
  ACCEPT: 'ACCEPT',
  DECLINE: 'DECLINE',
  PROPOSE: 'PROPOSE'
  // ...
};
Wording.verbs = [Wording.verb.ACCEPT, Wording.verb.DECLINE, Wording.verb.PROPOSE];
exports.default = Wording;