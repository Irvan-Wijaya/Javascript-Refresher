let user = class {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  sayHi() {
    console.log("hello " + this._name);
    console.log("umur kamu adalah " + this._age);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
};

let ben = new user();
ben.name = "Grace";
ben.age = 21;
ben.sayHi();
