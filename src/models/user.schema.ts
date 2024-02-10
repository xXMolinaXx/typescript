import { Schema, model, Types } from "mongoose";

interface user_db_schemma {
  userName: string;
  password: string;
  createdAt: Date;
  profilePhoto: string;
  role: string;
  status: string;
  desription: string;
  friends: Types.ObjectId[];
}

const userSchema = new Schema<user_db_schemma>({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: new Date(), required: true },
  profilePhoto: String,
  status: String,
  desription: String,
  friends: [Types.ObjectId],
  role: { type: String, default: "client", required: true },
});

export default model<user_db_schemma>("user", userSchema);
