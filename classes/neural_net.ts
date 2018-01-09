import NeuronLayer from './neuron_layer';
import Funcs from './functions';
import DataSet from './data_set';
import Item from './item';

class NeuralNet {
    
    static Type = {
        xor: 'XOR_NET'
        
    };
    
    protected neuronLayers: NeuronLayer[];
    protected netType: String;
    protected netFunction: Object;
    protected netAlgorithm: Function;
    protected dataSet = DataSet;
    
    constructor(netType: String, dataSet: DataSet) {
        this.netType = netType;
        this.neuronLayers = [];
        this.dataSet = dataSet;
        console.log(dataSet);
        
        //setup the net
        this.initNetByType();
        this.connectNeuronLayers();
    }
    
    //neural net constructor
    initNetByType() {
        switch(this.netType) {
            //xor net
            case 'XOR_NET':
                this.initXorNet();
            break;
        }
    }
    
    initXorNet() {
        //setup the input layer with 2 neuron
        this.neuronLayers.push(new NeuronLayer(2));
        //setup the hidden layer with 4 neuron
        this.neuronLayers.push(new NeuronLayer(4));
        //setup the output layer with 1 neuron
        this.neuronLayers.push(new NeuronLayer(1));
        //setup the activision funcs
        this.netFunction = {activisionFunc: Funcs.sigmoidFunc , activisionFuncDerivative: Funcs.sigmoidDerivative};
    }
    
    //connect the neuron of the layers
    connectNeuronLayers() {
        for(let i=0; i< this.neuronLayers.length - 1; i++) {
            let curLayerNeuron = this.neuronLayers[i].getLayerNeurons(),
                nextLayerNeuron = this.neuronLayers[i + 1].getLayerNeurons();
            
            curLayerNeuron.forEach(function(curNeuron) {//connect each neuron from cur layer to the neurons from next layer
                nextLayerNeuron.forEach(function(nextNeuron) {
                    curNeuron.connectNeuron(nextNeuron);
                });
            });
        }
    }
    
    //print the net
    printNet() {
        if(0 < this.neuronLayers.length)
            this.neuronLayers.forEach(function(layer) {
                console.log('layer');
                layer.getLayerNeurons().forEach(function(neuron) {//print the neuron layers
                    // neuron.printNeuronConnections();
                    console.log(neuron.input);
                });
            });
        else
            console.log('empty net');
    }
    
    //feed forward algorithm
    feedForward() {
        this.neuronLayers.forEach(function(layer) {
            layer.getLayerNeurons().forEach(function(neuron) {
                neuron.sendInputToNextNeuron();
            });
        });
        return this;
    }
    
    backPropagation(curLayer,desiredOutput,error) {
        
    }
    
    printOutput() {
        console.log(this.neuronLayers[2].getLayerNeurons()[0].input);
    }
    
    //train the net from the dataset 
    trainNet() {
        let inputNeurons = this.neuronLayers[0].getLayerNeurons(),
            trainingSet = this.dataSet.getItems;
            
        console.log(trainingSet.getInput);
        //set the input from dataset
        for(let i=0; i < inputNeurons.length; i++)
            inputNeurons[i].setInput(trainingSet[0].getInput[i]);
        //feed forward
        this.feedForward();
        //backpropagation
    }
}

//########################TESTING########################
let input = [0,1],
    output = 1,
    item = new Item(input,output),
    dataSet = new DataSet([item]);
let xorNet = new NeuralNet(NeuralNet.Type.xor,dataSet);
xorNet.trainNet();
xorNet.printNet();
// xorNet.feedForward();
// console.log(xorNet.backPropagation());