import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/">홈 페이지로 이동</Link>
            {/* a 태그를 클릭하면 주소가 변경됨 / a 태그를 쓰면 페이지가 깜박거림 */}
            {/* <a href="/profile">프로필 페이지로 이동</a> */}
          </li>
          <li>
            <Link to="/profile">프로필 페이지로 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지로 이동</Link>
          </li>
          <li>
            <Link to="/exRedux">Redux 실습 페이지로 이동</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
