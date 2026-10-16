
// JavaScript Basic - Arrays

// 1. Create an Array
let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log("All Fruits:", fruits);

// 2. Access Array Items
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);

// 3. Array Length
console.log("Total Fruits:", fruits.length);

// 4. Add an Item
fruits.push("Grapes");
console.log("After Push:", fruits);

// 5. Remove the Last Item
fruits.pop();
console.log("After Pop:", fruits);

// 6. Print All Fruits Using Loop
console.log("Fruit List:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}