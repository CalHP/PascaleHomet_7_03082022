const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const getUsers = require('../controllers/user')

router.post('/signin', userCtrl.signin);
router.post('/login', userCtrl.login);
router.get('/',getUsers.getAllUsers);

module.exports = router;