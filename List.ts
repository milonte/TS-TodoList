interface Liste {
    name :string;
    elements :string[];
}

class List implements Liste {

    name :string;
    elements :string[];

    constructor(list :Liste) {
        this.name = list.name;
        if(list.elements) this.elements = list.elements;
        else this.elements = [];
    }

    addElement(elem :string) {
        this.elements.push(elem);
        console.log(elem + " added to the list !");
    }

    delElement(elem :string) {
        let id = this.elements.indexOf(elem);
        this.elements.splice(id, 1);
        console.log(elem + " removed from the list !");
    }

}
