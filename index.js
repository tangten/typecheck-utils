const {
  linearSearch,
  binarySearch,
  jumpSearch,
  interpolationSearch,
  ternarySearch,
  fibonacciSearch,
} = require("../src/search");
const { isArrayOfObjects, isNestedObject } = require("../src/typecheck");


// Exporting our functions
module.exports = {
  isArrayOfObjects,
  isNestedObject,
  linearSearch,
  binarySearch,
  jumpSearch,
  interpolationSearch,
  ternarySearch,
  fibonacciSearch,
};
