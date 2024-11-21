import type { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import { IProductsRepository } from '../../repositories/products.repository.interface';

export type ICreateProductUseCase = ReturnType<typeof createProductUseCase>;

export const createProductUseCase =
  (
    instrumentationService: IInstrumentationService,
    productsRepository: IProductsRepository
  ) =>
    (input: { title: string; description: string; price: string; }, userId: string) => {
    return instrumentationService.startSpan(
      { name: 'Create product Use Case', op: 'function' },
      async () => {
        return await productsRepository.createProduct({
          ...input,
          userId
        })
      }
    );
  };