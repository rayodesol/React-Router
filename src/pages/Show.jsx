import React, { useEffect } from 'react';
import styled from 'styled-components';
import PinkButton from '../components/PinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 2.4em; // 강사님 코드는 3em
`;

const Explanation = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;

const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;

const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px); // padding 값 때문에 밀리는거 다시 돌려놓기
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanation[result]);

  const dispatch = useDispatch();

  // 함수 표현식으로. this가 바인딩되지 않음.
  // post 방식이므로 method 걸어줘야.
  const incCount = async () => {
    const resIncCount = await fetch('http://localhost:4000/data/inccount', {
      method: 'POST',
    });
    if (resIncCount.status === 200) {
      console.log(await resIncCount.json());
    } else {
      console.log(await resIncCount.json());
    }
  };

  // 데이터를 업데이트 하기 위함.
  useEffect(() => {
    incCount();
  }, []);

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explanation>{explanation.text}</Explanation>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어 보세요!</Additional>
      <AdditionalImg src={explanation.img} alt="팩폭" />
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
