// EXAMPLE 2
// METHOD OVERRIDING 

class Person {

    constructor(name){
        this.name = name
    }

    info(){
        console.log(`${this.name} coding`);
    }

}

class User extends Person{

    info(){
        console.log(`${this.name} Create his portfolio`);
    }

}

const user = new User("Rushabh")

user.info()