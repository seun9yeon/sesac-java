function maxNumber(arr) {
  let max = -Infinity;
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

let numbers = [10, 25, 36, 99, 58];
console.log(numbers); // [10, 25, 36, 99, 58]
console.log(maxNumber(numbers)); // 99
