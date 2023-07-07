export interface IProduct {
  description: string
  id: string
  image: string | null
  in_stock?: number
  name: string
  price: number
  qty?: number
  rating: number | null
  unit?: string
  vitamins?: string[] | null
}
