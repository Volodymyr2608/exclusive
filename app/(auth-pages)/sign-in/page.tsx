import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/app/_components/form-message";
import { SubmitButton } from "@/app/_components/submit-button";
import { Input } from "@/app/_components/ui/input";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  //const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col text-text-tertiary gap-y-12 max-w-[371px] w-full">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-4xl font-medium">Log in to Exclusive</h1>
        <p className="text-base">Enter your details below</p>
      </div>

      <div className="flex flex-col gap-y-10">
        <Input
          name="email"
          placeholder="Email"
          required
          variant="auth"
          sizeCss="auth"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          minLength={6}
          required
          variant="auth"
          sizeCss="auth"
        />
        <div className="flex justify-between items-center">
          <SubmitButton
            pendingText="Signing In..."
            formAction={signInAction}
            className="bg-button-primary text-primary-white rounded py-4 h-14 min-w-[143px]"
          >
            Log In
          </SubmitButton>
          <Link
            className="text-base text-secondary-red underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        
        {/* <FormMessage message={searchParams} /> */}
      </div>
    </form>
  );
}
