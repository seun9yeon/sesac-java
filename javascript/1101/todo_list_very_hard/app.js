// API 베이스 URL
const URL = 'http://localhost:3000/todos';

// DOMContentLoaded : HTML 문서 로딩이 끝나면 실행되는 이벤트
// 페이지가 로드되면 Todo 목록 초기화 함수를 실행한다.
document.addEventListener('DOMContentLoaded', initTodos);
//////////////////
//상태변경
//완료 버튼을 눌렀을 때 => 취소선이 그어지고 / 취소선이 그어진 상태에서는 없어짐
//completed =? true / false 토글
//db에 반영



/////////////////////
async function initTodos() {
  //1. 데이터 가져오기 (fetch 이용)
  todos = fetchTodos();
  //2. 데이터 보여주기
 
    const todos = [
      {
        "id": 1,
        "content": "예습하기",
        "completed": false
      }, 
      {
        "id": 2,
        "content": "복습하기",
        "completed": false
      },

    ];
    renderTodos(todos);
  }
  ////////////////////////////
  // Todo 생성

  // 데이터의 관점
  // 데이터를 받아다가 db에 저장한다.

  // 사용자의 관점
  //1. 데이터를 입력한다
  //2. 추가 버튼을 누른다.
  // -> todo가 추가된다.

  //front의 관점
  //입력값을 받아다가 서버에 전달해서 사용자의 관점(입력을 받아서 추가버튼을 누르면)
  //데이터를 보여준다. 데이터관점(db에 저장을 시키고)
  //데이터를 rendering한다.

  // 버튼을 누르면 동작이 실행됨.
  const addButton = document.querySelector("#add-todo");
  addButton.addEventListener('click', addTodo);

  // completed 상태를 변경한다.
  async function patchTodo(value) {
    const { completed } = todo;

    //todo의 상태를 변경하고 싶다
    //URL // method / data
    const response = await fetch(URL + '/' + id)
    const data = await response.json()
    const {completed} =data

    const response = await fetch(URL + '/' + id, {
      method: 'PATCH'
      body: JSON.stringify({
        completed: !completed,
      }),
      headers: {
        'cont'
      }
    })
  }

  function addTodo() {
    const inputTag= document.querySelector('#todo-input')
    입력값이 뭐지? => 입력 태그에 입력된 값
    const value = inputTag.value;

    console.log(value);
  }

  // value를 가지고 db에 데이터를 저장하고 싶어.
  => URL,
  {
    method: 'POST',
    body: JSON.stringify({
      content: value,
      completed: false,

    })
  }
  //////////////////////////////


async function fetchTodos() {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
// todos를 입력받아 보여주기.
function renderTodos(todos) {
  todos.forEach((todo) => )
//   <li>
//   <span>todo의 컨텐트</span>
//   <button>완료</button>
//   <button>삭제</button>
// </li>
  //를 만들어다가
  //ul에 puch하고 싶다.
  const todoListTag = document.querySelector('#todo-list')

  todos.forEach((todo) => )
  const liTag = document.createElement('li');
  const { content } = todo; 
  spanTag.textContent = content;

  //span
  const spanTag = document.createElement('span');
  const { content } = todo;
  spanTag.textContent = content;
  if (completed) {
    spanTag.classList.add('completed')
  }
//complete
  const completedbutton = document.createElement('button');
   completedbutton.textContent = '완료'
  completedbutton.addEventListener('click',(e) => {
    //단순한 토글이 아니라, database의 patch가 성공하면 toggle해
    const data = patchTodo(todo);
    const {isCompleted} = data;
    if (isCompleted) {
      spanTag.classList.add('completed')
    } else {
      spanTag .classList.remove('completed')
    }

    let isCompleted = spanTag.classList.contains('completed')
    patchTodo(todo, isCompleted);
    spanTag.classList.toggle('complet');
  });

//
   const deletebutton = document.createElement('button');
   deletebutton.textContent = '삭제'
   deletebutton.addEventListener = ('click', async () => {
    const response = await deleteTodo(todo);
    response.text
    liTag.remove();
   });

   liTag.append(spanTag, completedButton, deleteButton)
   
}
