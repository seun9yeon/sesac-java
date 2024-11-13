// 배열 선언
const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 방법 1: for 반복문 사용
console.log('for 반복문');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 방법 2: for...of 반복문 사용
console.log('for ... of 반복문');
for (const num of arr) {
  console.log(num);
}

// 방법 3: forEach 메서드 사용
console.log('forEach 반복문');
arr.forEach((num) => console.log(num));
