import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TestRedux() {
  // state 는 모든 reducer 가 합쳐진 combineReducers
  // state.weightReducer ; 객체 안의 weightReducer 로 받아야
  const weight = useSelector((state) => state.weightReducer); // 받아온 값을 변경없이 바로 리턴하는.
  const dispatch = useDispatch(); // 우편배달부 고용

  return (
    <>
      <h1>당신의 몸무게는 {weight}kg 입니다!</h1>

      {/* type 키에 넣어서 보내야 */}
      <button onClick={() => dispatch({ type: '증가' })}>증가</button>
      <button onClick={() => dispatch({ type: '감소' })}>감소</button>
      <Link to="/test">리덕스로 이동</Link>
    </>
  );
}
