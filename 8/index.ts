//? push and pop:

let fruits: string[] = ["apple", "banana"];

fruits.push("cherry"); // Adds "cherry" to the end
console.log(fruits); // ["apple", "banana", "cherry"]
let removedFruit: string|any = fruits.pop(); // Removes and returns "cherry"

console.log(fruits); // ["apple", "banana"]
console.log(removedFruit); // "cherry"

//? shift and unshift:

let colors: string[] = ["red", "green", "blue"];

colors.shift(); // Removes "red" from the beginning
console.log(colors); // ["green", "blue"]

colors.unshift("yellow", "purple"); // Adds "yellow" and "purple" to the beginning
console.log(colors); // ["yellow", "purple", "green", "blue"]

//? concat and slice:

let numbers1: number[] = [1, 2];
let numbers2: number[] = [3, 4];

let combinedNumbers: number[] = numbers1.concat(numbers2); // Concatenates two arrays
console.log(combinedNumbers); // [1, 2, 3, 4]

let subset: number[] = combinedNumbers.slice(1, 3); // Creates a subset from index 1 to 2
console.log(subset); // [2, 3]


// forEach, map, and filter:

let scores: number[] = [80, 90, 70, 85];

scores.forEach((score) => {
  console.log(`Score: ${score}`);
});

let doubledScores: number[] = scores.map((score) => score * 2);
console.log(doubledScores); // [160, 180, 140, 170]

let passingScores: number[] = scores.filter((score) => score >= 80);
console.log(passingScores); // [80, 90, 85]


//? reduce and some:

let numbers: number[] = [1, 2, 3, 4, 5];

let sum: number = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

let hasEvenNumber: boolean = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // true


//? indexOf, lastIndexOf, and includes:


let fruits1: string[] = ["apple", "banana", "cherry", "banana"];

let index: number = fruits1.indexOf("banana"); // 1
let lastIndex: number = fruits1.lastIndexOf("banana"); // 3
let includesBanana: boolean = fruits1.includes("banana"); // true


//? sort and reverse:

let names: string[] = ["Alice", "Bob", "Eve", "David"];

names.sort(); // Sorts alphabetically
console.log(names); // ["Alice", "Bob", "David", "Eve"]

names.reverse(); // Reverses the order
console.log(names); // ["Eve", "David", "Bob", "Alice"]



// filter and slice (Creating Subsets):


let numbers_1: number[] = [1, 2, 3, 4, 5];

let evenNumbers: number[] = numbers_1.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

let subset1: number[] = numbers.slice(1, 4);
console.log(subset1); // [2, 3, 4]

// These are examples of various array methods in TypeScript. These methods are useful for a wide range of tasks when working with arrays.