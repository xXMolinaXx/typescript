import { Schema, model } from 'mongoose'
import { type category_schema } from '../common/interface/category.interface'

const categorySchema = new Schema<category_schema>(
  {
    name: { type: String, required: true },
    description: { type: String }
  },
  {
    timestamps: true
  }
)

export default model<category_schema>('category', categorySchema)
