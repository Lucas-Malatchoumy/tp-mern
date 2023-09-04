const Message = require("../models/messageModel");

exports.listAllMessages = (req, res) => {
  Message.find({}, (error, messages) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Erreur serveur." });
    } else {
      res.status(200);
      res.json(messages);
    }
  });
};

exports.createAMessage = (req, res) => {
  let newMessage = new Message(req.body);

  randomTextPromise.then((response) => {
    if (!newMessage.content) {
      newMessage.content = response;
    }

    newMessage.save((error, message) => {
      if (error) {
        res.status(401);
        console.log(error);
        res.json({ message: "Reqûete invalide." });
      } else {
        res.status(200);
        res.json(message);
        return;
      }
    });
  });
};
