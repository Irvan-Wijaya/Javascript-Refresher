// Function Declaration -> up to you where do you called the function before or after
function greet() {
  console.log("Hi");
}
greet();

// Function Expression -> if function called above or before the function it self, it'll error cannot access | Main Difference
let squareArea = (s) => {
  return s * s;
};
console.log(squareArea(4));

// Function with Parameters
function rectagleAre(panjang, lebar) {
  return panjang * lebar;
}
console.log(rectagleAre(5, 9));

// Function with default parameter
function circleArea(r, pi = 3.15) {
  return pi * (r * r);
}
console.log(circleArea(7));

// arrow function
function double(x) {
  return x * 2;
} // Traditional way
console.log(double(2)); // 4

const double2 = (x) => x * 2; // Same function written as an arrow function with implicit return
console.log(double2(2)); // 4
