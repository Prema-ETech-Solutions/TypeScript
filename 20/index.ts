// In TypeScript, you can define static properties and methods within a class. Static members belong to the class itself rather than instances of the class. This means they can be accessed without creating an instance of the class and are shared across all instances of the class. Here's how to define and use static properties and methods:

//? Static Properties:

// To define a static property in a class, use the static keyword followed by the property name. Static properties are shared among all instances of the class:

class MathUtility {
    static pi: number = 3.14159;
}

console.log(MathUtility.pi); // Accessing the static property

// In this example, the pi property is a static property of the MathUtility class, and you can access it without creating an instance of the class.

//? Static Methods:

// To define a static method in a class, use the static keyword followed by the method definition. Static methods can be called on the class itself:

class Calculator {
    static add(x: number, y: number): number {
        return x + y;
    }
}

const result = Calculator.add(5, 3); // Calling the static method
console.log(result); // Output: 8

// In this example, the add method is a static method of the Calculator class, and you can call it without creating an instance of the class.

//? Static Members and Inheritance:

// Static properties and methods are inherited by derived classes (subclasses). When you access a static member of a subclass, it refers to the same member defined in the base class:

class Parent {
    static message: string = "Hello from Parent";
}

class Child extends Parent { }

console.log(Child.message); // Accessing the inherited static property

// In this example, the Child class inherits the message static property from the Parent class.

//? Use Cases for Static Members:

// Static properties and methods are useful for several purposes, including:

// Constants and Configuration: You can use static properties to store constants, configuration values, or shared settings that are relevant to the class.

// Utility Functions: Static methods are often used for utility functions that are related to the class but do not require instance-specific data.

// Factory Methods: Static methods can be used to create instances of the class or provide alternative constructors.

// Singleton Pattern: Static properties and methods are used in the Singleton design pattern to ensure that a class has only one instance.

// Static properties and methods are handy for creating class-level functionality and managing shared data. They are particularly useful when you want to encapsulate functionality that doesn't require instance-specific state.




