// In TypeScript, objects are used to represent structured data by defining properties and their respective data types. Objects are a fundamental part of the language and are commonly used to organize and work with data. Here's how you can work with objects in TypeScript:

//? Object Literal:

//? You can create an object using object literals, which define key-value pairs within curly braces {}. Each key is a property user, and its corresponding value can be of any data type.

let person: { user: string, age: number } = {
    user: "Alice",
    age: 30,
};

// In this example, the person object has two properties: user (a string) and age (a number).

//? Type Annotations for Object Properties:

//? You can use type annotations to specify the data types for object properties, ensuring that you get type checking at compile-time:

interface Person {
    user: string;
    age: number;
}

let person1: Person = {
    user: "Alice",
    age: 30,
};
// Defining an interface like Person is a common way to ensure consistent object structures and type safety in your code.

//? Accessing Object Properties:

// You can access object properties using dot notation:


console.log(person.user); // "Alice"
console.log(person.age);  // 30


// Adding and Modifying Properties:

// You can add or modify object properties after creating the object:




// person.email = "alice@example.com"; // Add a new property
person.age = 31;                    // Modify an existing property

//? Object Methods:

// You can add functions as properties of an object, creating object methods:

let calculator = {
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b,
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6

//? Object Destructuring:

// Object destructuring is a convenient way to extract properties from an object and assign them to variables:




let { user, age } = person;

console.log(user); // "Alice"
console.log(age);  // 30

//? Object Spread:

// You can clone or merge objects using the object spread syntax:



let employee = { ...person, position: "Developer" };
console.log(employee); // { user: "Alice", age: 30, position: "Developer" }


// Objects are versatile data structures in TypeScript, and they are used to model a wide range of entities, from simple key-value pairs to complex data structures. When working with objects, using interfaces to define their shapes can help ensure type safety and consistency in your code.




