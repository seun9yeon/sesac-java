// 객체 선언
let person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

// 객체의 키와 값을 출력하는 for...in 반복문
for (let key in person) {
  console.log(`${key}, ${person[key]}`);
}
