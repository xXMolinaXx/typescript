import dotenv from "dotenv";
dotenv.config();
export const CONFIGURATION = {
  IS_QA: process.env.IS_QA || false,
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || "mongodb://localhost:27017/chat_hn",
  JWT_SECRET: process.env.JWT_SECRET || "contrasena",
};
