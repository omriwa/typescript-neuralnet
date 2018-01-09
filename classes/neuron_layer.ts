import Neuron from './neuron.js';

class NeuronLayer {
    neurons: Neuron[];
    
    constructor(numOfNeurons:Number, bias:Number,activisionFunction:Function) {
        this.neurons = [];
        for(let i=0; i < numOfNeurons; i++)
            this.neurons.push(new Neuron());
    }
    
    addNeuron(n) {
        this.neurons.push(n);
    }
    
    getLayerNeurons() {
        return this.neurons;
    }
}

export default NeuronLayer;