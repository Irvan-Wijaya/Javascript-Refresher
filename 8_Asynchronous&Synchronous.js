// Synchronous
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// Asynchronous
console.log("6");
console.log("7");
setTimeout(() => {
  console.log("8");
}, 3000);
console.log("9");
console.log("10");
