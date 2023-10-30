// In TypeScript, unions and intersections are two powerful type operations that allow you to create more complex and flexible types by combining multiple types. They are used to represent a wider range of possibilities when defining types.

//? Union Types (|):

// A union type allows a variable or parameter to have multiple possible types. You define a union type by using the | (pipe) symbol between the types you want to combine.

let variable: string | number;

variable = "Hello"; // valid
variable = 42;       // valid
// variable = true;     // Error: Type 'boolean' is not assignable to type 'string | number'.

// In this example, variable can be either a string or a number, but not other types. Union types are handy for handling different types of values in a single variable.

//? Intersection Types (&):

// An intersection type combines multiple types into one, creating a type that includes all the properties and methods of each type. You define an intersection type by using the & (ampersand) symbol.

type User = {
    name: string;
    age: number;
};

type Employee = {
    jobTitle: string;
    department: string;
};

type EmployeeUser = User & Employee;

const employeeUser: EmployeeUser = {
    name: "Alice",
    age: 30,
    jobTitle: "Developer",
    department: "Engineering",
};


// In this example, EmployeeUser is an intersection type that includes all the properties of both User and Employee. It allows you to create objects that have properties from both types.

//? Using Unions and Intersections Together:

// You can combine unions and intersections to create more complex type definitions. For example, you might use unions within an intersection to specify optional properties:

type Contact = {
    email: string;
    phone: string | undefined;
};

type Address = {
    street: string;
    city: string;
    state: string;
};

type ContactWithAddress = Contact & Address;

const contact1: ContactWithAddress = {
    email: "alice@example.com",
    phone: "123-456-7890",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
};

// const contact2: ContactWithAddress = {
//     email: "bob@example.com",
//     street: "456 Elm St",
//     city: "Othertown",
//     state: "NY",
// };


// In this example, phone in the Contact type is a union of string and undefined, making it optional. The ContactWithAddress type is an intersection of Contact and Address, allowing objects to have properties from both types.

// Unions and intersections are powerful tools for creating flexible and precise type definitions in TypeScript. They allow you to represent a wide variety of data structures and ensure that your code is type-safe and correctly handles various data scenarios.