const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  // endpoint: process.env.PRISMA_ENDPOINT,
  // why isn't my .env file getting used?
  endpoint: 'https://us1.prisma.sh/julian-kyer-2c3e2d/jaj-backend/dev',
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
