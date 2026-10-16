
// JavaScript Basic - Functions

// 1. Simple Function
function sayHello() {
    console.log("Hello Faraz!");
}

sayHello();

// 2. Function with Parameter
function greetUser(name) {
    console.log("Welcome " + name);
}

greetUser("Faraz");
greetUser("Rahul");

// 3. Function with Two Parameters
function multiplyNumbers(a, b) {
    console.log("Multiplication:", a * b);
}

multiplyNumbers(5, 4);
multiplyNumbers(10, 3);

// 4. Function with Return
function squareNumber(number) {
    return number * number;
}

let answer = squareNumber(5);
console.log("Square:", answer);