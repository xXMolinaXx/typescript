import {Schema,model,Types} from 'mongoose';

interface user_db_schemma {
    userName:String,
    password:String,
    creatAt:Date,
    profilePhoto:String,
    status:String,
    desription:String,
    friends:Types.ObjectId[]
}

const userSchema = new Schema<user_db_schemma>({
    userName:{type:String,required:true},
    password:{type:String,required:true},
    creatAt:{type:Date,default:new Date(),required:true},
    profilePhoto:String,
    status:String,
    desription:String,
    friends:[Types.ObjectId]
})

export default  model<user_db_schemma>('user',userSchema);

