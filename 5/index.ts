// In TypeScript, the concepts of function declaration, invocation, and return are very similar to JavaScript, with the added benefit of strong typing for function parameters and return values. Let's explore these concepts in TypeScript:

//? Function Declaration:

// In TypeScript, you declare a function using the function keyword followed by its name, a list of parameters with their types, and the function's return type (if applicable). Here's an example of a function declaration:

function add(a: number, b: number): number {
    return a + b;
}
//   In this example, the add function is declared with two parameters, a and b, both of type number, and it returns a value of type number.

//? Function Invocation (Calling a Function):

// Function invocation in TypeScript is similar to JavaScript. You call a function by using its name followed by parentheses, passing arguments that match the parameter types and order. For example:

let result: number = add(5, 3); // Invoking the add function with arguments 5 and 3
// The add function is called, and the result is assigned to the result variable with the correct type annotation.

//? Function Return:

// TypeScript enforces type annotations for function return values. When you declare a function with a return type, the function must return a value of that specified type. For instance:

function greet(name: string): string {
    return `Hello, ${name}!`;
}
//   In this example, the greet function takes a string parameter and returns a string value.

//   If a function does not return anything, you can specify the void return type, indicating that the function has no return value:

function logMessage(message: string): void {
    console.log(message);
}



//   Anonymous Functions and Function Expressions:

// TypeScript allows you to use anonymous functions and function expressions, just like in JavaScript. These functions can be assigned to variables or passed as arguments to other functions. For example:

const multiply = function (a: number, b: number): number {
    return a * b;
};

let product: number = multiply(4, 2);
// In this case, multiply is a variable that holds an anonymous function, and it's invoked just like any other function.

// In TypeScript, strong typing helps catch type errors at compile-time, making your code more reliable. It enforces type annotations for function parameters and return values, which can help prevent runtime errors related to incorrect types. Understanding function declaration, invocation, and return in TypeScript is crucial for writing type-safe and maintainable code.

