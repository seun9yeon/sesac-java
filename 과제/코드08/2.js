// 변수 todos 선언 및 빈 배열 할당
let todos = [];

// 객체 3개 생성 및 todos 배열에 추가
todos.push(
  { todoId: 1, content: '예습하기', isCompleted: false },
  { todoId: 2, content: '강의듣기', isCompleted: false },
  { todoId: 3, content: '복습하기', isCompleted: false }
);

// todos 배열의 각 객체의 content와 isCompleted를 출력하는 반복문
for (let todo of todos) {
  console.log(`content: ${todo.content}, isCompleted: ${todo.isCompleted}`);
}
