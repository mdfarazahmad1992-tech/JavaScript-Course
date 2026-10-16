
// JavaScript Basic - Arrow Functions

// 1. Simple Arrow Function
const sayHello = () => {
    console.log("Hello Faraz!");
};

sayHello();

// 2. Arrow Function with One Parameter
const greetUser = (name) => {
    console.log("Welcome " + name);
};

greetUser("Faraz");
greetUser("Rahul");

// 3. Arrow Function with Two Parameters
const addNumbers = (a, b) => {
    return a + b;
};

console.log("Addition:", addNumbers(10, 5));

// 4. Short Arrow Function
const squareNumber = (number) => number * number;

console.log("Square:", squareNumber(6));

// 5. Another Example
const doubleNumber = (number) => number * 2;

console.log("Double:", doubleNumber(8));