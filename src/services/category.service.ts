import { type category_schema } from '../common/interface/category.interface'
import CategorySchema from '../models/category.schema'
class Category {
  async insertCategory (category: category_schema): Promise<void> {
    const categoryDocument = new CategorySchema(category)
    await categoryDocument.save()
  }

  async findCategory (): Promise<any> {
    const products = await CategorySchema.find().exec()
    return products
  }

  async updateCategory (products: any, mongoId: string): Promise<void> {
    await CategorySchema.updateOne({ _id: mongoId }, { $set: { ...products } })
  }

  async deleteCategory (mongoId: string): Promise<void> {
    await CategorySchema.findByIdAndDelete(mongoId)
  }
}
const category = new Category()
export default category
