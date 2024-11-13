// 배열 선언
const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 양수이면서 짝수인 원소만 새로운 배열에 추가
const newArr = arr.filter((num) => num > 0 && num % 2 === 0);
console.log(newArr);
