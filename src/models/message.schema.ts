import {Schema,model,Types } from 'mongoose';

const messageSchema = new Schema({
    message:String,
    userSendMessage:Types.ObjectId,
    userReceiveMessage:Types.ObjectId,
    createAt:Date,
})

export default  model('message',messageSchema);