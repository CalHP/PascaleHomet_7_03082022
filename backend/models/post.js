const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] }, // tableau userId qui ont aimé le post
  usersDisliked: { type: [String] }, // tableau userId quin'ont pas aimé le post
  created_at: { type: Date, default: new Date()},
});

module.exports = mongoose.model("Post", postSchema);
