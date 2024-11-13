let num = 1;

while (num < 9 + 1) {
  console.log();
  num++;
}

let num2 = 2;

while (true) {
  console.log(num2);
  num2 += 2;

  //10일때 멈춰.
  if (num === 10) {
    break;
  }
}

// while :
// condition이 true이면 계속 진행
// condition이 false이면 멈춰
// condition에는 반드시 변수가 필요함
// condition이 언젠가 바뀌어야 하기 때문
// while문의 body안에서 변수가 바뀌고,
// 바뀌면서 언젠가는 false로 변함.

//for (초기화; 조건식; 증감식){}

for (let num = 1; num <= 9; num++) {
  console.log(num);
}

const arr = [2, 3, 5, 1, 3];

// arr가 텅 빌 때까지 el를 출력하고 싶어요.

// el = arr.pop()
// // el 출력하자.

while (arr.length) {
  el = arr.pop;
  console.log(el);
}

if ([]) {
  console.log('빈 arry도 true다.');
}


people = {
 
}