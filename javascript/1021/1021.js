let money = true;
let car = true;

// money car 조합해서 False가 나오도록.
// money car result
// T     T   F
// T     F   T
// F     T   T
// F     F   F

// XOR 라는 것은, OR는 OR인데, T - T 쌍인 경우를 제외한 것.

console.log((money || car) && !(money && car));

// if (money == true && car == true) {
// result = false
// } else if (money == true && car == false){
// result = true
// }

const score = 100;

if (score >= 90) {
  console.log('A');

  if (score === 100) {
    console.log('교수님의 총애');
  }
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
  if (score < 40) {
    console.log('학사경고');
  }
}

// if (score >= 90)
//  {조건이 true일 때 실행
// } else{
//   조건이 false일 때 실행
// }

// const isWeekend = true;
// const nowTime = 19;

// 주말 이거나 일과이후 => 휴식
// 주말의 일과 이후 => 자기개발
// 일과시간 -> 일

// 주말  일과시간
// (!일과시간 === 일과이후)
// 주말      일과시간
// ture     ture
// true     false
// false    ture

let workingHour;

// 9 ~ 18시에는 workingHour = true
// 아닐때는 workingHour = false

if (9 <= nowTime && nowTime <= 18) {
  isWorkingHour = ture;
} else {
  isWorkingHour = false;
}

let toDo;

if (isWeekend) {
  if (isWorkingHour) {
    toDo = '휴식';
  } else {
    toDo = '자기개발';
  }
} else {
  if (isWorkingHour) {
    toDo = '일';
  } else {
    todo = '휴식';
  }
}

for (변수 in Object) {
}

person['name'];
person['age'];
person['gender'];

for (key in person) {
  console.log(key);
  let value = person[key];
  console.log(value);
}
console.log();

//1. 하고 싶은 동작을 나열합니다.
//2. 규칙성을 찾습니다.
//3. 변화하는 규칙성을 container에 담습니다.
//4. container에서 하나씩 꺼내다가 하고 싶은 동작을 실행합니다.

// key : object의 키값

// for (let key in Object) {
//   여기에 있는 코드를 반복적으로 실행시킵니다.
//   단, key가 계속 변화합니다.

//   여기서 하고 싶은 것은 key를 반복적으로 할당하고,
//   그 key를 사용해서 어떤 코드를 실행하는 겁니다.
// }
