class Animal {

    constructor(name){
        this.name = name
    }

    info(){
        console.log(`${this.name} is making noise`);
    }

}

class Dog extends Animal{

    info(){
        console.log(`${this.name} is barking`);
    }

}

const dog = new Dog("Jerry")

dog.info()