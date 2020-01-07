const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./generated/Mutation');
const Query = require('./generated/Query');
const db = require('./db');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolver: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }),
  })
}

module.exports = createServer;