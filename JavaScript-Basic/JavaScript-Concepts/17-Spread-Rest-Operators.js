
// JavaScript Basic - Spread and Rest Operators

// Spread: ek Array ko khol kar values phaila do.
// Rest: kai values ko collect karke ek Array bana do.


// 1. Spread Operator with Arrays
let fruits = ["Apple", "Mango", "Banana"];

let moreFruits = [...fruits, "Orange"];

console.log("More Fruits:", moreFruits);

// 2. Combine Two Arrays
let numbers1 = [10, 20];
let numbers2 = [30, 40];

let allNumbers = [...numbers1, ...numbers2];

console.log("All Numbers:", allNumbers);

// 3. Spread Operator with Objects
let student = {
    name: "Faraz",
    age: 25
};

let updatedStudent = {
    ...student,
    city: "Patna"
};

console.log("Updated Student:", updatedStudent);

// 4. Rest Operator with Array Destructuring
let [first, ...remaining] = fruits;

console.log("First Fruit:", first);
console.log("Remaining Fruits:", remaining);

// 5. Rest Operator with Functions
function addNumbers(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

console.log("Total 1:", addNumbers(10, 20));
console.log("Total 2:", addNumbers(10, 20, 30));