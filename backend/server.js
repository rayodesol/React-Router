const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

// 라우터 연결
const dataRouter = require('./routes/data');
const userRouter = require('./routes/user');
server.use('/data', dataRouter); // localhost:4000/data 주소는 dataRouter가 다 처리
server.use('/user', userRouter);

server.listen(PORT, () => {
  console.log(`데이터 통신용 서버가 ${PORT} 번에서 실행 중입니다!`);
});
