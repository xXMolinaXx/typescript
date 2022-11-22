import { Router } from "express";
import { Types } from "mongoose";
import { body_res_interface } from "../interface/users.interface";
import usersModel from "../models/user.schema";
import { credencialUser } from "../types/users.routes.types";

const router = Router();

router.post("/creatUser", async (req, res) => {
  try {
    const { userName, password }: credencialUser = req.body;
    const user = new usersModel({
      desription: "",
      password: password,
      userName: userName,
      profilePhoto: "",
      status: "",
    });
    await user.save();
    res.json({ sucess: true, message: "todo bien" });
  } catch (error: any) {
    res.json({ sucess: false, message: error.message });
  }
  res.end();
});
router.post("/login", (req, res) => {
  try {
    const { userName, password } = req.body;
    usersModel.findOne({ userName, password }, (err: any, user: any) => {
      if (user) res.json({ sucess: true, message: "todo bien", data: user });
      else res.json({ sucess: false, message: "usuario no encontrado" });
    });
  } catch (error: any) {
    res.json({ sucess: false, message: error.message });
  }
});

router.post("/getfriends", async (req, res) => {
  try {
    const { userId }: body_res_interface = req.body;
    const user = await usersModel.findById(userId).exec();
    const user_friend = await usersModel
      .find({ _id: { $in: user?.friends } })
      .exec();
    const response = {
      succes: true,
      data: user_friend.map((user) => ({
        _id: user._id,
        userName: user.userName,
        profilePhoto: user.profilePhoto,
        status: user.status,
        description: user.desription,
      })),
    };
    res.status(200).json(response);
  } catch (error: any) {
    res.json({ success: false, message: error.message });
  }
});
router.post("/addFriend", async (req, res) => {
  try {
    const { userName, userLoggedId } = req.body;
    const userFriend = await usersModel.findOne({ userName });
    const user = await usersModel.findById(userLoggedId);
    const friends = user?.friends.map((userId) => userId.toHexString());
    if (friends?.find((id) => userFriend?._id.toHexString() === id)) {
      res
        .status(200)
        .json({
          success: true,
          message: "El usuario ya esta en su lista de amigos",
        });
      return;
    }
    if (userFriend) {
      await usersModel.updateOne(
        { _id: userLoggedId },
        { $push: { friends: [userFriend._id] } }
      );
      res.json({ success: true, message: "amigo agregado" });
    } else {
      res
        .status(200)
        .json({ success: false, message: "usuario no encontrado" });
    }
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
