let prop = "foo";
let getName = () => "name2";
let o = {
  [prop]: "hey",
  ["b" + getName()]: "there"
};
console.log(o.foo);
console.log(o["bname2"]);
