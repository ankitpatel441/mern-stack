// let arr = [1, 2, 3, 4];

// arr.seyHello = () => {
//     console.log("hello!, i'm arr")
// }

// //arr.__proto__
// let arr1 = [1, 2, 3, 4];
// console.log(arr1.__proto__);

// //Array.prototype
// let arr2 = [10, 20, 30];

// console.log(arr2);
// console.log(Array.prototype);

// //String.prototype
// let str = "Hello";

// console.log(String.prototype);

// console.log(Object.getPrototypeOf(arr) === Array.prototype);

//Factory Function
// function student(name, age) {
//     return {
//         name: name,
//         age: age,

//         greet() {
//             console.log(`Hello, I'm ${this.name}`);
//         }
//     };
// }

// let s1 = student("Akki", 22);
// let s2 = student("Rahul", 20);

// console.log(s1);
// console.log(s2);

// s1.greet();
// s2.greet();


// newOperator (Constructor)
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function () {
//         console.log(`Hello, I'm ${this.name}`);
//     };
// }

// const p1 = new Person("Akki", 22);
// const p2 = new Person("Rahul", 20);

// console.log(p1);
// console.log(p2);

// p1.greet();
// p2.greet();

//classes 
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// }

// const s1 = new Student("Akki", 22);
// const s2 = new Student("Rahul", 20);

// console.log(s1);
// console.log(s2);

// s1.greet();
// s2.greet();

//Inheritance in JavaScript

//Example 1: Basic Inheritance
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();

//Example 2: Using constructor() and super()
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name); // Calls Person constructor
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}`);
    }
}

const s1 = new Student("Akki", "MERN Stack");

s1.greet();
s1.study();