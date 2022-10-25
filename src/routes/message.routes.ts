import express from "express";
import { Types } from "mongoose";
import { Imessage } from "../interface/message.interface";
const router = express.Router();
import messageModel from "../models/message.schema";
router.post("/postMessage", async (req, res) => {
  try {
    const { userSendMessageId, userReceiveMessageId, message }: Imessage =
      req.body;
      const message_ = new messageModel({
        createAt: new Date(),
        message: message,
        userReceiveMessage: new Types.ObjectId(userReceiveMessageId),
        userSendMessage: new Types.ObjectId(userSendMessageId),
      });
      message_.save();
    res.json({ sucess: true, message: "todo bien" });
  } catch (error: any) {
    res.json({ sucess: false, message: error.message });
  }
  res.end();
});

export default router;
