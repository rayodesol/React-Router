import React from 'react';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
  // const parmas = useParams();
  // console.log(parmas);

  // 구조 분해 할당 방법
  const { boardID } = useParams();

  return (
    <>
      {/* 주소의 파라미터 값 받기 */}
      {/* <h2>{parmas.boardID}번 게시글 내용입니다!</h2> */}
      <h2>{boardID}번 게시글 내용입니다!</h2>
    </>
  );
}
