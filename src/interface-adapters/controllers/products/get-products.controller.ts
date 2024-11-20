import { IInstrumentationService } from "@/src/application/services/instrumentation.service.interface";
import { IGetAllProductsUseCase } from "@/src/application/use-cases/product/get-all-products.use-case";
import { presenter } from "@/src/interface-adapters/presenters/product/all-products.presenter";

export type IGetAllProductsController = ReturnType<typeof getAllProductsController>;

export const getAllProductsController =
(
  instrumentationService: IInstrumentationService,
  getAllProductsUseCase: IGetAllProductsUseCase
) => {
  return async () => {
    return await instrumentationService.startSpan(
      { name: 'Get all products Controller' },
      async () => {
        const products = await getAllProductsUseCase()
        
        return presenter(products, instrumentationService)
      }
    )
  }
}