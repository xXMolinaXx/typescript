import express from "express";
import passport from "passport";
import path from "path";
import user from "./routes/users.routes";
import message from "./routes/message.routes";
import cors from "cors";
import { myLogger } from "./middleware/auth.handler";

import { stategyLocal } from "./common/utils/auth/local.strategy";

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(cors());
app.use("/users", user);
app.use("/message", message);
passport.use(stategyLocal);

export default app;
