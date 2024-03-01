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
}
const billObject = new Bill()
export default billObject
