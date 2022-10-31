import express from 'express';
import { Types } from "mongoose";
import { body_res_interface } from '../interface/users.interface';
const router = express.Router();
import usersModel from '../models/user.schema';
import { credencialUser } from '../types/users.routes.types';

router.post('/creatUser', async (req, res) => {
    try {
        const { userName, password } : credencialUser = req.body;
        const user = new usersModel({
            desription: '',
            password: password,
            userName: userName,
            profilePhoto: '',
            status: ''
        });
        await user.save();
        res.json({ sucess: true, message: 'todo bien' });
    } catch (error:any) {
        res.json({ sucess: false, message: error.message });
    }
    res.end();

});
router.post('/login', (req, res) => {
    try {
        const { userName, password } = req.body;
        usersModel.findOne({ userName, password }, (err:any, user:any) => {
            if (user) res.json({ sucess: true, message: 'todo bien', data: user });
            else res.json({ sucess: false, message: 'usuario no encontrado' });
        });
    } catch (error:any) {
        res.json({ sucess: false, message: error.message })
    }
});

router.post('/getfriends',async (req, res) => {
    try {
        const { userId }:body_res_interface = req.body;
        const user = await usersModel.findById(userId).exec();
        const user_friend = await usersModel.find({_id:{$in:user?.friends } }).exec();
        const response = {succes:true,data:user_friend.map(user=>({
            _id:user._id,
            userName:user.userName,
            profilePhoto:user.profilePhoto,
            status:user.status,
            description:user.desription
        }))}
        res.status(200).json(response);
    } catch (error:any ) {
        res.json({ success: false, message: error.message })
    }
});
router.post('/addFriend', (req, res) => {
    try {
        const { userName, userLoggedId } = req.body;
        usersModel.findOne({ userName }, (err:any, user:any) => {
            if (user) {
                usersModel.updateOne({ _id: userLoggedId }, { $push: { friends: [user._id] } }, (err:any, res2:any) => {
                    if(res2) res.json({ success: true, message: 'amigo agregado' });
                    else res.json({ success: false, message: 'amigo no agregado' });
                })
                
            } else res.status(200).json({ success: false, message: 'usuario no encontrado' });
        });
    } catch (error:any ) {
        res.json({ success: false, message: error.message })
    }
});

export default router;