// In TypeScript, you can control the visibility and accessibility of class members (properties and methods) by using access modifiers. TypeScript provides three main access modifiers: public, protected, and private. These modifiers determine how class members can be accessed within and outside the class.

//? Public Access Modifier:

// The public access modifier is the default visibility for class members in TypeScript. Public members can be accessed from anywhere, both within the class and from external code.

class Person {
    name: string; // Public member

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Alice");
console.log(person.name); // Accessing the public property

// In this example, the name property is marked as public, so it can be accessed both within and outside the class.

//? Protected Access Modifier:

// The protected access modifier restricts access to class members from outside the class. It allows derived classes (subclasses) to access the protected members, but it prevents direct access from external code.

class Employee {
    protected employeeId: number;

    constructor(id: number) {
        this.employeeId = id;
    }
}

class Manager extends Employee {
    constructor(id: number) {
        super(id);
        console.log(this.employeeId); // Accessing the protected property in a derived class
    }
}

const employee = new Employee(123);
//! console.log(employee.employeeId); // Error: Property 'employeeId' is protected and only accessible within class 'Employee' and its subclasses.
// In this example, the employeeId property is marked as protected, so it can be accessed from within the Employee class and its subclasses, but not from external code.

//? Private Access Modifier:

// The private access modifier restricts access to class members to only within the class. Private members are not accessible from derived classes or external code.

class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // Accessing a private property through a public method

//! console.log(account.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// In this example, the balance property is marked as private, so it can only be accessed from within the BankAccount class.

// Access modifiers help you control the encapsulation and visibility of class members, promoting data hiding and encapsulation. Public members provide full access, protected members allow access within derived classes, and private members restrict access to the declaring class only. These modifiers are essential for building robust and maintainable object-oriented code in TypeScript.