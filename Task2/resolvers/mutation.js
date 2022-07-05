const Mutation = {
  createPost: (_, data, context) => {
    // console.log(data);
    // console.log(context.dataSources.posts.createPost);
    return context.dataSources.posts.createPost(data);
  },

  updatePost: (_, data, context) => {
    return context.dataSources.posts.updatePost(data);
  },

  deletePost: (_, { id }, context) => {
    // console.log(id);
    return context.dataSources.posts.deletePost(id);
  },
};

module.exports = Mutation;
