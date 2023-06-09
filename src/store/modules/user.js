// 초기 상태
const initState = {
  userID: '',
  userPW: '', // 비밀번호는 redux에 절대 갖고 있으면 안됨. 이메일, 성별 정도는 가능.
  isLogin: false, // 로그인 되어있는지 여부
};

// 액션 타입 설정
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 액션 생성 함수. 바깥에서 사용하므로 export.
export function login(loginInfo) {
  // 바깥에서 정보를 받아와야.
  return {
    type: LOGIN,
    payload: loginInfo,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

// 리듀서 일해라. export default ; 이 파일을 import 하면 기본으로 나가는.
export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userID: action.payload.id,
        userPW: action.payload.password, // 데이터베이스 구상 시간이 없어 비밀번호도 이렇게 하는 중.
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        userID: '',
        userPW: '',
        isLogin: false,
      };
    default:
      return state;
  }
}
