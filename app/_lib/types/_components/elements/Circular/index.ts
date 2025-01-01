import { CIRCULARS } from "@/app/_lib/constants/circulars";
import { HTMLAttributes, ReactNode } from "react";

export type TCircular = HTMLAttributes<HTMLButtonElement> & {
  appearance: typeof CIRCULARS[keyof typeof CIRCULARS];
  children?: ReactNode;
  disabled?: boolean;
}