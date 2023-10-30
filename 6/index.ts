// Optional and default parameters are features in TypeScript (and JavaScript) that provide flexibility in how you call functions by allowing you to omit certain parameters or provide default values when invoking a function.

//? Optional Parameters:

// In TypeScript, you can make function parameters optional by appending a ? to their names in the parameter list. This means that you can call the function without providing a value for that parameter. Here's an example:


function greet(name: string, age?: number) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
// In this example, the age parameter is optional because of the ? modifier. You can call the greet function with or without providing the age argument:


greet("Alice");       // "Hello, Alice!"
greet("Bob", 30);     // "Hello, Bob! You are 30 years old."


//? Default Parameters:

// Default parameters allow you to specify default values for function parameters. If a value is not provided when calling the function, the default value is used. This is achieved by assigning a value to the parameter in the function declaration. Here's an example:

function greet1(name: string, age: number = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
// In this case, the age parameter has a default value of 25. If you don't provide an age argument, the default value is used:


greet1("Alice");       // "Hello, Alice! You are 25 years old."
greet1("Bob", 30);     // "Hello, Bob! You are 30 years old."
// You can use optional and default parameters in the same function, and the optional parameters should come after the required ones in the parameter list:


function greet2(name: string, age: number = 25, message?: string) {
    if (message) {
        console.log(`${message} ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
}
// When using optional and default parameters, it's essential to consider the order in which they appear in the parameter list and ensure that they don't cause ambiguity in function calls.