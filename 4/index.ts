//? Type Safety:

// any: Variables with the any type essentially opt out of type checking. You can assign an any variable to any other type without TypeScript raising type errors. It provides maximum flexibility but minimal type safety.

// unknown: Variables with the unknown type provide better type safety. You cannot assign an unknown variable to any other type without first performing a type assertion or a type check.

//? Type Inference:

// any: any is used when TypeScript cannot infer or when you want to explicitly allow any type. This means that TypeScript doesn't offer much type checking on variables of the any type.

// unknown: unknown is used when TypeScript cannot infer the type, but it still enforces type checking and safety. You must narrow down the type using type assertions or type guards before using it.

//? Type Assertions:

// any: With any, you can easily perform type assertions to convert a value to a specific type, and TypeScript will trust you, even if the assertion might be incorrect.

// unknown: With unknown, you must perform a type assertion or use a type guard to tell TypeScript what the type actually is before performing operations that depend on the specific type.

// Example using any:

let anyValue: any = "Hello, World";
let length_: number = anyValue.length; // No type error

// Example using unknown:
let unknownValue: unknown = "Hello, World";
let length__: number = (unknownValue as string).length; // Type assertion required

//? Type Safety Trade-off:

// any sacrifices type safety for flexibility, making it useful in situations where you need to work with dynamically typed or third-party code without strict type checking.

// unknown prioritizes type safety. It's more suitable when you want to maintain type safety and provide better type information for later code analysis.

// In general, it's recommended to use unknown over any if you're dealing with unknown types because it provides better type safety and makes it explicit that you are handling a value of unknown type. You should only resort to any when you need maximum flexibility or when working with code that cannot be easily typed, such as untyped JavaScript libraries.

