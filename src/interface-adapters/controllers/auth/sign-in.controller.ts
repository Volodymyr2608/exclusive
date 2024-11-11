import type { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import { ISignInUseCase } from '@/src/application/use-cases/auth/sign-in.use-case';
import { InputParseError } from '@/src/entities/errors/common';
import { z } from 'zod';

const inputSchema = z.object({
  email: z.string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string().min(6).max(31),
});

export type ISignInController = ReturnType<typeof signInController>;

export const signInController =
  (
    instrumentationService: IInstrumentationService,
    signInUseCase: ISignInUseCase
  ) =>
  async (input: Partial<z.infer<typeof inputSchema>>) => {
    return await instrumentationService.startSpan(
      { name: 'signIn Controller' },
      async () => {
        const { data, error: inputParseError } = inputSchema.safeParse(input)

        if (inputParseError) {
          throw new InputParseError('Invalid data', { cause: inputParseError })
        }

        return await signInUseCase(data)
      }
    )
  };
