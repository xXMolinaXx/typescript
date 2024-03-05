import mongoose from 'mongoose'
import { type product_db_schema } from '../common/interface/product.interface'
import ProductSchema from '../models/product.schema'
class ProductService {
  async getOneProduct (productId: string): Promise<product_db_schema | null> {
    return await ProductSchema.findById(productId)
  }

  async createProduct (products: product_db_schema): Promise<void> {
    const productsDocument = new ProductSchema(products)
    await productsDocument.save()
  }

  async findProduct (skip: number, limit = 20, searchText: string): Promise<product_db_schema[]> {
    const searchParams: any = {}
    if (searchText !== '') searchParams.name = { $regex: searchText, $options: 'i' }
    const products = ProductSchema.find(searchParams).skip(skip).limit(limit)
    return await products
  }

  async updateProduct (products: product_db_schema, mongoId: string): Promise<void> {
    await ProductSchema.updateOne({ _id: mongoId }, { $set: { ...products } })
  }

  async deleteProduct (mongoId: string): Promise<void> {
    await ProductSchema.findByIdAndDelete(mongoId)
  }
}

const productService = new ProductService()
export default productService
