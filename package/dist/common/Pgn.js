'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pgn = function Pgn() {
    _classCallCheck(this, Pgn);
};

Pgn.symbol = {
    WHITE: 'w',
    BLACK: 'b',
    CASTLING_SHORT: 'O-O',
    CASTLING_LONG: 'O-O-O'
};
exports.default = Pgn;