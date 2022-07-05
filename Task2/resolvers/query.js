const Query = {
  posts: (_, args, context) => {
    // console.log(context.dataSources.posts.getPosts);
    return context.dataSources.posts.getPosts();
  },

  onePost: (_, { id }, context) => {
    // console.log(context.dataSources.posts.getPost);
    // console.log(id);
    return context.dataSources.posts.getAPost(id);
  },
};

module.exports = Query;
