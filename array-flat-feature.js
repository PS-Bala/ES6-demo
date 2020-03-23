const arr1 = [1, 2, [3, 4]];
console.log(
  `%c[1, 2, [3, 4]] :`,
  "color: orange; font-weight: bold",
  arr1.flat()
);

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(
  `%c[1, 2, [3, 4, [5, 6]]] :`,
  "color: orange; font-weight: bold",
  arr2.flat()
);

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(
  `%c[1, 2, [3, 4, [5, 6]]] : `,
  "color: orange; font-weight: bold",
  arr3.flat(2)
);

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(
  `%c[1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] :`,
  "color: orange; font-weight: bold",
  arr4.flat(Infinity)
);

// flatmap feature
// let arr1 = ["it's Sunny in", "", "California"];

// const output1 = arr1.map(x => x.split(" "));
// console.log(output1);
// // [["it's","Sunny","in"],[""],["California"]]

// const output2 = arr1.flatMap(x => x.split(" "));
// console.log(output2);
// // ["it's","Sunny","in", "", "California"]
