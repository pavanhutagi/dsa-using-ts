{
  console.log("Hello World");
}

function add1(a, b) {
  return a + b;
}
console.log(add1(1, 2));

const add2 = (a, b) => {
  return a + b;
};
console.log(add2(1, 2));

const add3 = (a, b) => a + b;
console.log(add3(1, 2));

const add4 = (a) => {
  return (b) => a + b;
};
const testAdd1 = add4(1);
const testAdd2 = testAdd1(2);
console.log(testAdd2);
