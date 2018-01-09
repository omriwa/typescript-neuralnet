class Item {
    
    private input: Array;
    private output: Array;
    
    constructor(input:Object, output:Object) {
        this.input = input;
        this.output = output;
    }
    
    get getInput(): Array {
        return this.input;
    }
    
    get getOutput(): Array {
        return this.output;
    }
}

export default Item;