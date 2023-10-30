// In TypeScript, abstract classes provide a way to define a blueprint for other classes while ensuring that instances of the abstract class cannot be created.Abstract classes are meant to be extended by other classes, and they often include abstract methods that must be implemented by the derived classes.Here's how to define and use abstract classes in TypeScript:

//? Defining an Abstract Class:

//? To define an abstract class, use the abstract keyword in the class declaration. Abstract classes can have regular properties and methods, as well as abstract methods.Abstract methods are methods without an implementation in the abstract class. Here's an example of an abstract class:

abstract class Shape {
    abstract getArea(): number; // Abstract method

    abstract getPerimeter(): number; // Abstract method

    // Regular method
    getDescription(): string {
        return "This is a shape.";
    }
}
// In this example, the Shape class is declared as an abstract class. It includes two abstract methods, getArea and getPerimeter, which do not have implementations in the abstract class. It also has a regular method, getDescription.

//? Extending an Abstract Class:

//? To create a concrete class based on an abstract class, you must extend the abstract class and provide implementations for all the abstract methods.Here's an example of a class that extends the Shape abstract class:

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
// In this example, the Circle class extends the Shape abstract class and provides implementations for the getArea and getPerimeter abstract methods.It also includes its own properties and methods.

//? Using Abstract Classes:

//? You cannot create an instance of an abstract class.Instead, you create instances of classes that extend the abstract class. Here's how you can use the Circle class, which extends the Shape abstract class:


const circle = new Circle(5);

console.log(circle.getArea()); // Output: 78.53981633974483
console.log(circle.getPerimeter()); // Output: 31.41592653589793
console.log(circle.getDescription()); // Output: "This is a shape."
// In this code, you create an instance of the Circle class and use its methods.

// Abstract classes provide a way to define a common structure for a group of related classes, ensuring that derived classes implement specific methods.They are especially useful when you want to create a contract for classes that share common behavior.