/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  type body_res_interface,
  type userLogged
} from '../common/interface/users.interface'
import UsersModel from '../models/user.schema'
import { type credencialUser } from '../types/users.routes.types'

import { jwtGenerator } from '../common/utils/jwt/jwt'
import passport from 'passport'
import user from '../services/user.service'

const router = Router()

router.post('/creatUser', async (req, res) => {
  try {
    const { userName, password }: credencialUser = req.body
    const userFound = await user.createUser({userName, password})
    if (userFound) {
      res.json({ sucess: false, message: 'Ya existe un usuario con ese nombre de usuario' })
      res.end()
      return
    }
    res.json({ sucess: true, message: 'todo bien' })
  } catch (error: any) {
    res.json({ sucess: false, message: error.message })
  }
  res.end()
})
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    try {
      const user = req.user as userLogged
      const jwt = jwtGenerator({ rol: user.role, userId: user._id })
      res.json({
        success: true,
        message: 'Ingreso exitoso',
        data: { ...user, jwt }
      })
    } catch (error: any) {
      res.json({ sucess: false, message: error.message })
    }
  }
)

router.post('/getfriends', async (req, res) => {
  try {
    const { userId }: body_res_interface = req.body
    const user = await UsersModel.findById(userId).exec()
    const user_friend = await UsersModel
      .find({ _id: { $in: user?.friends } })
      .exec()
    const response = {
      succes: true,
      data: user_friend.map((user) => ({
        _id: user._id,
        userName: user.userName,
        profilePhoto: user.profilePhoto,
        status: user.status,
        description: user.desription
      }))
    }
    res.status(200).json(response)
  } catch (error: any) {
    res.json({ success: false, message: error.message })
  }
})
router.post('/addFriend', async (req, res) => {
  try {
    const { userName, userLoggedId } = req.body
    const userFriend = await UsersModel.findOne({ userName })
    const user = await UsersModel.findById(userLoggedId)
    const friends = user?.friends.map((userId) => userId.toHexString())
    if (friends?.find((id) => userFriend?._id.toHexString() === id)) {
      res.status(200).json({
        success: true,
        message: 'El usuario ya esta en su lista de amigos'
      })
      return
    }
    if (userFriend) {
      await UsersModel.updateOne(
        { _id: userLoggedId },
        { $push: { friends: [userFriend._id] } }
      )
      res.json({ success: true, message: 'amigo agregado' })
    } else {
      res
        .status(200)
        .json({ success: false, message: 'usuario no encontrado' })
    }
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message })
  }
})

export default router
