import express from 'express'
const router = express.Router();
import messageModel from '../models/message.schema';
router.post('/postMessage', (req, res) => {
    try {
        const { userSendMessage, userReceiveMessage, message } = req.body;
        const message_ = new messageModel({
            createAt:new Date(),
            message:message,
            userReceiveMessage:userReceiveMessage,
            userSendMessage:userSendMessage
        });
        message_.save();
        res.json({ sucess: true, message: 'todo bien' });
    } catch (error:any) {
        res.json({ sucess: false, message: error.message });
    }
    res.end();
});

module.exports = router;