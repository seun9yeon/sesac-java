const nums = [1,2,3,4,5,6,7,8,9]
console.log()

// 3 * 1 = 3
// 3
// 3
// 3
// // 3 * num = 결과

for (let index in nums){
 const num = nums[index];
 console.log(`3 * ${num} = ${3 * num}`);
}
console.log('------------')
//array, string, set
//key 값을 활용하는 것이 아니라, 바로 value로 접근 가능
for (let num of nums) {
console.log(`3 * ${num} = ${3 * num}`);
}

//num가 다음과 같을 때, 구구단 3단을 출력하시오

names = ['jun', 'beemo','ken', 'lynda']

for (index in names) {
  let name = names[index];
  index++;
  // index = index + 1;
  // index += 1;
  console.log(index, name);
}

console.log(parseInt('1')+ 1);
console.log('1'+ 1);

//출석번호를 포함하여 '1번 jun', ,'4번 lynda'의 형태로 출석을 부르시오.

// # names = ['jun', 'beemo', 'lynda']
// # ages = [18, 28, 37] 일 때,
// # 18살
// # 28살
// # 37살
// # 을 출력하시오.
