import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../store/modules/user';

export default function Login() {
  const registerIdInput = useRef();
  const registerPwInput = useRef();

  const dispatch = useDispatch();

  const registerUser = async () => {
    // 입력된 값이 있는지 확인. 하나라도 없으면 alert 창 뜨게.
    if (!registerIdInput.current.value || !registerPwInput.current.value)
      return alert('필수 값을 입력해 주세요');

    // 2) axios 로 보내기
    const resRegister = await axios.post(
      'http://localhost:4000/user/register',
      {
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      },
    );

    console.log(resRegister);

    if (resRegister.status !== 200) return alert(resRegister.data);

    alert(resRegister.data);
    dispatch(
      login({
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      }),
    );

    // // 1) fetch 로 보내기
    // const resRegister = await fetch('http://localhost:4000/user/register', {
    //   // 이 안에 req.body 담을 수 있음
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // req.body 로 받아줌. json 형태로 변경해서 body에 담음.
    //   body: JSON.stringify({
    //     id: registerIdInput.current.value,
    //     password: registerPwInput.current.value,
    //   }),
    // });

    // // 문제가 있을 때
    // if (resRegister.status !== 200) return alert(await resRegister.json());

    // // 로그인 처리까지 여기서 할 것임. redux 로 처리.;(
    // alert(await resRegister.json()); // '회원 가입 성공'이 뜰 것임
    // dispatch(
    //   login({
    //     id: registerIdInput.current.value,
    //     password: registerPwInput.current.value,
    //   }),
    // );
  };

  return (
    <>
      {/* 로그인 파트 */}
      <h1>로그인 파트입니다</h1>
      아이디 : <input type="text" />
      <br />
      <br />
      비밀번호 : <input type="password" />
      <br />
      <br />
      <button>로그인</button>
      {/* 카카오가 지정한 ...로 주소 요청을 보내야 돼서 Link 사용 */}
      <Link to="">카카오 로그인</Link>
      <br />
      <br />
      {/* 회원가입 파트 */}
      <h1>회원 가입 파트입니다</h1>
      아이디 : <input type="text" ref={registerIdInput} />
      <br />
      <br />
      비밀번호 : <input type="password" ref={registerPwInput} />
      <br />
      <br />
      <button onClick={registerUser}>회원 가입</button>
      <br />
      <br />
    </>
  );
}
