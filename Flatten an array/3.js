// Experiment with combining concat() and spread operator to flatten an array
let newArr = [1, [2], [3, [[4]]]];
let new1 = [].concat(newArr); // No flatten
let new2 = [].concat(...newArr); // Flatten one level
let new3 = [].concat(1, [2], [[3]]); // No flatten
console.log(new1, new2, new3);
console.log(...newArr);
