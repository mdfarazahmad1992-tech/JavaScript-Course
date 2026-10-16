
// JavaScript Basic - Objects

// 1. Object kya hota hai?



// 1. Create an Object
let student = {
    name: "Faraz",
    age: 25,
    city: "Patna",
    course: "JavaScript"
};

// 2. Access Object Properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("City:", student.city);
console.log("Course:", student.course);

// 3. Update a Property
student.age = 26;
console.log("Updated Age:", student.age);

// 4. Add a New Property
student.skills = "Web Development";
console.log("Skills:", student.skills);

// 5. Create a Method
student.greet = function () {
    console.log("Hello! I am " + this.name);
};

student.greet();