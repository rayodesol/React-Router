import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { useDispatch } from 'react-redux';
import { init, next } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: inherit; // 부모로부터 받아오기
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);

  const dispatch = useDispatch();

  async function fetchData() {
    // mbti 데이터 받아오는 코드
    const resMbtiData = await fetch('http://localhost:4000/data/getdata'); // 서버에 데이터 보낼 게 없고, 주소만 보내면 됨
    if (resMbtiData.status === 200) {
      // mbti 데이터 받기
      const mbtiData = await resMbtiData.json(); // json 을 객체로 변경하는 데 시간이 필요하므로 await
      if (mbtiData[0]) dispatch(init(mbtiData[0])); // 데이터가 비워져 있을 때만 데이터 넣기
    } else {
      // 리액트에 에러 띄워주는 방식. 보통은 404 페이지 띄우거나, alert 창 띄움.
      console.log(await resMbtiData.json());
    }

    // 방문자 수 받아오는 코드
    const resGetCounts = await fetch('http://localhost:4000/data/getcount');
    if (resGetCounts.status === 200) {
      // 통신 성공한 경우
      const countData = await resGetCounts.json();
      setCounts((cur) => countData.counts);
    } else {
      console.log(await resGetCounts.json());
    }
  }

  // 데이터를 받기 위함.
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header>👩🏻‍💻개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="MBTI 메인" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!{'\n\n'}
        {counts} 명이 참여해 주셨습니다.
      </SubHeader>
      <OrangeButton
        text="테스트 시작"
        clickEvent={() => dispatch(next())}
      ></OrangeButton>
    </>
  );
}
