export type ProductCategory = 'necklace' | 'bracelet' | 'earring' | 'anklet' | 'ring'
export interface GoldProduct {
  id: number
  name: string
  description: string
  price: number
  weight: number
  wagePercent: number
  karat: 18
  category: ProductCategory
  image: string
  popular: boolean
  tag?: string
}