const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const getUsers = require('../controllers/user')

// Création d'un utilisateur
router.post('/signin', userCtrl.signin);
// Connexion d'un utilisateur déjà inscrit
router.post('/login', userCtrl.login);

// router.get('/',getUsers.getAllUsers);

module.exports = router;