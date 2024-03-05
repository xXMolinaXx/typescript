var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
import usersModel from "../../../models/user.schema";
import { CONFIGURATION } from "../../config/server.conf";
var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: CONFIGURATION.JWT_SECRET,
};
const jwtStrategy = new JwtStrategy(opts, async function (
  jwt_payload: any,
  done: any
) {
  try {
    const user = await usersModel.findOne({ _id: jwt_payload.sub });
    if (!user) {
      done({ success: false, message: "No existe ningun usuario" }, false);
    } else {
      const userWithoutPass = {
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
});

export default jwtStrategy;
