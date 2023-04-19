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
  buyList: ['닌텐도', '자동차'],
  todoListCount: 3,
};

let counts = initState.todoList.length;
initState['nextID'] = counts; // initState.nextID 이렇게도 가능. initState['nextID'] 방법이 ... 때문에 더 좋음..?

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
        ...state, // 이걸 안 하면 todoList 외의 데이터는 지워짐! 꼭 써야.

        // concat ; 인자로 전달된 값을 todoList 마지막에 추가해주는 함수
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.text,
        //   done: false,
        // }),

        // concat 안 쓰고 전개 연산자로 작성하는 법
        todoList: [
          ...state.todoList, // todoList 를 카피해서 뿌리는 것
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],

        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        todoList: state.todoList.map((el) => {
          if (el.id === action.id) {
            return {
              ...el, // el의 나머지 애들은 그대로 유지
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
