// In TypeScript, an array is a data structure that allows you to store and manipulate a collection of values of the same or different types. TypeScript provides strong typing for arrays, making it easier to work with arrays in a type-safe manner. Here's how you can work with arrays in TypeScript:

//? Array Declaration:

// You can declare an array in TypeScript by specifying the type of its elements enclosed in square brackets []. For example, to declare an array of numbers:

let numbers: number[] = [1, 2, 3, 4, 5];

// TypeScript infers the type based on the elements you provide, but you can also explicitly specify the type, as shown above.

//? Array Initialization:

// You can initialize an array in several ways:

// Using an array literal: As shown in the previous example, you can create an array and initialize it with values using square brackets.

// Using the Array constructor: You can create an array using the Array constructor:


let fruits: string[] = new Array("apple", "banana", "cherry");

// Accessing Array Elements:

// You can access elements of an array using square brackets and the index:

let firstNumber: number = numbers[0]; // Access the first element (index 0)

//? Array Methods:

// TypeScript provides a range of array methods for manipulating arrays, such as push, pop, shift, unshift, slice, splice, map, filter, and more. These methods provide powerful ways to manipulate and work with arrays.



numbers.push(6); // Adds an element to the end of the array

let lastNumber:number|undefined = numbers.pop(); // Removes and returns the last element

//? Iterating Over Arrays:

// You can loop through the elements of an array using for loops, forEach, or other iteration methods:



for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


numbers.forEach((number) => {
    console.log(number);
});


//? Array Types:

// You can create arrays of custom types, including arrays of objects, tuples, or even arrays with mixed types. For example:



interface Person {
    name: string;
    age: number;
}

let people: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
];

//? Tuple Types:

// TypeScript allows you to define fixed-length arrays called tuples, which have elements of different types. Tuples are useful when you need to work with arrays of a known length and specific types.

// typescript

let person: [string, number] = ["Alice", 30];

//? Array Spread and Rest:

// TypeScript supports the spread and rest operator for arrays. The spread operator allows you to create a new array by merging two or more arrays, while the rest operator allows you to collect a variable number of arguments into an array.


let fruits1: string[] = ["apple", "banana"];
let fruits2: string[] = ["cherry", "date"];

let allFruits: string[] = [...fruits1, ...fruits2]; // Array spread

function mergeNumbers(...numbers: number[]) {
    return numbers.reduce((sum, num) => sum + num, 0);
}


// Working with arrays is a fundamental part of programming, and TypeScript provides strong typing and useful methods to help you manipulate and manage arrays efficiently and safely.