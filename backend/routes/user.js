const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/userController');

// req.body 는 get 방식에서 사용 못 함
router.post('/register', registerUser);

module.exports = router;
