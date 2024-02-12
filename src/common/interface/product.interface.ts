export interface product_db_schema {
  name: string;
  price: number;
  photo: string;
  description: string;
}

export interface ISearchProduct {
  skip: number;
  limit: number;
  searchText: string;
}
