import mongoose from "mongoose";
import { product_db_schema } from "../common/interface/product.interface";
import ProductSchema from "../models/product.schema";
class ProductService {
  constructor() {}
  async createProduct(products: product_db_schema) {
    const productsDocument = new ProductSchema(products);
    await productsDocument.save();
  }
  async findProduct(skip: number, limit = 20, searchText: string) {
    const searchParams: any = {};
    if (searchText) searchParams.name = { $regex: searchText, $options: "i" };
    const products = ProductSchema.find(searchParams).skip(skip).limit(limit);
    return products;
  }
  async updateProduct(products: product_db_schema, mongoId: string) {
    await ProductSchema.updateOne({ _id: mongoId }, { $set: { ...products } });
  }
  async deleteProduct( mongoId: string) {
    await ProductSchema.findByIdAndDelete(mongoId);
  }
}

const productService = new ProductService();
export default productService;
