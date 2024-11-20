


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
          console.log('Created')
          return {
            id: "",
            title: "",
            description: "",
            price: 0,
            created_at: "",
          }
        } catch (err) {
          this.crashReporterService.report(err);
          throw err; // TODO: convert to Entities error
        }
      }
    );
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return await this.instrumentationService.startSpan(
      { name: 'ProductsRepository > getProduct' },
      async () => {
        try {
          return {
            id: "",
            title: "",
            description: "",
            price: 0,
            created_at: "",
          }
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
