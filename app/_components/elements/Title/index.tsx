import { TTitle } from '@/app/_lib/types/_components/elements/Title'
import { cn } from '@/app/_lib/utils/cn'
import React, { FC } from 'react'

const Title: FC<TTitle> = ({ title, classNames }) => {
  return (
    <h2 className={cn('font-semibold text-4xl text-text-tertiary', classNames)}>{title}</h2>
  )
}

export default Title