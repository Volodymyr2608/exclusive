import { Container } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '@/di/types';
import { getAllProductsController } from '@/src/interface-adapters/controllers/products/get-products.controller';
import { getAllProductsUseCase } from '@/src/application/use-cases/product/get-all-products.use-case';
import { ProductsRepository } from '@/src/infrastructure/repositories/products.repository';

export function registerProductModule(container: Container) {
  container
    .bind(DI_SYMBOLS.IGetAllProductsController)
    .toHigherOrderFunction(getAllProductsController, [
      DI_SYMBOLS.IInstrumentationService,
      DI_SYMBOLS.IGetAllProductsUseCase
    ])

  container
    .bind(DI_SYMBOLS.IGetAllProductsUseCase)
    .toHigherOrderFunction(getAllProductsUseCase, [
      DI_SYMBOLS.IInstrumentationService,
      DI_SYMBOLS.IProductsRepository,
    ]);

  container
    .bind(DI_SYMBOLS.IProductsRepository)
    .toClass(ProductsRepository, [
      DI_SYMBOLS.IInstrumentationService,
    ]);
}