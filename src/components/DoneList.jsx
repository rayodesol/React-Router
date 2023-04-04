import React from 'react';
import { useSelector } from 'react-redux';

export default function DoneList() {
  // 할 일 목록 받아오기
  const todoList = useSelector((state) => state.todo.todoList);

  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {todoList.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </section>
  );
}
