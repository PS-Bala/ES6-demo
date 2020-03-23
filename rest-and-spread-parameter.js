// Rest parameter
function f(x, ...y) {
  console.log(y);
  // y is an Array
  return x * y.length;
}
console.log("Rest paramter");
console.log(f(3, "hello", true) === 6);

// Spread parameter
function add(a, b) {
  return a + b;
}
let nums = [5, 4];
console.log("Spread paramter");
console.log(add(...nums));

// Combine two arrays
let a = [2, 3, 4];
let b = [1, ...a, 5];
console.log("Combine arrays : ");
console.log(b);
