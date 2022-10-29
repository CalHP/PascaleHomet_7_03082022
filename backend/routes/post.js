const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

//router.options('/:id', cors());
// Affichage de tous les posts
router.get('/',postCtrl.getAllPosts);
// Affichage d'un seul post
router.get('/:id',postCtrl.getOnePost);
// Création d'un post
router.post('/',auth, multer, postCtrl.createPost);
// Modification d'une saisie  
router.put('/:id', auth,multer, postCtrl.modifyPost);
// Suppression d'une saisie
router.delete('/:id',auth, postCtrl.deletePost);  
// Ajout suppression like dislike
router.post('/:id/like', auth, postCtrl.likeOrDislike)

module.exports = router;