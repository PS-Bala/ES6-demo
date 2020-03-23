// Map
let map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [undefined, "Undefined Value"],
  [null, "Null Value"],
  [{ a: "s" }, "This is object"]
]);
console.group("map keys");
for (let key of map.keys()) {
  console.log(key);
}
console.groupEnd();
console.group("map values");
for (let value of map.values()) {
  console.log(value);
}
console.groupEnd();

console.group("map");
for (let [key, value] of map) {
  console.log(key, value);
}
console.groupEnd();
// Set
console.group("Set");
let set = new Set(["red", "green", "blue"]);
for (let x of set) {
  console.log(x);
}
console.groupEnd();

// How to remove duplicates from array
console.group("Remove duplicates");
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
for (let x of unique) {
  console.log(x);
}
console.groupEnd();
