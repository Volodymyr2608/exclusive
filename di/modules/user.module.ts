import { Container } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '@/di/types';
import { UserService } from '@/src/infrastructure/services/user.service';

export function registerUserModule(container: Container) {

  container
    .bind(DI_SYMBOLS.IUserService)
    .toClass(UserService, [
      DI_SYMBOLS.IInstrumentationService,
    ]);
}