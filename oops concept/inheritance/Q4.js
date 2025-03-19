// EXAMPLE 2

class Person {

    constructor(name){
        this.name = name
    }

    info(){
        console.log(`${this.name} coding`);
    }

}

class Employee extends Person{

    info(){
        console.log(`${this.name} Create his portfolio`);
    }

}

const dog = new Employee("Rushabh")

dog.info()