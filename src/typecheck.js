const areArrays = require('are-arrays');
const areObjects = require('are-objects');

// Our library functions
function isArrayOfObjects(data) {
  if (!areArrays(data)) return false; // Ensure it's an array at all

  // Check each element within the array
  return data.every(item => areObjects(item)); 
}

function isNestedObject(data) {
  if (!areObjects(data)) return false;

  // Check values for nested objects
  return Object.values(data).some(value => areObjects(value));
}

// Exporting our functions
module.exports = {
  isArrayOfObjects,
  isNestedObject
};