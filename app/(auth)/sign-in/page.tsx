import { Message } from "@/app/_components/form-message";
import SignInForm from "@/app/_components/modules/Forms/Auth/SignIn";

export default async function Login(props: { searchParams: Promise<Message> }) {
  return <SignInForm />;
}
