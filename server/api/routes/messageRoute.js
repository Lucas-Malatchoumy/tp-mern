module.exports = (server) => {
    const messageController = require("../controllers/messageController");
    server.route("/messages")
    server.get(messageController.listAllMessages)
    server.post(messageController.createAMessage)
  };