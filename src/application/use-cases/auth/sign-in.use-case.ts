import type { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import type { IAuthenticationService } from '@/src/application/services/authentication.service.interface';

export type ISignInUseCase = ReturnType<typeof signInUseCase>;

export const signInUseCase =
  (
    instrumentationService: IInstrumentationService,
    authenticationService: IAuthenticationService
  ) =>
  (input: { email: string; password: string }) => {
    return instrumentationService.startSpan(
      { name: 'signIn Use Case', op: 'function' },
      async () => {
        return await authenticationService.signIn(input)
      }
    );
  };
