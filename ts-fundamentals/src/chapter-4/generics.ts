//  Generics are a way to create reusable code that can work with different types

interface Person {
  name: string;
  age: number;
}

const me: Person = {
  name: "Jack",
  age: 42,
}
// <Type> is a generic type parameter it can be named anything
// the type parameter is used to define the type of the value
const clone = <Type> (value: Type): Type => {
  const json = JSON.stringify(value);
  return JSON.parse(json);
}

const bookList: string[] = ['The Hobbit', 'The Lord of the Rings', 'The Silmarillion']

const bookCopies = clone<string[]>(bookList);
bookCopies.push('The Children of Hurin');