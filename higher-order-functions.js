// for of
let allNumbers = [25, 12, 15, 34];
console.log("for of");
for (let element of allNumbers) {
  console.log(element);
}

// Higher order functions

// find
let five = allNumbers.find(v => v % 5 === 0);
console.log("find : ", five);

// filter
let fives = allNumbers.filter(v => v % 5 === 0);
console.log("filter : ", fives);

// map
let modifiedList = allNumbers.map(item => item + 1);
console.log("Map result: ", modifiedList);

// reduce

let total = allNumbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log("reduce :", total);

// sort
let sortedList = allNumbers.sort((a, b) => a - b);
console.log("sort", sortedList);
