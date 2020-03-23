// let myMath = {
//   add: function(a, b) {
//     return a + b;
//   },
//   subtract: function(a, b) {
//     return a - b;
//   },
//   multiply: function(a, b) {
//     return a * b;
//   },
//   divide: function(a, b) {
//     return a / b;
//   }
// };

let myMath = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
};

console.log("Add 2+3 : ", myMath.add(2, 3));
