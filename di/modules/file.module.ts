import { Container } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '@/di/types';
import { uploadFileUseCase } from '@/src/application/use-cases/common/file/upload-file.use-case';
import { FileService } from '@/src/infrastructure/services/file.service';

export function registerFileModule(container: Container) {
  container
    .bind(DI_SYMBOLS.IUploadFileUseCase)
    .toHigherOrderFunction(uploadFileUseCase, [
      DI_SYMBOLS.IInstrumentationService,
      DI_SYMBOLS.IFileService,
    ]);

  container
    .bind(DI_SYMBOLS.IFileService)
    .toClass(FileService, [
      DI_SYMBOLS.IInstrumentationService,
    ]);
}