import { Schema, model } from 'mongoose'
import { type IBill } from '../common/interface/bill.interface'

const billSchema = new Schema<IBill>({
  products: [String],
  totalPay: Number
},
{
  timestamps: true
})
export default model<IBill>('bill', billSchema)
