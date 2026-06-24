const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

async function startServer() {
  const app = express();

  const typeDefs = `#graphql
    type Query {
      message: String
    }
  `;

  const resolvers = {
    Query: {
      message: () => "Hello Apollo GraphQL 🚀",
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
  );

  app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
  });
}

startServer();