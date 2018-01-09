"use strict";
var neuron_js_1 = require('./neuron.js');
var NeuronLayer = (function () {
    function NeuronLayer(numOfNeurons, bias, activisionFunction) {
        this.neurons = [];
        for (var i = 0; i < numOfNeurons; i++)
            this.neurons.push(new neuron_js_1["default"]());
    }
    NeuronLayer.prototype.addNeuron = function (n) {
        this.neurons.push(n);
    };
    NeuronLayer.prototype.getLayerNeurons = function () {
        return this.neurons;
    };
    return NeuronLayer;
}());
exports["default"] = NeuronLayer;
