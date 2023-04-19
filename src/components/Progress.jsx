import React from 'react';
import styled from 'styled-components';

const MyProgress = styled.div`
  margin-top: 3em;
`;

const Fill = styled.div`
  width: 100%;
  height: 10px;
  background-color: #777;
  margin-top: 1em;
  text-align: left; // 게이지가 왼쪽부터 차오르게 하기 위해
`;

const Gauge = styled.div`
  background-color: skyblue;
  display: inline-block;
  height: inherit;
  position: relative;
  top: -3.5px;
  width: ${(props) => props.percent}%;
`;

export default function Progress({ page, maxPage }) {
  return (
    <MyProgress>
      <div>
        {page} / {maxPage}
      </div>
      <Fill>
        <Gauge percent={(page / maxPage) * 100} />
      </Fill>
    </MyProgress>
  );
}
