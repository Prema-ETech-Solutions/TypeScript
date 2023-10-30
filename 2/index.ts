// Variable Declaration with Type Annotation:

// You can explicitly specify the type of a variable using a colon followed by the type name.

let age_: number = 30;
let name_: string = "John";
// Function Parameters and Return Types:

// When defining functions, you can annotate the parameter types and the return type:
function add(a: number, b: number): number {
    return a + b;
}

// Type Inference:

// TypeScript often infers types automatically, reducing the need for explicit annotations when the type can be determined from the context:

let age = 30; // TypeScript infers the type as number


// Object Type Annotations:

// You can annotate object types, specifying the types of each property:

let person: { name: string; age: number } = {
    name: "Alice",
    age: 25,
};


// Array Type Annotations:

// Type annotations can also be used for arrays:

let numbers: number[] = [1, 2, 3];


// Custom Type Annotations (Interfaces and Classes):

// You can define custom types using interfaces and classes:

interface Person {
    name: string;
    age: number;
}

class Student implements Person {
    constructor(public name: string, public age: number) {}
}
// Type annotations in TypeScript help catch type-related errors early in the development process, making your code more predictable and maintainable.

