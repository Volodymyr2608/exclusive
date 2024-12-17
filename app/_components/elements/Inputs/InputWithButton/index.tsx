import { Input } from "@/app/_components/ui/input";
import { TInputWithButton } from "@/app/_lib/types/_components/elements/Inputs/InputWithButton";
import { cn } from "@/app/_lib/utils/cn";
import { Send } from "lucide-react";
import { FC } from "react";

const InputWithButton: FC<TInputWithButton> = ({ type }) => {
  return (
    <div className="relative">
      <Input
        placeholder="Email"
        type="email"
        variant="subscribe"
        sizeCss='subscribe'
        name="email"
      />
      <button
        className={cn(
          "absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-l-0 border-primary-white text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        )}
        aria-label="Subscribe"
        type={type}
      >
        <Send size={16} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}

export default InputWithButton;
