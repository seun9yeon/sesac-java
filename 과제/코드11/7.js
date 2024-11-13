// 변수 x 선언 및 임의의 숫자 할당
const x = 5; // x라는 변수를 선언하고 값을 5로 설정
console.log(x); // 값을 출력 // 콘솔에는 5가 출력된다 log는 함수

// 배열 선언
const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// x보다 큰 값만 새로운 배열에 추가
const greaterThanX = arr.filter(num() => num > x); 
//arr.filter()메서드를 사용하여 arr배열의 각 요소를 검사합니다.
//num은 배열의 각 요소를 나타내며, 화살표 함수에서 num > x 조건을 확인
//x는 5이므로, num이 5보다 큰 경우에만 해당 요소가 새로운 배열 greaterThanX에 포함된다.
console.log(greaterThanX);
