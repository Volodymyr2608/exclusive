'use server'

import { getInjection } from "@/di/container"
import { ProductError } from "@/src/entities/errors/product";

export const getAllProducts = async () => {
  const instrumentationService = getInjection('IInstrumentationService');
  return await instrumentationService.instrumentServerAction(
    'getAllProducts',
    { recordResponse: true },
    async () => {
      try {
        const getAllProductsController  = getInjection('IGetAllProductsController')
        const products = await getAllProductsController()
        return {
          data: products
        }
      } catch (err) {
        if (
          err instanceof ProductError) {
          return {
            error: 'Products is not avaliable',
          };
        }
        const crashReporterService = getInjection('ICrashReporterService');
        crashReporterService.report(err);
        return {
          error:
            'An error happened. The developers have been notified. Please try again later.',
        };
      }
    }
  )
}