const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql `
  type Post {
    id: ID!
    title: String
    author: String
  }
  type Query {
    posts: [Post]
  }
  type Mutation {
    create_Post(id: ID!, title: String, author: String): [Post]
    update_Post(id: ID!, title: String, author: String): [Post]
    delete_Post(id: ID!): [Post]
  }
`;

let posts = [{
        id: 1,
        title: "The Call of the Wild",
        author: "Jack London",
    },
    {
        id: 2,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
    },
    {
        id: 3,
        title: "The Woman who Disappeared",
        author: "Philip Prowse",
    },
];

const resolvers = {
    Query: {
        posts: () => posts,
    },

    Mutation: {
        create_Post: (_, { id, title, author }) => {
            let newPost = { id, title, author };
            posts.push(newPost);
            return posts;
        },

        update_Post: (_, { id, title, author }) => {
            let editPost = posts.map((Post) => {
                if (Post.id == id) {
                    Post.title = title;
                    Post.author = author;
                }

                return Post;
            });

            return editPost;
        },

        delete_Post: (_, { id }) => {
            posts = posts.filter((post) => post.id != id);
            return posts;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
});

// Listen method to lunch the web server:-
server.listen().then(({ url }) => {
    console.log(`😎 The Server is available on ${url}`);
});