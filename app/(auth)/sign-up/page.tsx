import { signUpAction } from "@/app/(auth)/actions";
import { FormMessage, Message } from "@/app/_components/form-message";
import { SubmitButton } from "@/app/_components/submit-button";
import { Input } from "@/app/_components/ui/input";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

export default async function SignUp(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4">
      <form className="flex flex-col text-text-tertiary gap-y-12 max-w-[371px] w-full">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-4xl font-medium">Create an account</h1>
          <p className="text-base">Enter your details below</p>
        </div>
        
        <div className="flex flex-col gap-y-10">
          <Input
            name="username"
            placeholder="Name"
            required
            variant="auth"
            sizeCss="auth"
          />
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
          <SubmitButton
            // formAction={signUpAction}
            pendingText="Signing up..."
            className="bg-button-primary text-primary-white rounded py-4 h-14"
          >
            Create Account
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <div className="flex flex-col gap-y-8 justify-center items-center">
        <Button className="flex justify-center gap-x-4 w-full border border-border-color-default rounded min-h-14">
          <Image src="/icons/google.svg" width={24} height={24} alt="Google icon" /> Sign up with Google
        </Button>
        <p className="text-sm">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
      
    </div>
  );
}
