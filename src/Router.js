// App.js 백업 용 !!!
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import BoardDetail from './components/BoardDetail';
import Profile from './components/Profile';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from './components/Home';
import TestRedux from './components/TestRedux';
import ExRedux from './components/ExRedux';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <ListContainer />

      <br />
      <hr />
      <TestRedux />
      <hr />
      <Header />

      {/* 전반적인 룰을 감지. 주소 변경이 감지돼서 Route 한테 던져줌. */}
      <Routes>
        {/* 라우팅 룰 정의. 주소에 따라 보여질 컴포넌트가 달라짐. */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<TestRedux />} />
        <Route path="/board" element={<Board />} />
        {/* /board/ 뒤에 오는 파라미터 값을 boardID 란 이름으로 받겠다는 것. 어떤 키 값으로 받을지 꼭 적어야! */}
        <Route path="/board/:boardID" element={<BoardDetail />} />

        {/* 실습 - 4/4 Redux */}
        {/* <Route path="/exRedux" element={<ExRedux />} /> */}

        {/* 주소 예외 처리 - 위 주소가 아닌 경우는 NotFound 가 뜨도록 */}
        {/* 홈에서 NotFound 가 안 뜨려면 /home 이란 페이지를 만들던지, 위 Header 라우터 코드와 nav 를 각 컴포넌트에 넣던지 */}
        {/* / 주소일 때 Home 컴포넌트로 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
