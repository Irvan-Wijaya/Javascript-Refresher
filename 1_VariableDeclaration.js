// Variable Declaration let, const, var
const person = "Irvan";
// person = "Van"; -> will error because const cant be reassigned

let itsMe = "V";
itsMe = "I"; // no problem

// var is function scoped. when var is created in func, can access it. Cant be accessed outside the func
function myFunction() {
  var myVar = "Nick";
  if (true) {
    var myVar = "John";
    console.log(myVar); // "John"
    // actually, myVar being function scoped, we just erased the previous myVar value "Nick" for "John"
  }
  console.log(myVar); // "John" - see how the instructions in the if block affected this value
}
console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.

// var vs let
function myFunction() {
  let myVar = "Nick";
  if (true) {
    let myVar = "John";
    console.log(myVar); // "John"
    // actually, myVar being block scoped, we just created a new variable myVar.
    // this variable is not accessible outside this block and totally independent
    // from the first myVar created !
  }
  console.log(myVar); // "Nick", see how the instructions in the if block DID NOT affect this value
}
console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.

// about const
// for objects
const person1 = {
  name: "Nick",
};
person1.name = "John"; // this will work ! person variable is not completely reassigned, but mutated
console.log(person1.name); // "John"
person1 = "Sandra"; // raises an error, because reassignment is not allowed with const declared variables

//   for array
const person2 = {
  name: "Nick",
};
person2.name = "John"; // this will work ! person variable is not completely reassigned, but mutated
console.log(person2.name); // "John"
person2 = "Sandra"; // raises an error, because reassignment is not allowed with const declared variables

// backtig
let name = "Irvan Wijaya";
console.log(`Test backtig ${name}`);
