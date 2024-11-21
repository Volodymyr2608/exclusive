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

export const createProduct = async (prevState: any, formData: FormData) => {
  const instrumentationService = getInjection('IInstrumentationService');
  return await instrumentationService.instrumentServerAction(
    'createProduct',
    { recordResponse: true },
    async () => {
      try {
        const title = formData.get("title")?.toString() ?? '';
        const price = formData.get("price")?.toString() ?? '';
        const description = formData.get("description")?.toString() ?? '';

        const createProductController = getInjection('ICreateProductController')
        const product = await createProductController({
          description,
          title,
          price
        });
        console.log(product)
        return {
          data: product
        }
      } catch (err) {
        if (err instanceof ProductError) {
          return {
            error: 'Product not created',
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