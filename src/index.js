import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // 이게 있어야 store 를 App.js 에 적용 가능.
// import { createStore } from 'redux'; // 예전에 쓰던거라 취소선이 생김.

// store 폴더 관련
// import combineReducer from './store'; // './store/index' 에서 index 생략 가능

import rootReducer from './store';
import { configureStore } from '@reduxjs/toolkit';

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({ reducer: rootReducer }, reduxDevTool);

// const rootReducer = createStore(combineReducer, reduxDevTool);
// console.log(rootReducer.getState());

// 실습 - 4/4 Redux //////////////////////////////////////////////////////
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

const weightEx = 100;
const date = new Date();

function reducerEx(state = weightEx, action) {
  if (action.type === '찌기') {
    state += date.getDate();
    return state;
  } else if (action.type === '빼기') {
    state -= date.getMonth() + 1;
    return state;
  } else {
    return state;
  }
}

// let storeEx = createStore(reducerEx);
// ///////////////////////////////////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* 실습 - 4/4 Redux */}
    {/* <Provider store={storeEx}> */}

    {/* <Provider store={rootReducer}> */}

    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
);

reportWebVitals();
