// COPY CONSTRUCTOR

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  copy() {
    return new Person (this.name, this.age);
  }

  info(){
    console.log(`Name: ${this.name} Age: ${this.age}`);
    
  }

}

const person1 = new Person("Rushabh" ,21)

console.log("before copy");
person1.info()

console.log("\nafter copy");
const person2 = person1.copy()
console.log(person2.name);
console.log(person2.age);
