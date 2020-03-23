export let getData = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ name: "bala", age: 24 });
      } else {
        reject("Customized error in fetching data");
      }
    }, 2000);
  });
};
