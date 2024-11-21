


import { ProductInsert, Product } from '@/src/entities/models/product';
import type { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import type { ICrashReporterService } from '@/src/application/services/crash-reporter.service.interface';
import { IProductsRepository } from '@/src/application/repositories/products.repository.interface';
import { createClient } from '@/supabase/server';
import { ProductError } from '@/src/entities/errors/product';

export class ProductsRepository implements IProductsRepository {
  constructor(
    private readonly instrumentationService: IInstrumentationService,
    private readonly crashReporterService: ICrashReporterService
  ) {}

  async createProduct(product: ProductInsert): Promise<Product> {
    return await this.instrumentationService.startSpan(
      { name: 'ProductsRepository > createProduct' },
      async () => {
        try {
          const supabase = await createClient();
          
          const { data, error } = await supabase
            .from('products')
            .insert([
              {
                title: product.title,
                description: product.description,
                price: product.price,
                user_id: product.userId,
                category_id: null
              },
            ])
            .select()

          if (error) {
            this.crashReporterService.report(error);
            throw new ProductError('Something went wrong');
          }

          console.log(data)

          if (Array.isArray(data)) {
            return data[0]
          }
        
          return data
        } catch (err) {
          this.crashReporterService.report(err);
          throw err; // TODO: convert to Entities error
        }
      }
    );
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.instrumentationService.startSpan(
      { name: 'ProductsRepository > getAllProduct' },
      async () => {
        try {
          const supabase = await createClient();

          const { data, error } = await supabase.from('products').select();
        
          if (error) {
            this.crashReporterService.report(error);
            throw new ProductError('Something went wrong');
          }

          return data
        } catch (error) {
          this.crashReporterService.report(error);
          return []
        };
      }
    )
  }
}
