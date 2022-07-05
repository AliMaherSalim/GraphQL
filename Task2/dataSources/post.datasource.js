const { DataSource } = require('apollo-datasource');

const { Post } = require('../model/post.model');

class PostDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  createPost(input) {
    return Post.create(input);
  }

  async getPosts() {
    const posts = await Post.find();
    return posts;
  }

  async getAPost(id) {
    // console.log(id);
    const post = await Post.findById(id);
    // console.log(post);
    return post;
  }

  async updatePost(data) {
    const postId = data.id;

    // console.log(data.id);

    await Post.updateOne(
      { _id: postId },
      {
        $set: {
          ...data,
          author: data.author,
          comment: data.comment,
          title: data.title,
        },
      }
    );

    return Post.findById(postId);
  }

  async deletePost(id) {
    const deletedPost = await Post.findById(id);

    await Post.deleteOne({ _id: id });

    return deletedPost;
  }
}

module.exports = PostDataSource;
