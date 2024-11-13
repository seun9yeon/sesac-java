function determine(x) {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
}

let num5 = 10;
console.log(num5); // 10
console.log(determine(num5)); // 1

num5 = 0;
console.log(num5); // 0
console.log(determine(num5)); // 0

num5 = -10;
console.log(num5); // -10
console.log(determine(num5)); // -1
