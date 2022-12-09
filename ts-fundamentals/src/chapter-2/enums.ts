// Enums: are used to define a set of named constants.

// Defining Enums in TypeScript
enum Sizes {
  small, // 0
  medium, // 1
  large, // 2
}

console.log(Sizes.small); // 0

// Or you can define the values of the enum
enum Sizes2 {
  small= 'small',
  medium= 'medium',
  large= 'large',
}
