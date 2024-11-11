import { Container } from '@evyweb/ioctopus';

import { signInController } from '@/src/interface-adapters/controllers/auth/sign-in.controller';
import { DI_SYMBOLS } from '@/di/types';
import { signInUseCase } from '@/src/application/use-cases/auth/sign-in.use-case';
import { AuthenticationService } from '@/src/infrastructure/services/authentication.service';

export function registerAuthenticationModule(container: Container) {
  container
    .bind(DI_SYMBOLS.ISignInController)
    .toHigherOrderFunction(signInController, [
      DI_SYMBOLS.IInstrumentationService,
      DI_SYMBOLS.ISignInUseCase,
    ]);

  container
    .bind(DI_SYMBOLS.ISignInUseCase)
    .toHigherOrderFunction(signInUseCase, [
      DI_SYMBOLS.IInstrumentationService,
      DI_SYMBOLS.IAuthenticationService,
    ]);

  container
    .bind(DI_SYMBOLS.IAuthenticationService)
    .toClass(AuthenticationService, [
      DI_SYMBOLS.IInstrumentationService,
    ]);
}
