function add(x1, x2) {
  // 아래와 같은 기능을 수행하는 함수 add 를 정의한다. // 2개의 매개변수 x1 x2 를 입력 받는다.
  return x1 + x2; // x1 과 x2 를 더한 값을 반환한다.
}

num1 = 1;
num2 = 2; // 임의의 변수 2개를 선언하고, 숫자형 값을 할당한다.

console.log(num1);
console.log(num2); // 2개의 변수를 출력한다.

let sum = add(num1, num2); // 함수 add 를 호출해서 두 변수를 더한 값을 구하고, 출력한다.

console.log(sum);

// 더하기 함수
// 실행 결과
// 1
// 2
// 3

function compare(x1, x2) {
  // 아래와 같은 기능을 수행하는 함수 compare 를 정의한다. // 2개의 매개변수 x1 x2 를 입력 받는다.
  if (x1 > x2) {
    // x1 과 x2 의 크기를 비교하는 조건문을 작성한다. // 두 변수 중 더 큰 변수를 반환한다.
    return x1;
  } else if (x1 < x2) {
    return x2;
  } else {
    return null; // 더 변수가 같다면 null 을 반환하다.
  }
}

let num3 = 1;
let num4 = 2; // 임의의 변수 2개를 선언하고, 숫자형 값을 할당한다.

console.log(num3);
console.log(num4); // 2개의 변수를 출력한다.

let R = compare(num3, num4); // 함수 compare 를 호출해서 두 변수 중 더 큰 값을 구하고, 출력한다.

console.log(R);

// 크기 비교 함수
// 실행 결과
// 1
// 2
// 2
// ​
// 1
// 1
// null

function determine(x) {
  // 아래와 같은 기능을 수행하는 함수 determine 를 정의한다. // 1개의 매개변수 x 를 입력 받는다.
  if (x > 0) {
    // x 가 어떤 수 인지 판별하는 조건문을 작성한다.
    return 1; // 양수라면 1 을 반환한다.
  } else if (x < 0) {
    return -1; // 음수라면 -1 을 반환한다.
  } else {
    return 0; // 0이라면 0 을 반환한다.
  }
}

let num5 = -10; // 임의의 변수를 선언하고, 숫자형 값을 할당한다.

console.log(num5); // 변수를 출력한다.

let M = determine(num5); // 함수 determine 를 호출해서 변수가 어떤 수 인지 구하고, 출력한다.
console.log(M);

// 양수, 음수, 0
// 실행 결과
// 10
// 1
// ​
// 0
// 0
// ​
// -10
// -1

function maxNumber(arr) {
  // 배열에서 가장 큰 값을 찾는 함수 maxNumber 를 정의한다. // 1개의 매개변수 arr 를 입력 받는다.
  let max = -Infinity; // 가장 큰 값을 저장할 변수 max 를 선언하고, -Infinity 를 할당한다.
  for (let i = 0; i < arr.length; i++) {
    // 변수 arr 를 순회하는 반복문을 작성한다.
    if (arr[i] > max) {
      max = arr[i]; // 원소가 max 보다 크면 max 를 갱신한다.
    }
  }
  return max; // 변수 max 를 반환한다.
}

let N = [10, 25, 36, 99, 58]; // 임의의 변수를 선언하고 숫자형 값 5개를 저장한 배열을 생성해서 할당한다.

console.log(N); // 변수를 출력한다.

let B = maxNumber(N); // 함수 maxNumber 를 호출해서 배열에서 가장 큰 수를 구하고, 출력한다.

console.log(B);

// 가장 큰 값
// 실행 결과
// [ 10, 25, 36, 99, 58 ]
// 99

function minNumber(arr) {
  // 배열에서 가장 작은 값을 찾는 함수 minNumber 를 정의한다.
  let min = Infinity; // 임의의 변수를 선언하고, 숫자형 값을 저장한 배열을 생성하고 할당한다
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

N = [10, 25, 36, 99, 58];

console.log(N);

B = minNumber(N);

console.log(B); // 변수를 출력한다.함수 minNumber 를 호출해서 배열에서 가장 작은 수를 구하고, 출력한다.

// 가장 작은 값
// 실행 결과
// [ 10, 25, 36, 99, 58 ]
// 10

function evenNumber(arr) {
  // 배열에서 짝수인 값을 찾는 함수 evenNumber 를 정의한다.// 1개의 매개변수 arr 를 입력 받는다.
  let new_arr = []; // 변수 new_arr 를 선언하고, 빈 배열을 할당한다.
  for (i = 0; i < arr.length; i++) {
    // 변수 arr 를 순회하는 반복문을 작성한다.
    if (arr[i] % 2 === 0) {
      // 원소가 짝수면 변수 new_arr 에 추가한다.
      new_arr.push(arr[i]);
    }
  }
  return new_arr; // 변수 new_arr 를 반환한다.
}

N = [10, 25, 36, 99, 58]; // 임의의 변수를 선언하고 숫자형 값 5개를 저장한 배열을 생성해서 할당한다.

console.log(N); // 변수를 출력한다.

B = evenNumber(N); // 함수 evenNumber 를 호출해서 짝수만 저장된 배열을 구하고, 출력한다.

console.log(B);

// 짝수
// 실행 결과
// [ 10, 25, 36, 99, 58 ]
// [ 10, 36, 58 ]
