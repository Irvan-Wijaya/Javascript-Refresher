async function getData() {
  let totalClassA = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 2000);
  });

  let totalClassB = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 3000);
  });

  let total = (await totalClassA) + (await totalClassB);
  console.log(total);
}

getData();
