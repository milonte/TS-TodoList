var List = /** @class */ (function () {
    function List(list) {
        this.name = list.name;
        if (list.elements)
            this.elements = list.elements;
        else
            this.elements = [];
    }
    List.prototype.addElement = function (elem) {
        this.elements.push(elem);
        console.log(elem + " added to the list !");
    };
    List.prototype.delElement = function (elem) {
        var id = this.elements.indexOf(elem);
        this.elements.splice(id, 1);
        console.log(elem + " removed from the list !");
    };
    return List;
}());
