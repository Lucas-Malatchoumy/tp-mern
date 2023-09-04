const express = require('express')
const cors = require("cors")
const port = 3001

const server = express()
server.use(cors())
server.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

server.get('/', (req, res) => {
    res.send("Hello worldddd");
  });

server.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})