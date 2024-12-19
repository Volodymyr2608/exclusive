import { TDotButton } from "@/app/_lib/types/_components/elements/DotButton"
import { FC } from "react"


export const DotButton: FC<TDotButton> = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}