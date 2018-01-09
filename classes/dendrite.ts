import Neuron from './neuron';
import Funcs from './functions';

class Dentrite {
    
    weight: Number;
    prevNeuron: Neuron;
    nextNeuron: Neuron;
    
    constructor(prevNeuron:Neuron, nextNeuron:Neuron) {
        this.prevNeuron = prevNeuron;
        this.nextNeuron = nextNeuron;
        this.weight =  Funcs.getRandomVal();
    }
    
    addInputToNextNeuron() {
        this.nextNeuron.addInput(this.prevNeuron.input * this.weight);
    }
    
    adjustWeight(x) {
        this.weight = x;
    }
}

export default Dentrite;