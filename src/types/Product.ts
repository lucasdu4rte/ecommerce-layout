type Installments = {
  quantity: number
  value: number
}

export interface IProductResponse {
  imageUrl: string
  installments?: Installments[]
  listPrice: number
  price: number
  productId: number
  productName: string
  stars: number
}

export interface IProduct {
  id: number
  image: string;
  title: string;
  stars: number;
  basePrice?: string;
  price: string;
  creditPrice: string;
  originalData: IProductResponse;
}
