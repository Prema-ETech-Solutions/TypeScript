// Inheritance is a fundamental concept in object-oriented programming that allows you to create new classes (subclasses or derived classes) based on existing classes (superclasses or base classes). It promotes code reuse and hierarchy in your code, enabling you to model relationships between different classes. TypeScript supports inheritance as part of its object-oriented features. Here's how inheritance works in TypeScript:

//? Base Class (Superclass):

// A base class (superclass) is the class from which other classes inherit. It serves as a blueprint for creating more specialized classes. You can define a base class in TypeScript using the class keyword. Here's a simple example:

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound");
    }
}
// In this example, Animal is a base class with a name property and a makeSound method.

//? Derived Class (Subclass):

//? A derived class (subclass) is a class that inherits properties and methods from a base class. You can create a derived class using the extends keyword, and it inherits the structure and behavior of the base class. Here's an example of a derived class:

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call the constructor of the base class
        this.breed = breed;
    }

    makeSound() {
        console.log("Woof! Woof!");
    }
}
// In this example, Dog is a derived class that extends the Animal base class. It inherits the name property and makeSound method from the base class, and it adds its own breed property and a specialized makeSound method.

//? Inheriting Constructors and super:

// When you create a constructor in a derived class, you should call the constructor of the base class using the super keyword. This ensures that the initialization code in the base class's constructor is executed as well. In the example above, super(name) is used to call the constructor of the Animal base class.

//? Accessing Superclass Methods:

// You can access methods and properties from the base class using the super keyword:

class Cat extends Animal {
    // ...

    makeSound() {
        super.makeSound(); // Call the makeSound method of the base class
        console.log("Woof! Woof!");
    }
}
// In this example, the super.makeSound() line calls the makeSound method of the base class before adding the specialized behavior.

//? Benefits of Inheritance:

// Code Reuse: Inheritance allows you to reuse the code and structure defined in the base class, reducing code duplication.
// Polymorphism: Derived classes can be used interchangeably with base classes, promoting polymorphism and flexibility in your code.
// Hierarchy: Inheritance allows you to model hierarchical relationships between classes, making your code more organized and intuitive.
// Inheritance is a powerful mechanism in TypeScript that helps you create more modular, maintainable, and extensible code. It's essential to understand the principles of inheritance when building object-oriented applications.