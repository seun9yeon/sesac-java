// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num = 1; num <= 9; num++) {
//   console.log(num * 3);
// }

// nums가 다음과 같을 때, 구구단 3단을 출력하시오
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const names = ['jun', 'beemo', 'ken', 'lynda'];

// //  let index = 0
// //  while (index <=) {

// //  }

// let i = 0;

// while (i < names.length) {
//   console.log('${i+1}번 $names[i]');
//   i++;
//   console.log(name[i]);
// }

// names.forEach(name => {
//     console.log(name);
// });

// 출석번호를 포함하여 '1번 jun', ..., '4번 lynda'의 형태로 출석을 부르시오.
// const names = ['jun', 'beemo', 'ken', 'lynda']

const names = ['jun', 'beemo', 'ken']
const ages = [18, 28, 37]

//
// 18살 jun
// 28살 beemo
// 37살 ken
// 을 출력하시오.

// 주어진 리스트의 길이를 계산하시오
// const names = ['jun', 'beemo', 'ken', 'lynda']

// 주어진 리스트의 합계를 계산하시오
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 주어진 리스트에서 최소값을 찾으시오
// const nums = [10, 6, 8, 5, 4, 2, 3, 11]

// 주어진 리스트의 순서를 뒤집으시오
// const nums = [10, 6, 8, 5, 4]

// // 결과

// const reversedNum = [4, 5, 8, 6, 10]

//설치방법
//terminal에서 실행
// $ npm i -g npm
// $ npm i --save lodash

const _ = require('lodash');

console.log(_.sum([1, 2, 3, 4, 5]));
console.log(_.shuffle([1, 4, 6, 8, 0]));
