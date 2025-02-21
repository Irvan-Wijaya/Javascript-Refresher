// udemy
const hobbies = ["Cooking", "BasketBall", "Gym"];
hobbies.push("Working");

const index = hobbies.findIndex((item) => item === "Gym");
console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

const toObject = hobbies.map((item) => ({ text: item }));
console.log(toObject);

// DESTRUCTURING
const { name: username, age } = {
  name: "Irvan",
  age: 23,
};
console.log(username);
console.log(age);

// if there a function that accept the parameter contain an object, instead you using dot notation to accces the value, use destructuring
function storeOrder({ id, currency }) {
  console.log("Id:", id);
  console.log("Currency:", currency);
}
storeOrder({ id: 5, currency: "USD", amount: 15.99 });

// SPREAD OPERATOR
const newHobbies = ["Bowling"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const user = {
  name: "Van",
  age: 23,
};

const extendedUserRole = {
  isAdmin: true,
  ...user,
};
console.log(extendedUserRole);
