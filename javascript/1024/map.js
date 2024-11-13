//foreach, map. 메소드 어떻게 동작하는지 이해
let numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
  console.log(num); // 1, 2, 3, 4
});
//numbers 배열에 forEach 메서드를 호출
//forEach함수는 배열의 각 요소를 console.log에 전달
//결과는 1,2,3,4 출력
//*자주사용하는 반복문을 함수로 만들었다.*
//forEach()

numbers = [1, 2, 3, 4];

let doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]
//map()

numbers = [1, 2, 3, 4];

evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
//filter()
