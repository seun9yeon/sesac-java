// 배열 선언
const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

console.log('배열의 길이 활용');
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

console.log('reverse() 메서드 활용');
for (const num of arr.reverse()) {
  console.log(num);
}
