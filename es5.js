// ------- QUE-1 --------

var x = 10;
var y = 25;

console.log('que1');
console.log(x+y);

// ------ QUE-2 -------

function add(a,b){
    return a+b;
}

console.log('que-2');
console.log(add(5,6));

// ------ QUE-3 -------

var name = 'Rushabh';
console.log('que-3');
console.log('hello' + name + '!' );


// ------ QUE-4 ------
function person(name){
    this.name = name;
}

person.prototype.greet=function(){
console.log('hello,' + this.name);
};

var person = new person ("Rushabh");
console.log('que-4');
person.greet();
