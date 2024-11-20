import type { Product } from '@/src/entities/models/product';

export interface IProductsRepository {
  getAllProducts(): Promise<Product[]>;
}