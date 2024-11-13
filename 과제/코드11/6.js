// 배열 선언
const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 마지막 홀수 찾기
let lastOdd;

for (const num of arr.reverse()) { //arr.(arr의)reverse 배열의 메서드를 거꾸로 만든다
  if (num % 2 !== 0) { //for...of 문을 사용하여 배열의 각 요소를 num이라는 변수에 저장
    lastOdd = num; //num이 홀수인지 확인 홀수로 2로 나눴을 때 나머지가 1
    break; //조건이 참이면 lastodd 변수에 홀수 값 저장, break로 반복문 종료
  }
}

console.log(lastOdd); //lastodd를 콘솔에 출력 
// 이 값은 배열에서 마지막으로 나타나는 홀수
