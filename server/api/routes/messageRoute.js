const express = require('express')
const messageController = require("../controllers/messageController");
const router = express.Router();

router.get('/', messageController.listAllMessages)
router.post('/', messageController.createAMessage)

module.exports = router;