/*Implicit and Explicit Types in TypeScript

  Implicit types come from TypeScript inferring the type based on a variable's initial value and look just like regular JavaScript.

  Explicit types are when we intentionally provide the type using a special TypeScript syntax.
*/

// Implicit types
// let myName = "Ciaran";
// let myAge = 30;
// let myExistence = true;


// Typescript will infer the type of a variable based on its initial value
myName = 232323; // Error: Type 'number' is not assignable to type 'string'.

// Explicit types
let myName: string = "Ciaran"; // Explicitly declare the type of string
let myAge: number = 30; // Explicitly declare the type of number
let myExistence: boolean = true; // Explicitly declare the type of boolean
let myArray: string[] = ["Ciaran", "John", "Paul"]; // Explicitly declare the type of array
let any:any = "Ciaran"; // Explicitly declare the type of any
