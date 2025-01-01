import React, { FC } from 'react'
import { TStarsSvg } from '@/app/_lib/types/_components/elements/StarsSvg';

const StarSvg: FC<TStarsSvg> = ({ type, classNames }) => {
  return (
    <svg className="svg-stars block h-5 w-5">
      <use href={`/icons/stars-sprite.svg#star-${type}`} className={classNames} />
    </svg>
  )
}

export default StarSvg;
