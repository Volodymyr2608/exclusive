import { TMailLink } from '@/app/_lib/types/_components/elements/Links/MailLink'
import React, { FC } from 'react'

const MailLink: FC<TMailLink> = ({ mail }) => {
  return (
    <a href={`mail:${mail}`}>{mail}</a>
  )
}

export default MailLink