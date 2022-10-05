import {Schema,model,Types} from 'mongoose';

const userSchema = new Schema({
    userName:String,
    password:String,
    creatAt:{type:Date,default:new Date()},
    profilePhoto:String,
    status:String,
    desription:String,
    friends:[Types.ObjectId]
})

export default  model('user',userSchema);

