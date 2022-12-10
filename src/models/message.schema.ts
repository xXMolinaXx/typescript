import {Schema,model,Types } from 'mongoose';

const messagesSchema = new Schema({ sendAtd: Date,message: String, userId:String });
const messageSchema = new Schema({
    message:[messagesSchema],
    users:[String],
    createAt:Date,
})

export default  model('message',messageSchema);