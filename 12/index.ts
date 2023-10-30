
// In TypeScript, a tuple is a data structure that allows you to create an ordered collection of elements with fixed types and a fixed length. Each element in a tuple can have a different data type. Tuples are useful when you want to work with a specific sequence of values where each value has a well-defined type. Here's how to use tuples in TypeScript:

//? Tuple Declaration:

// To define a tuple, you use square brackets [] with type annotations for each element's data type in the desired order:


let person: [string, number] = ["Alice", 30];

// In this example, person is a tuple with two elements: a string (user) and a number (age).

//? Accessing Tuple Elements:

// You can access tuple elements by their index, starting from 0 for the first element:


let user: string = person[0];
let age: number = person[1];


// Tuple elements can be accessed using the square bracket notation, just like arrays.

//? Updating Tuple Elements:

// Tuple elements can be modified by assigning new values with the same data types:

person[1] = 31;

// In this case, the age of the person tuple is updated to 31.

//? Destructuring Tuples:

// You can use destructuring to assign tuple elements to variables:

let [user1, age1] = person;

// After this destructuring assignment, user will be "Alice" and age will be 30.

//? Tuple Types:

// You can define your own custom types based on tuples. This is useful when you want to ensure that specific tuples are used consistently in your code:

type Person = [string, number];

let alice: Person = ["Alice", 30];
let bob: Person = ["Bob", 25];


// Now, the Person type can be used to declare variables that must conform to the tuple structure.

//? Optional Elements in Tuples:

// You can make individual elements in a tuple optional by using the ? modifier:

type OptionalPerson = [string, number?];

let person1: OptionalPerson = ["Alice"];
let person2: OptionalPerson = ["Bob", 25];

// In this example, the second element in the OptionalPerson type is optional, meaning you can create tuples with or without the age.

//? Rest Elements in Tuples:

// Tuples can include a rest element that allows you to collect a variable number of elements:

type Scores = [string, number, ...number[]];

let scores1: Scores = ["Alice", 95, 88, 92, 89];
let scores2: Scores = ["Bob", 78];


// The ...number[] in the Scores type collects an arbitrary number of additional scores in the tuple.

// Tuples are helpful when you want to work with structured data that has a specific, fixed format. They offer type safety and improve code readability by providing a clear contract for the types of data that can be expected in a particular order.




