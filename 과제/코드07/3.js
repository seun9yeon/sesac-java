// 배열 선언
let arr = [0, 1, 2, 3, 4, 5];

// 배열에서 짝수만 출력하는 for...of 반복문
for (let value of arr) {
  if (value % 2 === 0 && value !== 0) {
    console.log(value);
  }
}
