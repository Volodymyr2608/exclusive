import type { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import { IFileService } from '@/src/application/services/file.service.interface';

export type IUploadFileUseCase = ReturnType<typeof uploadFileUseCase>;

export const uploadFileUseCase =
  (
    instrumentationService: IInstrumentationService,
    fileService: IFileService
  ) =>
  (input: { file: File; backetName?: string; }) => {
    return instrumentationService.startSpan(
      { name: 'Upload file Use Case', op: 'function' },
      async () => {
        return await fileService.single(input)
      }
    );
  };