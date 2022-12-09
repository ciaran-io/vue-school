// Functions: Type Parameters and Returns In TypeScript

function sum(x, y) {
  return x + y;
}
console.log(sum(2, "3")); // Error javascript: concatenates the values annotated with the type any resulting in 23

function sumWithTypes(x: number, y: number): number {
  return x + y;
}

console.log(sumWithTypes(2, 4));
