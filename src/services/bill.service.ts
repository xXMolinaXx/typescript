/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type IBill } from '../common/interface/bill.interface'
import BillSchema from '../models/bill.schema'
import ProductSchema from '../models/product.schema'
class Bill {
  async create (dataBill: IBill): Promise<void> {
    let totalPay = 0
    const products = await ProductSchema.find({ _id: { $in: dataBill.products } }).exec()
    products.forEach(product => { totalPay += product.price })
    await new BillSchema({
      totalPay,
      products: dataBill.products
    }).save()
  }

  async findAll (skip: number, limit = 20, searchText: string) {
    const searchParams: any = {}
    if (searchText !== '') searchParams.nameClient = { $regex: searchText, $options: 'i' }
    const bills = BillSchema.find(searchParams).skip(skip).limit(limit)
    return await bills
  }

  async findByUser (skip: number, limit = 20, userId: string) {
    const bills = BillSchema.find({ _id: userId }).skip(skip).limit(limit)
    return await bills
  }
}
const billObject = new Bill()
export default billObject
