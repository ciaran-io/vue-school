// Literal Types : Literal types allow you to specify the exact value a variable must have.

let pi: 3.14 = 3.14;
pi = 3.15; // Error: Type '3.15' is not assignable to type '3.14'.

// Literal types can be used with union types to create a type that must be one of several different values.
function setProductStatus(status: "available" | "unavailable") {
  // ...
}

setProductStatus("notAvailable"); // Error: Argument of type '"notAvailable"' is not assignable to parameter of type '"available" | "unavailable"
