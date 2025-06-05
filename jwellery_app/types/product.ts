import { Document } from "mongoose";

export interface Product extends Document {
  name: string;
  description?: string;
  price: number;
  category: string;
  stock: number;
  images?: string[]; // array of image URLs
  createdAt?: Date;
  updatedAt?: Date;
}
