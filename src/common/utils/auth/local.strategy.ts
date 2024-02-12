const LocalStrategy = require("passport-local");
import usersModel from "../../../models/user.schema";
import { compareStringHash } from "../bcrypt";

export const stategyLocal = new LocalStrategy(
  async (username: any, password: any, done: any) => {
    try {
      const user = await usersModel.findOne({ userName: username });
      if (!user) {
        done({ success: false, message: "No existe ningun usuario" }, false);
      } else {
        const isPassword = await compareStringHash(password, user.password);
        if (!isPassword) {
          done(null, false);
        }
        const userWithoutPass= {
          _id: user._id,
          userName: user.userName,
          profilePhoto: user.profilePhoto,
          status: user.status,
          desription: user.desription,
          friends: user.friends,
          role: user.role,
        };
        done(null, userWithoutPass);
      }
    } catch (error) {
      done(error, false);
    }
  }
);
