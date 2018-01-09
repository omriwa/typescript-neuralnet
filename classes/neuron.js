"use strict";
var dendrite_1 = require('./dendrite');
var functions_1 = require('./functions');
var Neuron = (function () {
    function Neuron(input, activisionFunction) {
        if (input === void 0) { input = 0; }
        if (activisionFunction === void 0) { activisionFunction = null; }
        this.input = input;
        this.treshHold = functions_1["default"].getRandomVal();
        this.activisionFunction = activisionFunction;
        this.dendrites = [];
    }
    Neuron.prototype.connectNeuron = function (n) {
        this.dendrites.push(new dendrite_1["default"](this, n));
    };
    Neuron.prototype.printNeuronConnections = function () {
        this.dendrites.forEach(function (dendrite) {
            console.log(dendrite.printDendriteConnetion());
        });
    };
    Neuron.prototype.addInput = function (x) {
        this.input += x;
    };
    Neuron.prototype.sendInputToNextNeuron = function () {
        this.dendrites.forEach(function (dendrite) {
            dendrite.addInputToNextNeuron();
        });
    };
    Neuron.prototype.setInput = function (x) {
        this.input = x;
    };
    Neuron.prototype.adjustWeights = function (w) {
        this.dendrites.forEach(function (dendrite) {
            dendrite.adjustWeights(w);
        });
    };
    Neuron.prototype.getSumOfDer = function () {
        var sum = 0;
        this.dendrites.forEach(function (dendrite) {
            sum += functions_1["default"].sigmoidDerivative(input) * dendrite.weight;
        });
        return sum;
    };
    return Neuron;
}());
exports["default"] = Neuron;
