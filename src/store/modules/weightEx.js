const weightEx = 100;
const date = new Date();

export default function reducerEx(state = weightEx, action) {
  if (action.type === '찌기') {
    state += date.getDate();
    return state;
  } else if (action.type === '빼기') {
    state -= date.getMonth() + 1;
    return state;
  } else {
    return state;
  }
}
