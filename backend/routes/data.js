const express = require('express');
const router = express.Router();

const {
  setData,
  getData,
  getCounts,
  incCounts,
} = require('../controllers/dataController');

// 주소는 마음대로 설정 가능
router.post('/setdata', setData); // 데이터 변경을 요청하므로 post 로
router.get('/getdata', getData);

router.get('/getcount', getCounts);
router.post('/inccount', incCounts);

module.exports = router;
