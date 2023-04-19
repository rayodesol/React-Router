import React from 'react';
import styled from 'styled-components';

const MyButton = styled.a`
  /* 가상 요소 선택자로 그림자 같은 거 만들기 */
  position: relative;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.2em;
  padding: 1.25em 2em;
  /* props 값으로 설정. 콜백 형태 사용. */
  background-color: ${(props) => props.mainColor};
  border: 2px solid ${(props) => props.subColor};
  border-radius: 0.75em;
  user-select: none;
  transition: transform 0.15s ease-out; /* ease-out ; 빨랐다가 느려지는 속성 */
  transform-style: preserve-3d;
  margin-top: 1em;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${(props) => props.subColor};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${(props) => props.subColor};
    transform: translate3d(0, 0.75em, -1em);
  }
  &:hover {
    background-color: ${(props) => props.hoverColor};
    transform: translateY(0.25em);
  }
`;

// props 여러 개 받아옴
export default function Button({
  text,
  clickEvent,
  mainColor,
  subColor,
  hoverColor,
}) {
  return (
    <MyButton
      onClick={clickEvent}
      mainColor={mainColor}
      subColor={subColor}
      hoverColor={hoverColor}
    >
      {text}
    </MyButton>
  );
}
