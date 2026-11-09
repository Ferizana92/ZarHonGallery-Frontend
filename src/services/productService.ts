import { products } from '../data/products'
import type { GoldProduct, ProductCategory } from '../types/product'

// Replace this data source with fetch('/api/...') when the ASP.NET Core API is ready.
export const productService = {
  async getAll(): Promise<GoldProduct[]> { return Promise.resolve(products) },
  async getByCategory(category: ProductCategory | 'all'): Promise<GoldProduct[]> {
    return Promise.resolve(category === 'all' ? products : products.filter(p => p.category === category))
  },
}