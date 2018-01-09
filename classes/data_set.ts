import Item from './item';

class DataSet {
    
    private items: []Item;
    
    constructor(items: Item[]) {
        this.items = items;
    }
    
    get getItems(): Item[] {
        return this.items;
    }
    
}

export default DataSet;