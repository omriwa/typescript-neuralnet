"use strict";
var item_1 = require('./item');
var DataSet = (function () {
    function DataSet(items) {
        this.items = item_1["default"];
        this.items = items;
    }
    Object.defineProperty(DataSet.prototype, "getItems", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    return DataSet;
}());
exports["default"] = DataSet;
