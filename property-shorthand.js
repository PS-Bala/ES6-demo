let first = "john";
let last = "doe";
let obj = { first, last };
console.log(JSON.stringify(obj));

function createDog(name, ability) {
  return { type: "animal", name, ability };
}
let a = createDog("wolf", "bark");
console.log(JSON.stringify(a));
