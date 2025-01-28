// ------ QUE-1 ------

let x = 10;
const y = 45;

console.log("que-1");
console.log(x+y);

// ------- QUE-2 -------

const add = (a,b) => a+b;

console.log("que-2");
console.log(add(5,10));

// ------- QUE-3 -------

const name = 'Rushabh';

console.log('que-3');
console.log(`Hello ${name} Welcome to the world of programming`);

// ------- QUE-4 -------

class Person{

    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}

console.log("que-4");
const person = new Person ("Rushabh");
person.greet();