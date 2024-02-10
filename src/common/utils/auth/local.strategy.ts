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
        console.log(password);
        const isPassword = await compareStringHash(password, user.password);
        console.log(isPassword);
        if (!isPassword) {
          done(null, false);
        }
        done(null, user);
      }
    } catch (error) {
      done(error, false);
    }
  }
);
