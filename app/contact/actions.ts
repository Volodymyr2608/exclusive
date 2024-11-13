'use server'

import { getInjection } from "@/di/container";
import { InputParseError, UploadFileError } from "@/src/entities/errors/common";
import { ContactError } from "@/src/entities/errors/contact";

export const contactUsAction = async (formData: FormData) => {
  const instrumentationService = getInjection('IInstrumentationService');

  return await instrumentationService.instrumentServerAction(
    'contactUs',
    { recordResponse: true },
    async () => {
      const name = formData.get("name")?.toString();
      const email = formData.get("email")?.toString();
      const phone = formData.get("phone")?.toString();
      const message = formData.get("message")?.toString();
      const file = formData.get("file") as unknown as File;

      try {
        const contactController = getInjection('IContactController');

        await contactController({ email, name, phone, message, file });

      } catch (err) {
        if (
          err instanceof InputParseError ||
          err instanceof ContactError
        ) {
          return {
            error: 'Something went wrong',
          };
        }
        if (
          err instanceof UploadFileError
        ) {
          return {
            error: err,
          };
        }
        const crashReporterService = getInjection('ICrashReporterService');
        crashReporterService.report(err);
        return {
          error:
            'An error happened. The developers have been notified. Please try again later.',
        };
      }
    }
  )

  // if (file && file.size > 0) {
  //   const supabase = await createClient();
  //   const { data, error } = await supabase.storage.from('exclusive-backet/contact').upload(`contact_${Date.now()}`, file);

  //   if (error) {
  //     console.error(error)
  //   } else {
  //     console.log({
  //       data
  //     })
  //   }
  // }

}