// 특정 폴더 안의 index.js 파일은 해당 폴더 안의 모듈 총괄
// 이 폴더(store)를 관리

import { combineReducers } from 'redux';
import todo from './modules/todo';
import weight from './modules/weight';
import mbti from './modules/mbti';
import user from './modules/user';

// 총 4개의 store 를 합쳐서 사용
// 객체로 받은 reducer 들을 하나로 합쳐 빼주는.
export default combineReducers({
  todo,
  weight,
  mbti,
  user,
});
