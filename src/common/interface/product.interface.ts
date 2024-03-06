export interface product_db_schema {
  name: string
  price: number
  photo: string
  platform: string
  releaseDate: Date
  description: string
  categories: string[]
  evaluation: IEvaluation[]
  meanEvaluation: number
  stock: number
}
interface IEvaluation {
  userId: string
  value: number
}

export interface ISearchProduct {
  skip: number
  limit: number
  searchText: string
}
