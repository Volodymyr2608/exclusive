import type { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import type { IContactService } from '@/src/application/services/contact.service.interface';

export type IContactUseCase = ReturnType<typeof contactUseCase>;

export const contactUseCase =
  (
    instrumentationService: IInstrumentationService,
    contactService: IContactService
  ) =>
  (input: { email: string; phone: string; name: string; message: string; file: { id: string } | null; }) => {
    return instrumentationService.startSpan(
      { name: 'contact Use Case', op: 'function' },
      async () => {
        return await contactService.create(input)
      }
    );
  };