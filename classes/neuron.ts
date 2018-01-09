import Dendrite from './dendrite';
import Funcs from './functions';

class Neuron {
    
    input: Number;
    treshHold: Number;
    activisionFunction: Object;
    dendrites: Dendrite[];
    bias: Number;
    
    constructor(input:Number = 0,activisionFunction:Object = null) {
        this.input = input;
        this.treshHold = Funcs.getRandomVal();
        this.activisionFunction = activisionFunction;
        this.dendrites = [];
    }
    
    connectNeuron(n) {
        this.dendrites.push(new Dendrite(this,n));
    }
    
    printNeuronConnections() {
        this.dendrites.forEach(function(dendrite) {
            console.log(dendrite.printDendriteConnetion());
        });
    }
    
    addInput(x) {
        this.input += x;
    }
    
    sendInputToNextNeuron() {
        this.dendrites.forEach(function(dendrite) {
            dendrite.addInputToNextNeuron();
        });
    }
    
    setInput(x) {
        this.input = x;
    }
    
    adjustWeights(w) {
        this.dendrites.forEach(function(dendrite) {
            dendrite.adjustWeights(w);
        });
    }
    
    getSumOfDer() {
        let sum = 0;
        this.dendrites.forEach(function(dendrite) {
            sum += Funcs.sigmoidDerivative(input) * dendrite.weight;
        });
        return sum;
    }
    
    
}

export default Neuron;
