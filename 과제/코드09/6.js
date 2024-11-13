function evenNumber(arr) {
  let new_arr = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      new_arr.push(num);
    }
  }
  return new_arr;
}

let numbers3 = [10, 25, 36, 99, 58];
console.log(numbers3); // [10, 25, 36, 99, 58]
console.log(evenNumber(numbers3)); // [10, 36, 58]
