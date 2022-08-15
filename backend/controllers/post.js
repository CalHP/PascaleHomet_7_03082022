const Post = require("../models/post");
const fs = require("fs");

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(404).json({ error }));
};

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  delete postObject._userId;
  const post = new Post({
    ...postObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  post
    .save()
    .then(() => {
      res.status(201).json({ message: "Post enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.modifyPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete postObject._userId;
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId != req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        Post.updateOne(
          { _id: req.params.id },
          { ...postObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Objet modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId != req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        const filename = post.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Post.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "Objetsupprimé !" });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.likeOrDislike = (req, res, next) => {
  const like = req.body.like;
  const userId = req.body.userId;
  const postId = req.params.id;

  if (like === 1) {
    Post.findOne({ _id: postId })
      .then((post) => {
        if (!post.usersLiked.includes(userId)) {
          Post.updateOne(
            { _id: postId },
            { $inc: { likes: +1 }}
          )
            .then((post) => res.status(200).json({ message: "Like ajouté !" }))
            .catch((error) => res.status(400).json({ error }));
        }
      })
      .catch((error) => res.status(400).json({ error }));
  } else if (like === -1) {
    Post.findOne({ _id: postId })
      .then((post) => {
        if (!post.usersDisliked.includes(userId)) {
          Post.updateOne(
            { _id: sauceId },
            { $inc: { dislikes: +1 } }
          )
            .then((post) =>
              res.status(200).json({ message: "Dislike ajouté !" })
            )
            .catch((error) => res.status(400).json({ error }));
        }
      })
      .catch((error) => res.status(400).json({ error }));
  } else {
    Post.findOne({ _id: postId })
      .then((post) => {
        // Si le tableau "userLiked" contient l'ID de l'utilisateur
        if (post.usersLiked.includes(userId)) {
          // On enlève un like du tableau "userLiked"
          Post.updateOne(
            { _id: postId },
            { $inc: { likes: -1 }}
          )
            .then((post) => {
              res.status(200).json({ message: "Like supprimé !" });
            })
            .catch((error) => res.status(400).json({ error }));
        } else if (post.usersDisliked.includes(userId)) {
          // Si le tableau "userDisliked" contient l'ID de l'utilisateur
          // On enlève un dislike du tableau "userDisliked"
          Post.updateOne(
            { _id: postId },
            { $inc: { dislikes: -1 }}
          )
            .then((post) => {
              res.status(200).json({ message: "Dislike supprimé !" });
            })
            .catch((error) => res.status(400).json({ error }));
        }
      })
      .catch((error) => res.status(400).json({ error }));
  }
};
