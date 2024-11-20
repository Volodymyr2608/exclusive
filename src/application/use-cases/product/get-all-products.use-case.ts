import type { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import { IProductsRepository } from '../../repositories/products.repository.interface';

export type IGetAllProductsUseCase = ReturnType<typeof getAllProductsUseCase>;

export const getAllProductsUseCase =
  (
    instrumentationService: IInstrumentationService,
    productsRepository: IProductsRepository
  ) =>
  () => {
    return instrumentationService.startSpan(
      { name: 'Get all products Use Case', op: 'function' },
      async () => {
        return await productsRepository.getAllProducts()
      }
    );
  };