"use strict";
var Item = (function () {
    function Item(input, output) {
        this.input = input;
        this.output = output;
    }
    Object.defineProperty(Item.prototype, "getInput", {
        get: function () {
            return this.input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "getOutput", {
        get: function () {
            return this.output;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
exports["default"] = Item;
