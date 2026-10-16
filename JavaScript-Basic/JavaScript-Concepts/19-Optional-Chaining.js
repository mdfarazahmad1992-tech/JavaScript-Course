
// JavaScript Basic - Optional Chaining

// 1. Normal property
let student = {
    name: "Faraz",
    age: 25
};

console.log("Name:", student.name);

// 2. Missing property
console.log("City:", student.address?.city);

// 3. Nested object
let employee = {
    name: "Ali",
    office: {
        city: "Bangalore"
    }
};

console.log("Office:", employee.office?.city);
console.log("Home:", employee.home?.city);

// 4. Optional function call
let user = {};

user.sayHello?.();

console.log("Program completed");