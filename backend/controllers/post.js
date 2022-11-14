const Post = require("../models/post");
const fs = require("fs");

/* Récupération de tous les posts */
exports.getAllPosts = (req, res, next) => {
  Post.find()
    .populate("user")
    .sort({ _id: -1 })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => res.status(400).json({ error }));
};

/* Récupération d'un seul post' */
exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

/* Création d'un post */
exports.createPost = (req, res, next) => {
  const post = new Post({
    ...req.body,
    user: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  post.save().then((post) => {
    Post.findOne(post._id)
      .populate("user")
      .then((newpost) => {
        res.status(201).json({ message: "Post enregistré", post: newpost });
      })
      .catch((error) => {
        res.status(400).json({ error });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  });
};

/* Modification d'un post */
exports.modifyPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete postObject._userId;
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.user != req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        if (postObject.imageUrl) {
          const filename = post.imageUrl.split("/images/")[1];
          fs.unlink(`images/${filename}`, (err) => {
            if (err) throw err;
            console.log("image supprimée : " + `${filename}`);
          });
        }

        Post.updateOne({ _id: req.params.id }, { ...postObject })
          .then(() => res.status(200).json({ message: "Objet modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

/* Suppression d'un post */
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (req.auth.role === true) {
        const filename = post.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Post.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "Objetsupprimé !" });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      } else if (post.user != req.auth.userId) {
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

/* Traitement des likes et dislikes */
exports.likeOrDislike = (req, res, next) => {
  let like = req.body.like;
  const userId = req.auth.userId;
  const postId = req.params.id;

  if (like === 1) {
    Post.findOne({ _id: postId })
      .then((post) => {
        if (!post.usersLiked.includes(userId)) {
          Post.updateOne(
            { _id: postId },
            { $inc: { likes: +1 }, $push: { usersLiked: userId } }
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
            { _id: postId },
            { $inc: { dislikes: +1 }, $push: { usersDisliked: userId } }
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
            { $inc: { likes: -1 }, $pull: { usersLiked: userId } }
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
            { $inc: { dislikes: -1 }, $pull: { usersDisliked: userId } }
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
