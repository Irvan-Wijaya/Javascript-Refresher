// bisa juga assign seperti ini
let nama = "Irvan";
let age = 23;

let user = {
  nama,
  age,
  gender: "Male",
  isAdult: true,

  greet() {
    console.log(
      `Name: ${this.nama}\nAge: ${this.age}\nGender: ${this.gender}\nLegal Status: ${this.isAdult}`
      // keyword this to prevent get ambigous or wrong access property
    );
  },
};

user.greet(); // Output: Name: Van Age: 23

// adding attribute to object
user.height = 175;
console.log(user.height); // 175

// delete attribute object
delete user.isAdult;
console.log(user.isAdult); // undefined

// duplicate object
let object2 = Object.assign({}, user);
object2.nama = "Van";
console.log(object2); // nama changed to Van
console.log(user); // nama still Irvan

// object reference
let object22 = user; // but this doesnt duplicate just reference, so if we change object22, object user will changed too. (vice verza from Object.assign)
