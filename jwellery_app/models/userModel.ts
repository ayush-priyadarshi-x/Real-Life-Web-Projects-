import mongoose, { Schema, model } from "mongoose";
import { PreviousOrder, Order } from "../types/order";
import user from "../types/user";

// Define order schema
// Define previous order schema
const previousOrderSchema: Schema<PreviousOrder> = new Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  orderDate: {
    // use the same field name "orderDate" for consistency
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["cancelled", "delivered"], // only these two statuses allowed here
    required: true,
  },
});

// Extend the existing order schema to add previousOrders as an array of previousOrderSchema
const orderSchema: Schema<Order> = new Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    default: "pending",
  },

  previousOrders: {
    type: [previousOrderSchema], // array of previous orders
    default: [],
  },
});

// Extend user schema to include orders
const userSchema: Schema<user> = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyCode: {
    type: String,
    required: true,
  },
  verifyCodeExpiry: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true,
  },
  orders: {
    type: [orderSchema], // Array of embedded orders
    default: [],
  },
});

const userModel =
  mongoose.models["jwellery_website"] || model("jwellery_website", userSchema);

export default userModel;
