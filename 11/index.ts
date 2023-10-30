// Enums (short for "enumerations") in TypeScript are a way to define a set of named values or constants. They provide a more human-readable way to work with values that have a fixed set of possibilities. Enums are useful for improving code readability and type safety. Here's how to use enums in TypeScript:

//? Enum Declaration:

//? You declare an enum using the enum keyword followed by a set of named values enclosed in curly braces {}. Each value in the enum is assigned an implicit numeric value, starting from 0 and incrementing by 1 for each subsequent value. You can also explicitly assign numeric values if needed.

enum Color {
    Red, // 0
    Green, // 1
    Blue, // 2
}


//? Using Enums:

//? You can use the enum values as constants in your code. For example:

let favoriteColor: Color = Color.Blue;
console.log(favoriteColor); // Output: 2

// The variable favoriteColor is assigned the value Color.Blue, which is equivalent to 2. You can use the enum values to make your code more readable.

//? Accessing Enum Values:

//? You can access the enum values by their name or by their numeric value:

let currentColor: Color = Color.Green;
console.log(currentColor); // Output: 1

let colorName: string = Color[2]; // Access by value
console.log(colorName); // Output: "Blue"

//? Custom Numeric Values:

//? You can assign custom numeric values to enum members if needed:


enum Size {
    Small = 1,
    Medium = 2,
    Large = 3,
}

let selectedSize: Size = Size.Medium;

// In this example, the Size enum members have custom numeric values assigned.

//? Enum vs. Object:

// Enums in TypeScript are similar to objects in that they have both named keys and associated values, but enums are limited to numeric and string values. Enums also provide better type checking.

//? String Enums:

// In addition to numeric enums, TypeScript supports string enums, where enum members have string values:

enum Direction {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST",
}

// String enums are useful when you want to use more descriptive values or when working with external data sources that use string values.

// Enums are helpful when you need to work with a predefined set of values or options, and you want to ensure that only valid values are used in your code. They make your code more readable and self-documenting, especially when dealing with values that have specific meaning in your application.




