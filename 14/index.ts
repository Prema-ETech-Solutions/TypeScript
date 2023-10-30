// In TypeScript, an interface is a way to define a contract for the structure and behavior of an object. It specifies the properties (names and types) and method signatures that objects must adhere to if they implement the interface. Interfaces are a fundamental concept in TypeScript for achieving strong typing and enforcing a consistent shape for objects. Here's how to use interfaces in TypeScript:

//? Defining an Interface:

// You can define an interface using the interface keyword. An interface can include properties and method signatures. Here's a basic example of a Person interface:

interface Person {
  name: string;
  age: number;
  greet(): void;
}
// In this example, we've defined an interface called Person that specifies that an object implementing this interface must have a name property (of type string), an age property (of type number), and a greet method (with no parameters and returning void).

//? Implementing an Interface:

// Once you've defined an interface, you can implement it in a class or object to ensure that the class or object adheres to the contract defined by the interface. Here's an example of implementing the Person interface in a class:

class PersonClass implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
  }
}
// In this example, PersonClass implements the Person interface by providing the required properties and the greet method.

//? Type Checking with Interfaces:

// Interfaces are used to enforce type checking at compile time. If you have an object that should adhere to an interface but doesn't, TypeScript will generate an error. This helps catch type-related errors early in the development process.

const alice: Person = new PersonClass("Alice", 30);
alice.greet(); // Output: "Hello, my name is Alice, and I'm 30 years old."

const bob: Person = { name: "Bob", age: 25, greet: () => console.log("Hello from Bob!") };
bob.greet(); // Output: "Hello from Bob!"

// Both alice and bob conform to the Person interface, and TypeScript ensures that they have the required properties and method.

//? Optional Properties:

// You can specify optional properties in an interface by using the ? modifier:

interface OptionalPerson {
  name: string;
  age?: number; // age is optional
  greet?(): void; // greet is optional
}

// In this case, an object implementing OptionalPerson can have an optional age property and an optional greet method.

//? Readonly Properties:

// You can specify readonly properties in an interface using the readonly modifier:

interface Config {
  readonly apiKey: string;
  readonly secret: string;
}


// This ensures that the properties cannot be modified after the object is created.

//? Extending Interfaces:

// You can extend interfaces by creating new interfaces that inherit the properties and methods of existing interfaces:

interface User {
  name: string;
  email: string;
}

interface AdminUser extends User {
  isAdmin: boolean;
}
// The AdminUser interface extends the User interface and adds the isAdmin property.

//? Function Signatures in Interfaces:

// Interfaces can define method signatures for functions:

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// This interface specifies that an object implementing Calculator must have the add and subtract methods, each taking two number parameters and returning a number.

// Interfaces are a powerful tool for defining and enforcing the structure and behavior of objects in TypeScript. They help improve code quality, readability, and maintainability by ensuring that objects adhere to a specified contract.