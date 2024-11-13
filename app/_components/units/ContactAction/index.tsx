import { TContactAction } from '@/app/_lib/types/_components/units/ContactAction'
import { Mail, Phone } from 'lucide-react'
import React, { FC } from 'react'
import ContactItem from '../../elements/ContactItem'

const ContactAction: FC<TContactAction> = ({ contactItem }) => {
  const renderItems = (item: TContactAction['contactItem']['items'][number]) => {
    if (item.type === 'phone') {
      return (
        <ContactItem key={item.text}>
          Phone: <a href={`tel:${item.text}`}>{item.text}</a>
        </ContactItem>
      )
    }
    if (item.type === 'email') {
      return (
        <ContactItem key={item.text}>
          Emails: <a href={`mail:${item.text}`}>{item.text}</a>
        </ContactItem>
      )
    }

    return <ContactItem>{item.text}</ContactItem>
  }

  return (
    <div>
      <div className='flex gap-x-4 items-center mb-6'>
        <div className='w-10 h-10 rounded-full bg-secondary-red flex justify-center items-center flex-col'>
          {contactItem.head.icon === 'phone' ? <Phone color='white' /> : <Mail color='white' /> }
        </div>
        <div className='text-base font-medium text-black'>{contactItem.head.title}</div>
      </div>
      <div className='flex flex-col gap-y-4'>
        {contactItem.items.map(renderItems)}
      </div>
      
    </div>
  )
}

export default ContactAction

