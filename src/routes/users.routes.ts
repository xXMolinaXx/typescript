const express = require('express');
const router = express.Router();
const usersModel = require('../models/user.schema');
router.post('/creatUser', async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = new usersModel({
            desription: '',
            password: password,
            userName: userName,
            profilePhoto: '',
            status: ''
        });
        await user.save();
        res.json({ sucess: true, message: 'todo bien' });
    } catch (error) {
        res.json({ sucess: false, message: error.message });
    }
    res.end();

});
router.post('/login', (req, res) => {
    try {
        const { userName, password } = req.body;
        usersModel.findOne({ userName, password }, (err, user) => {
            if (user) res.json({ sucess: true, message: 'todo bien', data: user });
            else res.json({ sucess: false, message: 'usuario no encontrado' });
        });
    } catch (error) {
        res.json({ sucess: false, message: error.message })
    }
});

router.post('/addFriend', (req, res) => {
    try {
        const { userName, userLoggedId } = req.body;
        console.log(userName, userLoggedId)
        usersModel.findOne({ userName }, (err, user) => {
            if (user) {
                usersModel.updateOne({ _id: userLoggedId }, { $push: { friends: [user._id] } }, (err, res) => {
                    if(res) res.json({ success: true, message: 'amigo agregado' });
                    else res.json({ success: false, message: 'amigo no agregado' });
                })
                
            } else res.json({ success: false, message: 'usuario no encontrado' });
        });
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
});

module.exports = router;