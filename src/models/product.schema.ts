import { Schema, model, Types } from "mongoose";
import { product_db_schema } from "../common/interface/product.interface";

const productSchema = new Schema<product_db_schema>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    photo: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default model<product_db_schema>("products", productSchema);