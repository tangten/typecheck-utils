# TypeCheck Utils

A simple library utilizing the 'are-arrays' and 'are-objects' packages for advanced type validation in JavaScript.

## Installation
```
npm install typecheck-utils
```

## Usage
```
const typeCheckUtils = require('typecheck-utils');

const arrayOfObjects = [{ name: "Alice" }, { age: 30 }];
const nestedObject = { data: { key: "value" } };

console.log(typeCheckUtils.isArrayOfObjects(arrayOfObjects)); // true
console.log(typeCheckUtils.isNestedObject(nestedObject));     // true 
```

## Available Functions
- isArrayOfObjects(data)
  - Returns `true` if the provided data is an array where all elements are objects.
  - Returns `false` otherwise.
- isNestedObject(data)
  - Returns `true` if the provided data is an object containing at least one nested object within its values.
  - Returns `false` otherwise.

## Contributing
Contributions and suggestions are welcome! Please open an issue or submit a pull request.

## License
MIT

Let me know if you have any other content you'd like to include in the README!