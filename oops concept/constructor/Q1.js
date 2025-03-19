// DEFAULT CONSTRUCTOR

class Animal{

    constructor(){

        this.name = "Jerry"
    }

    info(){
        console.log(`${this.name} is baking`);
        
    }

}

const dog = new Animal()
dog.info()