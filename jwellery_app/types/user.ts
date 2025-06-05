// types/user.ts
import { Document } from "mongoose";
import { Order } from "./order";

export default interface user extends Document {
  username: string;
  email: string;
  password: string;
  isVerified?: boolean;
  verifyCode: string;
  verifyCodeExpiry: Date;
  role: "user" | "admin";
  orders?: Order[];
}
