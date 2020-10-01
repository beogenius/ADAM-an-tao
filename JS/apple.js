class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    decrease(){
        this.weight -= 1;
    }
    isEmpty(){
        return this.weight === 0;
    }

}