// PARAMETERISED CONSTRUCTOR

class Person{

    constructor(name, age){
        this.name = name
        this.age = age
    }

    info(){
        console.log(`Name :${this.name} Age :${this.age}`);
    }

}

const person = new Person("Rushabh", 22)
person.info()