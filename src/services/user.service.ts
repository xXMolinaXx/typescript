import { hashString } from '../common/utils/bcrypt'
import { type credencialUser } from '../types/users.routes.types'
import UsersModel from '../models/user.schema'
class User {
  async createUser ({ password, userName }: credencialUser): Promise<boolean> {
    const hashPassword = await hashString(password)
    const userFound = await UsersModel.findOne({ userName }).exec()
    if (userFound) {
      return true
    }
    const user = new UsersModel({
      desription: '',
      password: hashPassword,
      userName,
      profilePhoto: '',
      status: ''
    })
    await user.save()
    return false
  }
}
const user = new User()
export default user
