// Type conversion
let variable1 = "9";
let variable2 = "3";

let hasil = variable1 - variable2;
// so math operator can change string to number type, but + still string like concat
console.log(typeof hasil); // Number
console.log(hasil);

let hasilConcat = variable1 + variable2;
console.log(typeof hasilConcat); // String
console.log(hasilConcat);

// Ternary Operator
let score = 70;
let grade = score > 88 ? "A" : "B";
console.log(grade);

// Multiple Ternary Operator
let advancedGrade =
  score >= 88
    ? "A"
    : score >= 77 && score < 88
    ? "B+"
    : score >= 70 && score < 77
    ? "B-"
    : "C";
console.log(advancedGrade);

// Null Coalescing Operator
let a;
let b;
let c;
let result = a ?? b ?? c ?? "Up to you"; // basicly give default value to prefent null, but if all null will undefined
console.log(result);
