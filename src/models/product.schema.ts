import { Schema, model } from 'mongoose'
import { type product_db_schema } from '../common/interface/product.interface'

const productSchema = new Schema<product_db_schema>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    photo: String,
    description: String,
    categories: [String],
    evaluation: {
      userId: Schema.Types.ObjectId,
      value: { type: Number, min: 0, max: 5 }
    },
    meanEvaluation: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
)

export default model<product_db_schema>('products', productSchema)
