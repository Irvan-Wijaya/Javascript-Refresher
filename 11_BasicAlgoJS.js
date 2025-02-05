// 1. Reversed String
function reversedString(str) {
  return str.split("").reverse().join("");
}
console.log(reversedString("irvan"));

// 2. Palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return reversed === str;
}
console.log(isPalindrome("nan"));

// 3. Largest Number
function findLargest(nums) {
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;

  // fast way
  // return Math.max(...arr)
}
console.log(findLargest([12, 23, 43, -2, 111, 43]));

// 4. Remove first element
let arr = [5, 6, 7];
arr = arr.slice(1);
console.log(arr);

// 5. Callback function
function greet(name, callback) {
  callback(`Hello, ${name}!`);
}
greet("Geek", (message) => console.log(message));

// 6. Reduce Method
console.log([1, 2, 3].reduce((a, b) => a + b));

// 7. Sum an array
function sumArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sumArray([15, 6, 10, 2]));

// 8. Prime Checker
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(97));

// 9. Fibonacci
function fibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let nextNum;
  for (let i = 1; i <= n; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
}
console.log(fibonacci(7));

// 10. factorial
function factorial(x) {
  return x == 0 ? 1 : x * factorial(x - 1);
}
console.log(factorial(5));

// 11. Power (pangkat)
function power(base, exponent) {
  return base ** exponent;
}

console.log(power(3, 4));

// 11. Sort ASC
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sortArray([5, 3, 8, 1]));

// 12. longest word
function longestWord(word) {
  let words = word.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longestWord("Apple Developer Academy"));

// 13. Capitalize first letter
function capitalizeFirstLetter(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalizeFirstLetter("apple developer academy"));

// 14. Reversed Array
function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 15. Get last element
function lastElement(word) {
  return word[word.length - 1];
}
console.log(lastElement([6, 2, 9, 5]));

// 16. Map function
let number = [1, 2, 3, 4, 5];
let tryMap = number.map((e) => e * 2);
console.log(tryMap);

// 17. Parse to stringify json data
let jsonData = '{"name": "Geeks"}';
let parsedData = JSON.parse(jsonData);
console.log(parsedData.name);
