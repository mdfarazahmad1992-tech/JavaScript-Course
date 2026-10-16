
// JavaScript Basic - Destructuring

// 1. Array Destructuring
let fruits = ["Apple", "Mango", "Banana"];

let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);
console.log("Third Fruit:", thirdFruit);

// 2. Object Destructuring
let student = {
    name: "Faraz",
    age: 25,
    city: "Patna"
};

let { name, age, city } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// 3. Rename a Variable
let { name: studentName } = student;

console.log("Student Name:", studentName);

// 4. Default Value
let { country = "India" } = student;

console.log("Country:", country);