export interface IBill {
  totalPay: number
  createdAt?: Date
  products: string[]
  userId: string
  nameClient: string
}
