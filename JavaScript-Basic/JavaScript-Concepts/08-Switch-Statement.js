
// JavaScript Basic - Switch Statement

// 1. Check Day of the Week
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}

// 2. Simple Calculator Choice
let operator = "+";
let a = 10;
let b = 5;

switch (operator) {
    case "+":
        console.log("Addition:", a + b);
        break;

    case "-":
        console.log("Subtraction:", a - b);
        break;

    case "*":
        console.log("Multiplication:", a * b);
        break;

    case "/":
        console.log("Division:", a / b);
        break;

    default:
        console.log("Invalid operator");
}


// Example 2: Aap restaurant mein gaye aur menu mein se ek number choose kiya:

let choice = 2;

switch (choice) {
    case 1:
        console.log("Pizza");
        break;

    case 2:
        console.log("Burger");
        break;

    case 3:
        console.log("Ice Cream");
        break;

    default:
        console.log("Invalid choice");
}