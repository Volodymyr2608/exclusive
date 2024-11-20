import type { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import { IUploadFileUseCase } from '@/src/application/use-cases/common/file/upload-file.use-case';
import { IContactUseCase } from '@/src/application/use-cases/contact/contact.use-case';
import { InputParseError } from '@/src/entities/errors/common';
import { z } from 'zod';

const inputSchema = z.object({
  name: z.string().min(1, { message: "This field has to be filled." }),
  email: z.string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  phone: z.string().min(1, { message: "This field has to be filled." }),
  message: z.string().min(1, { message: "This field has to be filled." }),
  file: z.any()
});

export type IContactController = ReturnType<typeof contactController>;

export const contactController =
  (
    instrumentationService: IInstrumentationService,
    contactUseCase: IContactUseCase,
    uploadFileUseCase: IUploadFileUseCase
  ) =>
  async (input: Partial<z.infer<typeof inputSchema>>) => {
    return await instrumentationService.startSpan(
      { name: 'contact Controller' },
      async () => {
        const { data, error: inputParseError } = inputSchema.safeParse(input)

        if (inputParseError) {
          throw new InputParseError('Invalid data', { cause: inputParseError })
        }

        const { file, ...rest } = data;
        let fileData = null;

        if (file && file.size > 0) {
          const fileRes = await uploadFileUseCase({
            file,
            backetName: 'exclusive-backet/contact'
          })

          fileData = fileRes
        }

        const values = {
          ...rest,
          file: fileData
        }

        return await contactUseCase(values)
      }
    )
  };