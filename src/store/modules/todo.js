// 객체 안 프로퍼티 안에 배열로 선언
const initState = {
  todoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추 펴기',
      done: false,
    },
    {
      id: 2,
      text: '프로젝트 잘 마무리하기',
      done: false,
    },
  ],
};

// 액션 타입 정의하기
// todo 에 속한 action 들 / like 메뉴판
// 다른 store 의 action 생성 함수?타입?와 겹치지 않기 위해 소속된 곳 같이 씀
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// 액션 생성 함수 작성
// 필요할 때 불러 쓸 수 있게 default 는 아님.
// 인자의 payload 이름은 마음대로 설정 가능
export function create(payload) {
  return {
    type: CREATE, // 무슨 일을 할 건지
    payload, // payload: payload, 을 단축한 것
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// 액션 생성 함수를 받을 reducer
// 별다른 지정 없으면 todo.js 에서 이 부분이 나감.
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        // concat ; 인자로 전달된 값을 todoList 마지막에 추가해주는 함수
        todoList: state.todoList.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return console.log('DONE 호출');
    default:
      return state;
  }
}
