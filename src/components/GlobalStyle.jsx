import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face{
  font-family:'bitbit';
  src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
}

  body {
    font-family:'bitbit';
    padding-top: 1em;
    white-space: pre-wrap; // 띄어쓰기 여러 번 해도 1자리만 띄기
    text-align: center;
  }

  ul, ol {
    list-style: none;
    padding-left: 0px;
  }
`;

export default GlobalStyle;
