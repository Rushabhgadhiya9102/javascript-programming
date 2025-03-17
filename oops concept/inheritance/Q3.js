class Animal {

  constructor() {
    console.log("making noise");
  }

}

class Dog extends Animal {

    constructor(){
        console.log("dog is barking");
        
    }

}

const animal = new Animal()
const dog = new Dog()

