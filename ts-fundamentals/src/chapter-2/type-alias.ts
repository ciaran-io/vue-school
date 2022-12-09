// Type Aliases in TypeScript: Type aliases are most handy for naming union types but can also be used in other ways.

type Sizes = 'small' | 'medium' | 'large';
function setProductSize(size: Sizes) {
  // ...
}
setProductSize('small');