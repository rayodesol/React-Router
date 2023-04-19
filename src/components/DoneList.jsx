import React from 'react';
import { useSelector } from 'react-redux';

export default function DoneList() {
  // 완료된 목록 받아오기
  const doneList = useSelector((state) => state.todo.todoList).filter(
    (el) => el.done === true,
  );

  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {doneList.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </section>
  );
}
