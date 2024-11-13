function minNumber(arr) {
  let min = Infinity;
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

let numbers2 = [10, 25, 36, 99, 58];
console.log(numbers2); // [10, 25, 36, 99, 58]
console.log(minNumber(numbers2)); // 10
