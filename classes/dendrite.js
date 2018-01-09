"use strict";
var functions_1 = require('./functions');
var Dentrite = (function () {
    function Dentrite(prevNeuron, nextNeuron) {
        this.prevNeuron = prevNeuron;
        this.nextNeuron = nextNeuron;
        this.weight = functions_1["default"].getRandomVal();
    }
    Dentrite.prototype.addInputToNextNeuron = function () {
        this.nextNeuron.addInput(this.prevNeuron.input * this.weight);
    };
    Dentrite.prototype.adjustWeight = function (x) {
        this.weight = x;
    };
    return Dentrite;
}());
exports["default"] = Dentrite;
