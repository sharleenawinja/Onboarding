//Write a sample program that demonstrates the use of classes, objects, 
//and inheritance in the chosen programming language.


// Base class (parent)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Child class (inherits from Person)
class Student extends Person {
    constructor(name, age, major) {
        // Call the parent class's constructor
        super(name, age);
        this.major = major;
    }
    
    study() {
        console.log(`I am studying ${this.major}.`);
    }
}

// Create a new object of the Student class
let john = new Student("John", 20, "Computer Science");


john.greet();


john.study();
