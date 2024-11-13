let N = 5;

for (i = 1; i <= N; i++) {
  console.log(i);
}

N = 5;

let count = 0;
while (count < 5) {
  console.log(`카운트: ${count}`);
  count++;
  console.log(count);
}

N = 5;

let total = 0;
console.log(N);

for (let i = 1; i <= N; i++) {
  total += i;
} //+=는 값을 더하고 할당
console.log(total);

// i가 1 되고 1 <= N i++ 증감식
// 1~5까지증가된다 <=는 왼쪽 값이 작거나 같다
// total은 i의 값을 더하고 할당
// 5
// 15는 1+2+3+4+5 =15

// 1부터 N까지의 합
// 변수 N 을 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 total 을 선언하고, 0 을 할당한다.
// 변수 N 의 값을 출력한다.
// 1부터 N 까지의 숫자를 변수 total 에 더하는 반복문을 작성한다.
// 변수 total 의 값을 출력한다.
// 실행 결과
// 5
// 15

N = 5;

let total1 = 0;
console.log(N);

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}
console.log(total1);

// 짝수의 합
// 변수 N 을 선언하고, 임의의 숫자형 값을 할당한다.
// 변수 total 을 선언하고, 0 을 할당한다.
// 변수 N 의 값을 출력한다.
// 1부터 N 까지의 숫자 중 짝수만 변수 total 에 더하는 반복문을 작성한다.
// 변수 total 의 값을 출력한다.
// 실행 결과
// 5
// 6

const N1 = 5;
let count1 = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    count1++;
  }
}
console.log(count1);

const arr = [1, 9, 3, 11, 4, 5, 2, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    break;
  }
  console.log(arr[i]);
}

// 배열길이 8보다 작을 때까지 반복함
// if (arr[i] % 2 === 0): 1 % 2는 1(홀수) -> 조건을 만족하지 않음.
// console.log(arr[i]):1을 출력

//if (arr[i] % 2 === 0): 4 % 2 는 0 (짝수) -> 조건을 만족
// 짝수를 만났으므로 반복문 즉시 종료

// 반복문 제어
// 아래와 같은 배열이 있을 때 배열의 원소를 출력하는 반복문을 작성한다.
// 원소가 짝수라면 원소를 출력하지 않고, 반복문을 즉시 종료한다.
// arr = [1, 9, 3, 11, 4, 5, 2, 7]
// ​
// 실행 결과
// 1
// 9
// 3
// 11

let todos = [];

todos.push({
  todoId: 1,
  content: '예습하기',
  isCompleted: false,
});

todos.push({
  todoId: 2,
  content: '강의듣기',
  isCompleted: false,
});

todos.push({
  todoId: 3,
  content: '복습하기',
  isCompleted: false,
});

console.log(todos);

// 변수 todos 를 선언하고, 빈 배열을 할당한다.
// 아래 객체 정보를 기반으로 생성한 객체 3개를 변수 todos 에 추가한다.
// 객체 정보
// {
//   "todoId": 1,
//   "content": "예습하기",
//   "isCompleted": false
// },
// {
//   "todoId": 2,
//   "content": "강의듣기",
//   "isCompleted": false
// },
// {
//   "todoId": 3,
//   "content": "복습하기",
//   "isCompleted": false
// }

todos = [
  { content: '예습하기', isCompleted: false },
  { content: '강의듣기', isCompleted: false },
  { content: '복습하기', isCompleted: false },
];

for (let i = 0; i < todos.length; i++) {
  console.log(
    `content: ${todos[i].content}, isComplted: ${todos[i].isCompleted}`
  );
}

// 위 문제에서 만들어진 변수 todos 를 활용한다.
// 배열에 저장된 객체의 키 content 와 isCompleted 의 값을 출력하는 반복문을 작성한다.
// 실행 결과
// content: 예습하기, isCompleted: false
// content: 강의듣기, isCompleted: false
// content: 복습하기, isCompleted: false

todos = [{ todoId: 2, content: '강의듣기', isCompleted: false }];

for (let i = 0; i < todos.length; i++) {
  console.log(`todoId: ${todos[i].todoId}`);
}

// 위 문제에서 만들어진 변수 todos 를 활용한다.
// 배열에 저장된 객체를 순회하는 반복문을 작성한다.
// 키 todoId 의 값이 2 인 객체를 찾아서 출력하는 조건문을 작성한다.
// 실행 결과
// { todoId: 2, content: '강의듣기', isCompleted: false }

todos = [
  { todoId: 1, content: '예습하기', isCompleted: false },
  { todoId: 2, content: '강의듣기', isCompleted: true },
  { todoId: 3, content: '복습하기', isCompleted: false },
];

for (i = 0; i < todos.length; i++) {
  if (todos[i].todoId === 2) {
    todos[i].isCompleted = true;
  }
}
console.log(todos);

// 객체와 배열 4
// 위 문제에서 만들어진 변수 todos 를 활용한다.
// 배열에 저장된 객체를 순회하는 반복문을 작성한다.
// 키 todoId 의 값이 2 인 객체의 키 isCompleted 의 값을 true 로 수정하는 조건문을 작성한다.
// 변수 todos 를 출력한다.
// 실행 결과
// [
// { todoId: 1, content: '예습하기', isCompleted: false },
// { todoId: 2, content: '강의듣기', isCompleted: true },
// { todoId: 3, content: '복습하기', isCompleted: false }
// ]
