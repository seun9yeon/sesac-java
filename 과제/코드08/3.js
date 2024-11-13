// 변수 todos 선언 및 빈 배열 할당
let todos = [];

// 객체 3개 생성 및 todos 배열에 추가
todos.push(
  { todoId: 1, content: '예습하기', isCompleted: false },
  { todoId: 2, content: '강의듣기', isCompleted: false },
  { todoId: 3, content: '복습하기', isCompleted: false }
);

// todoId가 2인 객체만 출력하는 조건문
for (let todo of todos) {
  if (todo.todoId === 2) {
    console.log(todo);
  }
}