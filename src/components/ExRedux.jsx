import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ExRedux() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>실습 - 4/4 Redux</h1>
      <h2>몸무게는 {weight}kg 입니다!</h2>

      <button onClick={() => dispatch({ type: '찌기' })}>살 찌기</button>
      <button onClick={() => dispatch({ type: '빼기' })}>살 빼기</button>
    </>
  );
}
