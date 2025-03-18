class Animal {

  constructor() {
    console.log("making noise");
  }

}

class Dog extends Animal {

  constructor(){
      super()
        console.log("dog is barking");
        
    }

}


const dog = new Dog()
