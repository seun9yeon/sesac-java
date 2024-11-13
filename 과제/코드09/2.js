function compare(x1, x2) {
  if (x1 > x2) {
    return x1;
  } else if (x2 > x1) {
    return x2;
  } else {
    return null;
  }
}

let num3 = 1;
let num4 = 2;
console.log(num3);
console.log(num4);

let bigger = compare(num3, num4);
console.log(bigger); // 2

num3 = 1;
num4 = 1;
console.log(num3);
console.log(num4);

bigger = compare(num3, num4);
console.log(bigger); // null
