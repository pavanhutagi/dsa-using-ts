// Demonstrating var declaration and re-declaration
var a = 10;
console.log(a);

var a = 20; // var allows re-declaration
console.log(a);

// Demonstrating let declaration and reassignment
let b = 10;
console.log(b);

b = 20; // let allows reassignment but not re-declaration
console.log(b);

// Demonstrating const declaration (immutable)
const c = 10;
console.log(c);

// Demonstrating var hoisting behavior
function testVar1() {
  console.log(x); // undefined due to hoisting
  if (true) {
    var x = 10; // var has function scope
  }
  console.log(x); // 10 - accessible outside the if block
}
testVar1();

// Demonstrating let block scope
function testVar2() {
  if (true) {
    let x = 10; // let has block scope
    console.log(x);
  }
  // x is not accessible here
}
testVar2();
