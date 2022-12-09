/* Union types : Union types grant us the ability to allow variables, function parameters and so on to be multiple types. This is useful when we want to allow a variable to be a number or a string, for example. We can use the pipe character (|) to separate each type. For example, let’s say we want to create a function that takes a string or a number and returns a string. We can do this by using a union type:
 */

let booleanOrString = true;
booleanOrString = "Hello"; // Error: Type 'number' is not assignable to type 'boolean | string'.

// Fixed by adding a union type to the variable declaration: ' pipe character (|) to separate each type.'
let fixBooleanOrString: boolean | string = true;
fixBooleanOrString = "Hello";

// Function with union type
// Log the ID to the console if it is a string & uppercase the value. Otherwise, log the ID as a number.
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(`Your ID is: ${id.toUpperCase()}`);
  } else {
    console.log(`Your ID is: ${id}`);
  }
}
