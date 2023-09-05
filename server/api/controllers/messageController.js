const Message = require("../models/messageModel");

exports.listAllMessages = (req, res) => {
  Message.find()
  .then((messages) => {
    res.status(200)
    res.json(messages)
  })
  .catch((error) => {
    console.log(error);
    res.json({message: "Can't get messages"})
  })
}

exports.createAMessage = (req, res) => {
  console.log(req.body);
  let newMessage = new Message(req.body);
  newMessage.save()
  .then((message) => {
    res.status(200)
    res.json(message)
    return
  })
  .catch((error) => {
    res.status(401)
    console.log(error);
    res.json({ message: "Invalid request" });
  })
  }
