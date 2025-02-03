let promise = new Promise(function (resolve, reject) {
  let status = true;
  status ? resolve("Success") : reject("Decline");
});
console.log(promise);

promise
  .then((status) => console.log("ini resolve " + status))
  .catch((status) => console.log("Ini reject " + status));
