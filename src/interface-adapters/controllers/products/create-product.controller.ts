import { IInstrumentationService } from "@/src/application/services/instrumentation.service.interface";
import { IUserService } from "@/src/application/services/user.service.interface";
import { ICreateProductUseCase } from "@/src/application/use-cases/product/create-product.use-case";
import { z } from "zod";

const inputSchema = z.object({
  title: z.string().min(1, { message: "This field has to be filled." }),
  description: z.string().min(1, { message: "This field has to be filled." }),
  price: z.string().min(1, { message: "This field has to be filled." }),
});

export type ICreateProductController = ReturnType<typeof createProductController>;

export const createProductController =
(
  instrumentationService: IInstrumentationService,
  userService: IUserService,
  createProductUseCase: ICreateProductUseCase
) => {
  return async (input: z.infer<typeof inputSchema>) => {
    return await instrumentationService.startSpan(
      { name: 'Get all products Controller' },
      async () => {
        console.log(userService.getUser)
        const user = await userService.getUser()
        const product = await createProductUseCase(input, user.id)
        
        return product
      }
    )
  }
}