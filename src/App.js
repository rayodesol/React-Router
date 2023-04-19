import React from 'react';
// import styled from 'styled-components';
// import Start from './pages/Start';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
// import Mbti from './pages/Mbti';
// import Show from './pages/Show';

// // 중앙정렬. 어느정도 모바일에서도 커버됨.
// const Main = styled.main`
//   box-sizing: border-box;
//   width: 100%;
//   max-width: 500px;
//   padding: 0 35px;
//   margin: auto;
//   text-align: center;
// `;

function App() {
  // 로그인/회원가입 때문에
  const isLogin = useSelector((state) => state.user.isLogin);

  // // 페이지 받아오기
  // const page = useSelector((state) => state.mbti.page); // mbti 스토어 있는 page
  // const survey = useSelector((state) => state.mbti.survey);

  return (
    <>
      <GlobalStyle />
      {/* react app 키면 바로 보일 수 있는 기본 주소 "/". {} 안에 삼항연산자 사용 가능(JSX 문법) */}
      {/* 로그인 되어 있는 여부에 따라 뜨는 컴포넌트 다름 */}
      <Routes>
        <Route path="/" element={isLogin ? <Main /> : <Login />} />
      </Routes>

      {/* <Main>
        {page === 0 ? <Start /> : page <= survey.length ? <Mbti /> : <Show />}
      </Main> */}
    </>
  );
}

export default App;
