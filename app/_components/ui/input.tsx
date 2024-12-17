import * as React from "react";

import { cn } from "@/app/_lib/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-input",
        auth:
          "border-b border-border-color-default placeholder:text-border-color-default text-base pl-0",
        subscribe:
          "border border-primary-white bg-transparent text-text-secondary placeholder:text-secondary text-base pl-0",
      },
      sizeCss: {
        default: "h-10 px-3 py-2",
        auth: "h-10 pr-3 py-2",
        subscribe: "h-12 pr-3 pl-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      sizeCss: "default",
    },
  },
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, sizeCss, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, sizeCss, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
