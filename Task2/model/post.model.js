const mongoose = require('mongoose');

const Post = new mongoose.Schema(
  {
    title: String,
    author: String,
    comment: String,
  },
  { timestamps: true }
);

module.exports.Post = mongoose.model('Post', Post);
