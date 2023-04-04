// 특정 폴더 안의 index.js 파일은 해당 폴더 안의 모듈 총괄
// 이 폴더(store)를 관리

import { combineReducers } from 'redux';
import todo from './modules/todo';
import weightReducer from './modules/weight';

// 객체로 받은 reducer 들을 하나로 합쳐 빼주는.
export default combineReducers({
  todo,
  weightReducer,
});
