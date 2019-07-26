//This JS use only for assign Product variable

class Product{
    constructor(id ,name, price, desc, url){
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.desc = desc;
        this.isAdded = false;
    }
    toggle(){
        this.isAdded = !this.isAdded;
    }
}