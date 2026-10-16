
// JavaScript Basic - Nullish Coalescing Operator

// 1. Undefined value
let userName;
console.log("Name:", userName ?? "Guest");

// 2. Null value
let city = null;
console.log("City:", city ?? "Unknown");

// 3. Original value available
let country = "India";
console.log("Country:", country ?? "Not Available");

// 4. Zero is a valid value
let price = 0;
console.log("Price:", price ?? 100);

// 5. False is a valid value
let isLoggedIn = false;
console.log("Logged In:", isLoggedIn ?? true);

// 6. Compare ?? and ||
console.log("Using ??", 0 ?? 50);
console.log("Using ||", 0 || 50);