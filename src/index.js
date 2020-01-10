require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO handle cookies, curr user

server.start({
  cors: {
    credentials: true,
    // origin: process.env.FRONTEND_URL,
    origin: "http://localhost:7777"
  },
}, details => {
  console.log(`Server is running on port ${details.port}`);
});
