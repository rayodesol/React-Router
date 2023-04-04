// 몸무게 관리하는 store

// // 수업 코드
const weight = 100;

// 2번째 인자는 무조건 action. 문자열 형태로 받음.
export default function weightReducer(state = weight, action) {
  if (action.type === '증가') {
    state += 1;
    return state;
  } else if (action.type === '감소') {
    state -= 1;
    return state;
  } else {
    // 값 그대로 리턴
    return state;
  }
}
