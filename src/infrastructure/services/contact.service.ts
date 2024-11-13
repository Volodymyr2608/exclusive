import { IContactService } from "@/src/application/services/contact.service.interface";
import { IInstrumentationService } from "@/src/application/services/instrumentation.service.interface";
import { ContactError } from "@/src/entities/errors/contact";
import { createClient } from "@/supabase/server";


export class ContactService implements IContactService {
  constructor(
    private readonly _instrumentationService: IInstrumentationService
  ) {}

  async create(data: { email: string; phone: string; name: string; message: string; file: { id: string } | null; }): Promise<void> {
    return await this._instrumentationService.startSpan(
      { name: 'ContactService > create' },
      async () => {
        const supabase = await createClient();

        const { error } = await supabase.from('contacts').insert([
          {
            ...data
          }
        ]);
      
        if (error) {
          throw new ContactError('Incorrect contact values');
        }

        return;
      }
    )
  }
}