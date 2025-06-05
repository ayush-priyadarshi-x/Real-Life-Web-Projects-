import mongoose, { Schema, model } from "mongoose";
import { Product } from "../types/product";

const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    images: {
      type: [String], // array of URLs
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const productModel =
  mongoose.models.Product || model<Product>("Product", productSchema);

export default productModel;
