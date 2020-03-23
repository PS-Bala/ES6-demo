import { getData } from "./getData.js";

const loadData = async () => {
  try {
    let data = await getData(res => console.log(res));
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};

// const loadData = async () => {
//   console.log("loading...");
//   const result = await fetch("https://jsonplaceholder.typicode.com/todos/26");
//   let data = await result.json();
//   console.log("response data : ", data);
// };

loadData();
