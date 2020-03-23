// ES5
var x = function(x, y) {
  return x * y;
};

// // ES6
// const x = (x, y) => x * y;

// console.log("Arrow function example");
console.log("3*5 = ", x(3, 5));

// // Statement body
// let allNumbers = [12, 15, 34, 25];
// let fives = [];
// allNumbers.forEach(v => {
//   if (v % 5 === 0) {
//     fives.push(v);
//   }
// });
// console.log("fives : ", fives);

// // this keyword behavior
// class Button {
//   count = 1;
//   clickHandler = args => {
//     console.log(this);
//     this.count++;
//     document.getElementById("ic").innerText = `Count - ${this.count}`;
//   };
// }
// const btn = new Button();
// document.addEventListener(
//   "DOMContentLoaded",
//   function() {
//     document.getElementById("ic").addEventListener("click", btn.clickHandler);
//   },
//   false
// );
