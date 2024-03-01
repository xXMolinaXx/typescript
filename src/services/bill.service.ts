import { type IBill } from '../common/interface/bill.interface'
import BillSchema from '../models/bill.schema'
class Bill {
  async create (dataBill: IBill): Promise<void> {
    await new BillSchema(dataBill).save()
  }
}
const billObject = new Bill()
export default billObject
