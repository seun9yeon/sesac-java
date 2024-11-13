// map
// [x, y, z] => [f(x), f(y), f(z)]
// f(...)를 모아서 새로운 array를 만든다.
// arr1.map((el) => {
//  f: 무언가의 기능을 하는 것
//  return el + 1
// return f(el)
//})

// filter
// [x, y, z] => f(x), f(y), f(z) => [x, z];
// f(...)의 결과가 T인 경우만 모아서 새로운 array를 만든다.

const arr1 = [1, 2, 3, 4, 5];
const newArr1 = [];
const arr2 = [];

for (i = 0; i < 5; i++) {
  console.log(arr1[i] * arr1[i]);
  newArr1.push(arr1[i] * arr1[i]);
}

console.log(newArr1);

arr2.push(1);
arr2.push(2);
arr2.push(3);
arr2.push(4);
arr2.push(5);
console.log(arr2);

const newArr3 = [];
const arr3 = [
  {
    name: 'jun',
    age: 18,
  },
  {
    name: 'alex',
    age: 28,
  },
  {
    name: 'ken',
    age: 38,
  },
];

// for (i = 0; i < 3; i++) {
//   console.log(arr3[i]);
//   console.log(arr3[i].age);
//   newArr3.push(arr3[i].age);
// }

for (let el of arr3) {
  newArr3.push(el.age);
}
console.log(newArr3);

const newMappedArr3 = arr3.map((el) => el.age);
console.log(newMappedArr3);
console.log('---------------------------------------');

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr4 = [];
for (let num of arr4) {
  if (!(num % 2)) {
    newArr4.push(num);
  }
}
console.log(newArr4);

const newFilteredArr4_2 = arr4.filter((el) => {});
