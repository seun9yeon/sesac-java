// 배열 선언
const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 모든 원소를 곱한 값 계산
const product = arr.reduce((acc, num) => acc * num, 1);
console.log(product);
