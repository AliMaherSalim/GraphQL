const { ApolloServer, gql } = require('apollo-server');
const path = require('path');
const fs = require('fs');
const resolvers = require('./resolvers/index');

const PostDataSource = require('./dataSources/post.datasource');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/graphQlTask2');

const schemaData = fs.readFileSync(path.join(__dirname, 'schema.graphql'), {
  encoding: 'utf8',
});
const typeDefs = gql(schemaData);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ posts: new PostDataSource() }),
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
