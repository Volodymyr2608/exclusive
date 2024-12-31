import { CIRCULARS } from "@/app/_lib/constants/circulars";
import { TCircular } from "@/app/_lib/types/_components/elements/Circular";
import { cn } from "@/app/_lib/utils/cn";
import { FC } from "react";

const Circular: FC<TCircular> = ({
  appearance,
  onClick,
  children,
  disabled = false,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={cn(
        "easy-out-animation flex cursor-pointer flex-col items-center justify-center rounded-full bg-white",
        appearance === CIRCULARS.PRIMARY &&
          "h-9 w-9",
        appearance === CIRCULARS.WITH_SHADOW &&
          "h-11 w-11 border border-white shadow hover:border-gray-950 active:border-gray-600",
        appearance === CIRCULARS.SMALL &&
          "h-9 w-9 border border-white shadow hover:border-gray-950 active:border-gray-600",
        disabled && "pointer-events-none opacity-40",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Circular;

