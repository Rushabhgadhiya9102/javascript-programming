// CALL PARENT CLASS CONSTRUCTOR THROUGH CHILD CLASS

class Animal {

    constructor(){
        console.log("making noise");
        
    }
}

class Dog extends Animal {

}

const dog = new Dog()
