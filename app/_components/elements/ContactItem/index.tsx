import { TContactItem } from '@/app/_lib/types/_components/elements/ContactItem';
import React, { FC } from 'react'

const ContactItem: FC<TContactItem> = ({ children }) => {
  return (
    <div className='text-sm text-text-tertiary'>{ children }</div>
  )
}

export default ContactItem;
