import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import Breadcrumbs from "../_components/units/Breadcrumbs";

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="">
      <div>
        <Breadcrumbs breadcrumbs={[]}  />
        <div>
          Welcome! {user.user_metadata.username}
        </div>
      </div>
    </div>
  );
}
