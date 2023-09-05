const express = require('express')
const cors = require("cors")
const messageRoute = require("./api/routes/messageRoute");
const mongoose = require('mongoose')
const port = 3001
const server = express()

server.use(cors())
server.use(express.json())

server.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose.connect(process.env.ME_CONFIG_MONGODB_URL)

server.use('/messages', messageRoute)

server.listen(port, () => {
console.log(`Example app listening on port ${port}`)
console.log(process.env.ME_CONFIG_MONGODB_URL)
})