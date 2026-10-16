
// JavaScript Basic - Array Methods

// 1. forEach(): Har item print karo
console.log("FOR EACH:");

let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach((fruit) => {
    console.log(fruit);
});

// 2. map(): Numbers ko double karo
console.log("MAP:");

let numbers = [1, 2, 3, 4];

let doubled = numbers.map((number) => number * 2);

console.log(doubled);

// 3. filter(): Sirf bade numbers chuno
console.log("FILTER:");

let marks = [35, 80, 45, 90, 25, 70];

let passedMarks = marks.filter((mark) => mark >= 40);

console.log(passedMarks);