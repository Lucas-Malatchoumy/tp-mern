const Message = require("../models/messageModel");
const logger = require("../../logger")

exports.listAllMessages = (req, res) => {
  Message.find()
  .then((messages) => {
    res.status(200)
    console.log('test')
    res.json(messages)
  })
  .catch((error) => {
    console.log(error)
    logger.error(error)
    res.json({message: "Can't get messages"})
  })
}

exports.createAMessage = (req, res) => {
  console.log(req.body);
  let newMessage = new Message(req.body);
  newMessage.save()
  .then((message) => {
    res.status(200)
    logger.info(message)
    res.json(message)
    return
  })
  .catch((error) => {
    res.status(401)
    console.log(error);
    logger.error(error)
    res.json({ message: "Invalid request" });
  })
}
