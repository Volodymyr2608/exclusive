import { TTelLink } from '@/app/_lib/types/_components/elements/Links/TelLink'
import React, { FC } from 'react'

const TelLink: FC<TTelLink> = ({ tel }) => {
  return (
    <a href={`tel:${tel}`}>{tel}</a>
  )
}

export default TelLink