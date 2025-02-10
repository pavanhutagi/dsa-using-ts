// Different ways to declare and initialize arrays in JavaScript
const d = 1;
const e = 2;
const f = 3;

// Array initialization using array literal with variables
const array0 = [d, e, f];
console.log(array0);

// Array initialization using array literal with values
const array1 = [1, 2, 3, 4, 5];
console.log(array1);

// Array initialization using Array constructor with multiple arguments
const array2 = new Array(5, 6, 7, 8, 9);
console.log(array2);

// Array initialization with a single argument - creates an array of length 5 with empty slots
const array3 = new Array(5);
console.log(array3);

// Array initialization with a single string argument - creates an array with one string element
const array4 = new Array("Hello World");
console.log(array4);

// Demonstration of common array methods

// map() - creates a new array by doubling each element
const array5 = array1.map((item) => item * 2);
console.log(array5);

// map() - creates a new array of objects with transformed values
const array6 = array1.map((item) => {
  return { item: item * 2 };
});
console.log(array6);

// map() - creates a new array with remainder of division by 2
const array7 = array1.map((item) => item % 2);
console.log(array7);

// map() - creates a new array with boolean values for even numbers
// Note: undefined is returned for odd numbers since there's no else clause
const array8 = array1.map((item) => {
  if (item % 2 === 0) {
    return true;
  }
});
console.log(array8);

// forEach() - iterates through array elements without creating a new array
array1.forEach((item) => console.log(item));
