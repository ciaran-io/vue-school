//  Type assertions: Type assertions have two forms. One is the “angle-bracket” syntax: <type>value. The other is the as-syntax: value as type. The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.

const theCanvas = document.getElementById("canvas") as HTMLCanvasElement;

function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `€${netPrice}` : netPrice;
}

const netPrice = getNetPrice(100, 10, true) as string; //  or angle syntax <string>getNetPrice(100, 10, true);
