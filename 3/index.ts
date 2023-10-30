// Declaring a boolean variable:
// You can declare a boolean variable by using the boolean data type like this:
let isTrue: boolean = true;
let isFalse: boolean = false;

// Function with boolean type annotations:
// You can use type annotations to specify the expected types of function parameters and return values. For example:

function isEvenNumber(num: number): boolean {
    return num % 2 === 0;
}

const result: boolean = isEvenNumber(4);
// In the above code, the isEvenNumber function takes a number as a parameter and returns a boolean. Type annotations help catch type errors at compile-time.


// Type inference:
// In TypeScript, you often don't need to explicitly specify the types because TypeScript can infer them based on the context. For example:

let isEnabled = true; // TypeScript infers the type as boolean


// Using boolean in object types:
// You can use boolean types in object type definitions as well:

interface User {
    name: string;
    isAdmin: boolean;
}

const adminUser: User = {
    name: "John",
    isAdmin: true,
};

// In this example, the isAdmin property is of type boolean in the User interface.

// Remember that TypeScript is all about static typing, so it can help you catch type-related errors early in your development process, making your code more reliable and maintainable.



// Here's how you can use the bigint type in TypeScript:

// Declaring a bigint variable:
// You can declare a variable with the bigint type like this:

let bigIntNumber: bigint = 1234567890123456789012345678901234567890n;

// Notice the n suffix at the end of the number, which indicates that it's a bigint literal. Without the n suffix, TypeScript would treat it as a regular number.

// Operations with bigint:
// You can perform various operations on bigint values, just like you would with regular numbers. For example:


let a: bigint = 1234567890n;
let b: bigint = 9876543210n;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;


// Using bigint in object types:
// You can include bigint types in object interfaces or types:


interface Employee {
    id: bigint;
    salary: bigint;
    // ...
}


// Type inference:
// TypeScript can often infer the bigint type based on the context. For example:

let someBigInt = 1234567890123456789012345678901234567890n; // TypeScript infers the type as bigint


// Conversion between bigint and other types:
// You can convert between bigint and other numeric types using functions like Number(), parseInt(), or parseFloat(). For example:

let num: number = Number(bigIntNumber); // Converts bigint to number
let str: string = bigIntNumber.toString(); // Converts bigint to string

// Keep in mind that while bigint is more flexible in terms of the range of integers it can represent, it may have some performance implications, and you should use it judiciously, especially when dealing with very large numbers.

