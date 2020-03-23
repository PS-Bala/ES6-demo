// Array matching
let [a, , b] = [1, 2, 3];
console.group("Array matching");
console.log("a:", a, "b:", b);
console.groupEnd();

// Object matching, shorthand notation
let obj1 = { foo: "lorem", bar: "ipsum", choo: "uhoh" };
var { foo, bar } = obj1;
console.group("Object matching");
console.log("foo:", foo, "bar:", bar);
console.groupEnd();

// // Parameter context
function f([name, val]) {
  console.log(name, val);
}
function g({ name: n, val: v }) {
  console.log(n, v);
}
function h({ name, val }) {
  console.log(name, val);
}
// console.group("Parameter context");
f(["bar", 42]);
g({ name: "foo", val: 7 });
h({ name: "bar", val: 42 });
console.groupEnd();

// Need to split out any one value from object ?
let student = { id: 12122121, name: "bala", age: 25, department: "CSE" };
let { name, ...others } = student;
console.log("Split out objects");
console.log("name :", name);
console.log("others :", others);
