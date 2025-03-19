// STATIC CONSTRUCTOR

class Info {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static Default() {
        return new Info("Rushabh", 22);
    }
}

let obj = Info.Default();
console.log(obj.name);
console.log(obj.age);