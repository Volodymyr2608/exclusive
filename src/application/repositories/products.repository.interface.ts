import type { Product, ProductInsert } from '@/src/entities/models/product';

export interface IProductsRepository {
  getAllProducts(): Promise<Product[]>;
  createProduct(input: ProductInsert): Promise<Product>; 
}