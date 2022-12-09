// Array of Types in TypeScript

const books = ['book1', 'book2', 'book3']; // Implicitly typed array of strings
books.push(4); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
books.push('book4'); // OK