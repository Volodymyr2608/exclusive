import { Container } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '@/di/types';
import { contactController } from '@/src/interface-adapters/controllers/contact/contact.controller';
import { contactUseCase } from '@/src/application/use-cases/contact/contact.use-case';
import { ContactService } from '@/src/infrastructure/services/contact.service';

export function registerContactModule(container: Container) {
  container
    .bind(DI_SYMBOLS.IContactController)
    .toHigherOrderFunction(contactController, [
      DI_SYMBOLS.IInstrumentationService,
      DI_SYMBOLS.IContactUseCase,
      DI_SYMBOLS.IUploadFileUseCase
    ]);

  container
    .bind(DI_SYMBOLS.IContactUseCase)
    .toHigherOrderFunction(contactUseCase, [
      DI_SYMBOLS.IInstrumentationService,
      DI_SYMBOLS.IContactService,
    ]);

  container
    .bind(DI_SYMBOLS.IContactService)
    .toClass(ContactService, [
      DI_SYMBOLS.IInstrumentationService,
    ]);
}
