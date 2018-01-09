"use strict";
var neuron_layer_1 = require('./neuron_layer');
var functions_1 = require('./functions');
var data_set_1 = require('./data_set');
var item_1 = require('./item');
var NeuralNet = (function () {
    function NeuralNet(netType, dataSet) {
        this.dataSet = data_set_1["default"];
        this.netType = netType;
        this.neuronLayers = [];
        this.dataSet = dataSet;
        console.log(dataSet);
        //setup the net
        this.initNetByType();
        this.connectNeuronLayers();
    }
    //neural net constructor
    NeuralNet.prototype.initNetByType = function () {
        switch (this.netType) {
            //xor net
            case 'XOR_NET':
                this.initXorNet();
                break;
        }
    };
    NeuralNet.prototype.initXorNet = function () {
        //setup the input layer with 2 neuron
        this.neuronLayers.push(new neuron_layer_1["default"](2));
        //setup the hidden layer with 4 neuron
        this.neuronLayers.push(new neuron_layer_1["default"](4));
        //setup the output layer with 1 neuron
        this.neuronLayers.push(new neuron_layer_1["default"](1));
        //setup the activision funcs
        this.netFunction = { activisionFunc: functions_1["default"].sigmoidFunc, activisionFuncDerivative: functions_1["default"].sigmoidDerivative };
    };
    //connect the neuron of the layers
    NeuralNet.prototype.connectNeuronLayers = function () {
        var _loop_1 = function(i) {
            var curLayerNeuron = this_1.neuronLayers[i].getLayerNeurons(), nextLayerNeuron = this_1.neuronLayers[i + 1].getLayerNeurons();
            curLayerNeuron.forEach(function (curNeuron) {
                nextLayerNeuron.forEach(function (nextNeuron) {
                    curNeuron.connectNeuron(nextNeuron);
                });
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.neuronLayers.length - 1; i++) {
            _loop_1(i);
        }
    };
    //print the net
    NeuralNet.prototype.printNet = function () {
        if (0 < this.neuronLayers.length)
            this.neuronLayers.forEach(function (layer) {
                console.log('layer');
                layer.getLayerNeurons().forEach(function (neuron) {
                    // neuron.printNeuronConnections();
                    console.log(neuron.input);
                });
            });
        else
            console.log('empty net');
    };
    //feed forward algorithm
    NeuralNet.prototype.feedForward = function () {
        this.neuronLayers.forEach(function (layer) {
            layer.getLayerNeurons().forEach(function (neuron) {
                neuron.sendInputToNextNeuron();
            });
        });
        return this;
    };
    NeuralNet.prototype.backPropagation = function (curLayer, desiredOutput, error) {
        if (curLayer == 0 || error < 0.1)
            return this;
        else {
            var sum_1 = 0;
            this.neuronLayers[curLayer].getLayerNeurons().forEach(function (neuron) {
                sum_1 = error *
                ;
            });
        }
    };
    NeuralNet.prototype.printOutput = function () {
        console.log(this.neuronLayers[2].getLayerNeurons()[0].input);
    };
    //train the net from the dataset 
    NeuralNet.prototype.trainNet = function () {
        var inputNeurons = this.neuronLayers[0].getLayerNeurons(), trainingSet = this.dataSet.getItems;
        console.log(trainingSet.getInput);
        //set the input from dataset
        for (var i = 0; i < inputNeurons.length; i++)
            inputNeurons[i].setInput(trainingSet[0].getInput[i]);
        //feed forward
        this.feedForward();
        //backpropagation
    };
    NeuralNet.Type = {
        xor: 'XOR_NET'
    };
    return NeuralNet;
}());
//########################TESTING########################
var input = [0, 1], output = 1, item = new item_1["default"](input, output), dataSet = new data_set_1["default"]([item]);
var xorNet = new NeuralNet(NeuralNet.Type.xor, dataSet);
xorNet.trainNet();
xorNet.printNet();
// xorNet.feedForward();
// console.log(xorNet.backPropagation()); 
