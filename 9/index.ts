// examples of using the map and filter array methods in TypeScript to create new arrays with transformed values:

// Using map to Transform Values:

// The map method applies a provided function to each element of the array and returns a new array with the results. It's great for transforming the elements of an array into something different.

let numbers: number[] = [1, 2, 3, 4, 5];

// Double each number in the array
let doubledNumbers: number[] = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Convert numbers to their string representations
let numberStrings: string[] = numbers.map((num) => num.toString());
console.log(numberStrings); // ["1", "2", "3", "4", "5"]


// Using filter to Create Subsets:

// The filter method creates a new array with all elements that satisfy a given condition specified by a callback function.

let numbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create an array of even numbers
let evenNumbers: number[] = numbers1.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Create an array of numbers greater than 5
let greaterThanFive: number[] = numbers.filter((num) => num > 5);
console.log(greaterThanFive); // [6, 7, 8, 9, 10]

// Create an array of numbers less than or equal to 3
let lessThanOrEqualToThree: number[] = numbers.filter((num) => num <= 3);
console.log(lessThanOrEqualToThree); // [1, 2, 3]

// In both of these examples, map and filter return new arrays with transformed or filtered values while leaving the original array intact. These methods are incredibly useful for processing and manipulating data in your programs.