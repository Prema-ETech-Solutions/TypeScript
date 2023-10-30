// In TypeScript, you can use getters and setters to control access to the properties of a class. Getters allow you to retrieve the value of a property, and setters allow you to modify the value of a property while providing an extra layer of control and validation. Here's how to use getters and setters in TypeScript:

//? Getter:

// A getter is a special method that is used to access the value of a property. It is defined using the get keyword followed by a method name. Getters do not take any arguments and return a value. Here's an example:

class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }
}

const circle = new Circle(5);
console.log(circle.radius); // Accessing the getter
// In this example, the Circle class has a private property _radius.The radius getter allows you to access the value of the _radius property without directly accessing the private property.

//? Setter:

// A setter is a special method that is used to modify the value of a property.It is defined using the set keyword followed by a method name.Setters take a single argument and do not return a value.Here's an example:

class Temperature {
    private _celsius: number;

    constructor(celsius: number) {
        this._celsius = celsius;
    }

    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero is not possible.");
        }
        this._celsius = value;
    }
}

const temperature = new Temperature(20);
console.log(temperature.celsius); // Accessing the getter

temperature.celsius = 25; // Modifying the value using the setter
console.log(temperature.celsius); // Accessing the updated value

// In this example, the Temperature class has a private property _celsius.The celsius setter allows you to modify the value of the _celsius property while providing a validation check to ensure that the temperature is not set below absolute zero.

// Using Getters and Setters:

// Getters and setters provide a level of encapsulation and validation for your class properties.They allow you to control how properties are accessed and modified, making it easier to maintain and manage your class state.

// It's important to note that the names of the getter and setter methods do not need to match the name of the property they are associated with. However, it's a common convention to use the same property name for the getter and setter for clarity.

// Using getters and setters, you can maintain better control over your class's state and provide a consistent interface for working with its properties.