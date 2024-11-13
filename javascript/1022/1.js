// for (let num = 3; num <= 40; num += 3) {
//   console.log(num);
// }
// // 1번.40이하의 3의 배수를 출력하시오(3단의 확장).

// for (let num = 1; num <= 100; num++) {
//   if (num % 7) continue;
//   count++;
// }
// 2번. 1 ~ 100 중에 7의 배수의 개수를 출력하세요.

//const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];
//const notLogSet = new Set([1, 4, 5, 7]);

let num = 1;
// not log에 들어있나? 들어있으면 출력X
// 들어 있지 않은 것 체크하기 위해서는 모든 리스트를 봐야함
// 들어 있지 않은 경우를 체크하기 위해 한번만 체크함
// 모든 경우를 돌면서 한번이라도 만나면 걔는 들어있는 것

for (let num of arr) {
  let isInNotLog = false;

  for (let notLogNum of notLog) {
    if (num === notLogNum) {
      isInNotLog = true;
      break;
    }
  }
  if (isInNotLog) continue;
  console.log(num);
}

// for (let num of arr) {
//   // if (num set에 들어있어?) continue
//   if (notLogSet.has(num)) continue;

//   console.log(num);
// }
//3번. const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7] 일 때,
// 원소가  1, 4, 5, 7인 경우를 제외하고 출력하세요

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of arr) {
  console.log();
}

// 4번. 1 ~ 9 까지의 자연수 중 제곱한 수가 10 이상
//50 이하인 자연수의 리스트를 출력해보세요.

// count = 0;
// for (let num = 7; num <= 100; num += 7) {
//   count++;
// }

// count = Math.floor(100 / 7);
