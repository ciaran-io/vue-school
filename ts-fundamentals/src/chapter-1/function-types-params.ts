// Functions: Parameter Destructuring, Void, and Optional Params in TypeScript

function sun({ x, y }: { x: number; y: number }): number {
  return x + y;
}

console.log(sun({ x: 2, y: 4 }));

// Function log can use any type for a argument
// Void means that the function does not return anything
function log(value:any) :void {
  console.log(value);
}

// Optional parameters add a ? after the parameter name
function greet (name? :string) {
  if(name) {
    log(`Hello ${name}`);
  }else {
    log("Hello stranger");
  }
}

greet("Ciaran !");