import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo'; // 스니펫 활용 - create, done 만 치고 엔터 치면 나옴

export default function TodoList() {
  // useSelector 로 할 일 목록 받아오기
  // state 는 모든 reducer 가 합쳐진 combineReducers 에 접근
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch(); // 우편 배달부. 액션 생성 함수만 전달 가능.

  const inputRef = useRef();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(
              create({ id: todoList.length, text: inputRef.current.value }),
            );
            inputRef.current.value = '';
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </section>
  );
}
