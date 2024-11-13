// arr = [1, 2, 3, 4, 5];
// for (let value of arr) {
//   console.log(value);
// }
// 배열의 반복문 1
// 아래와 같은 배열이 있을 때 배열의 원소를 출력하는 반복문을 작성한다.
// arr = [1, 2, 3, 4, 5]
// ​
// 실행 결과
// 1
// 2
// 3
// 4
// 5

// const arr = [1, 2, 3, 4, 5];

// for (let value of arr) {
//   console.log(Math.sqrt(value));
// }

// const arr = [1, 2, 3, 4, 5];

// for (let key in arr) {
//     console.log(Math.sqrt(arr[key]));
// }

// 배열의 반복문 2
// 아래와 같은 배열이 있을 때 각 원소의 제곱을 출력하는 반복문을 작성한다.
// arr = [1, 2, 3, 4, 5]
// ​
// 실행 결과
// 1
// 4
// 9
// 16
// 25

arr = [0, 1, 2, 3, 4, 5];

for (let value of arr) {
  if (value % 2 === 0) {
    // 짝수인지 확인
    console.log(value);
  }
}
// 배열의 반복문 3
// 아래와 같은 배열이 있을 때 원소가 짝수면 출력하는 조건문과 반복문을 작성한다.
// arr = [0, 1, 2, 3, 4, 5]
// ​
// 실행 결과
// 2
// 4

let person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

person['name'];
person['age'];
person['job'];

for (let key in person) {
  console.log(key);
  let value = person[key];
  console.log(value);
}

// 객체의 반복문 1
// 아래와 같은 객체가 있을 때 객체의 키와 값을 출력하는 반복문을 작성한다.
// let person = {
//   name: '홍길동',
//   age: 30,
//   job: '개발자',
// };
// ​
// 실행 결과
// name, 홍길동
// age, 30
// job, 개발자
