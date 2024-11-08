'use server'

import { createClient } from "@/supabase/server";

export const contactUsAction = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const message = formData.get("message")?.toString();
  const file = formData.get("file") as unknown as File;

  if (file && file.size > 0) {
    const supabase = await createClient();
    const { data, error } = await supabase.storage.from('exclusive-backet/contact').upload(`contact_${Date.now()}`, file);

    if (error) {
      console.error(error)
    } else {
      console.log({
        data
      })
    }
  }

}